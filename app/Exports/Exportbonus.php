<?php

namespace App\Exports;

use App\User;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithTitle;

use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use App\Models\Bonus_periods;
use App\Models\Engineers;
use App\Models\Sms_job;
use App\Exports\Bonussheet;
use DB;
use App\Models\Job_lookup;
use App\Models\Utilita_job;
class Exportbonus implements WithMultipleSheets
{
    
    private $data;

    public function _construct() {
        $this->data = new UserService();
    }

    public function sheets(): array
    {
     
        $sheets = [];
       
        $_REQUEST['file_id']==3;
        $team=[];
        if($_REQUEST['file_id']=='1'){
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
            if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
            if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
            if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); } 
        }
          elseif($_REQUEST['file_id']=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
           if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }  
        }else{
            $bonus_periods =Bonus_periods::where('period',$_REQUEST['period'])->where('year',$_REQUEST['year_id'])->orderBy('wc','asc')->get();
            if(count($bonus_periods)==0){
              return 'sorry data not found';
          }
            if($bonus_periods){
                $rows =$bonus_periods->count();
                $no = $rows-1;
                 $start_date = $bonus_periods[0]->wc;
                $end_date = date('Y-m-d', strtotime($bonus_periods[$no]->wc.' + 5 days'));
                
            }
          
             foreach($bonus_periods as $k => $vl){
              
                     $nextKey = $k+1;
                     $todate='';                     
                    if(isset($bonus_periods[$nextKey])){
                      $todate = $bonus_periods[$nextKey]->wc;
                    }else{
                        $todate=$end_date;
                        }
                        
                     /*
                     15-6-22
                     $teamQ= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_day','appointment_date','time_lookups.in_hours_end','post_code',
                      DB::raw('"sms" as table_type'))->join('teams','teams.regions_sort_name','=','sms_jobs.regions_sort_name');
                     */
                    $teamQ= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_day','appointment_date','time_lookups.in_hours_end','post_code',
                        DB::raw('"sms" as table_type'));

                        $teamQ->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
                        if($_REQUEST['team_id']!=''){
                          $teamQ->where('sms_jobs.parent_engineer_id', '=', $_REQUEST['team_id']);
                        }
                        if($start_date!=''){ $teamQ->whereDate('appointment_date', '>=', $vl->wc); }
                        if($end_date!=''){ $teamQ->whereDate('appointment_date', '<', $todate); }
                         //Utilita
                       $utilita=  Utilita_job::select(
                        'utilita_jobs.id',
                        DB::raw('"" as select_work_type'),
                        DB::raw('utilita_jobs.job_type as work_type'),
                        DB::raw('utilita_jobs.job_status as status'),
                        'utilita_jobs.engineer_id',
                        'engineer',
                        'week_day',
                        DB::raw('utilita_jobs.schedule_date as appointment_date'),
                        'time_lookups.in_hours_end','post_code',
                        DB::raw('"sms" as table_type'))->join('time_lookups','utilita_jobs.week_day','=','time_lookups.day');
                        $utilita->join('sms_teams','sms_teams.child_engineer_id','=','utilita_jobs.engineer_id'); 

                        if($_REQUEST['team_id']!=''){
                             /*
                            15-06-2022 changed
                             $utilita->where('sms_teams.team_id', '=', $request->team_id);
                             */
                            $utilita->where('sms_teams.parent_engineer_id', '=', $_REQUEST['team_id']);
                          }
                          if($start_date!=''){ $utilita->whereDate('schedule_date', '>=', $vl->wc); }
                        if($end_date!=''){ $utilita->whereDate('schedule_date', '<', $todate); }

                     
                        if(isset($_REQUEST['company']) && $_REQUEST['company']==0){
                            
                            $utilita->union($teamQ);
                            $team_result =$utilita->orderBy('appointment_date','asc')->get();
                        }
                        elseif(isset($_REQUEST['company']) && $_REQUEST['company']==1){ // 1 = utilita
                            $team_result = $utilita->orderBy('appointment_date','asc')->get();
                        }
                        elseif(isset($_REQUEST['company']) && $_REQUEST['company']==2){ // 2 = sms
                            $team_result =$teamQ->orderBy('appointment_date','asc')->get();
                        }
                        
                       // dd($team_result->toSql());
                         if($team_result)
                         {
                           
                            foreach($team_result as $vle){
                                                              //m25_postcodes
                                                              $post_code = explode(" ",$vle->post_code);
                                                              $post_code= $post_code[0];
                                                              $m25_postcodes = DB::table('m25_postcodes')->select('name')->where('name', 'LIKE', '%'.$post_code)->first();
                                                              //m25_postcodes
                              
                              $vle['status'] = strtolower($vle->status);
                              $work_type= ($vle->select_work_type!=''?$vle->select_work_type:$vle->work_type);
                              if($vle->status=='completed'){
                                $team[$vle->engineer][$vl->wc][$vle->week_day]['completed'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['completed'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['completed']+1:1);

                               // $pu_result =Job_lookup::select('pu','revenue')->where('job_type',$work_type)->first();
                               $pu_result =Job_lookup::select('pu','revenue','revenue_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vle->appointment_date)->whereDate('to_date', '>=', $vle->appointment_date)->first();
                        if($pu_result){
                          if($m25_postcodes){
                            $pu_result->revenue = $pu_result->revenue_M25;
                            }
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']+$pu_result->pu:$pu_result->pu);
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']+$pu_result->revenue:$pu_result->revenue);
                        }else{
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']:0);
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']:0);
                        }
                                }elseif($vle->status=='aborted'){
                                  $team[$vle->engineer][$vl->wc][$vle->week_day]['aborted'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['aborted'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['aborted']+1:1);
  
                                 // $pu_result =Job_lookup::select('pu','revenue')->where('job_type',$work_type)->first();
                                  
                                  $pu_result =Job_lookup::select('pu_aborted','revenue_aborted','revenue_aborted_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vle->appointment_date)->whereDate('to_date', '>=', $vle->appointment_date)->first();
                          if($pu_result){
                            if($m25_postcodes){
                              $pu_result->revenue_aborted = $pu_result->revenue_aborted_M25;
                              }
                              $team[$vle->engineer][$vl->wc][$vle->week_day]['engineer_id']=$vle->engineer_id;
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['appointment_date']=$vle->appointment_date;  

                            $team[$vle->engineer][$vl->wc][$vle->week_day]['pu_no'][] =$pu_result->pu_aborted;
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']+$pu_result->pu_aborted:$pu_result->pu_aborted);
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']+$pu_result->revenue_aborted:$pu_result->revenue_aborted);
                          }else{
                            
                              $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                              $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']:0);
                              $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']:0);
                            
                          }
                                  }
                               // $team[$vle->engineer][$vl->wc][$vle->week_day][]= $vle;
                            }
                         }
                         else
                         {
                        
                         }
                        
                    }
               
          }
         /** print query   toSql(); */
        
        foreach($team as $pk => $periods)
        {
          
          foreach($periods as $dk => $day){
            
            
            foreach($day as $k => $vl){
             
              $team[$pk][$dk][$k]['bonus_pus'] = max(0,$vl['pu']-6); 
              $team[$pk][$dk][$k]['bonus'] = ($team[$pk][$dk][$k]['bonus_pus'] *20)+10;
            }


          }
            
            
         }
         
         ksort($team);
       //echo '<pre/>'; print_r($team); exit;
        $sheets[] = new Bonussheet($team);
    
        return $sheets;
    }
}





/*
use Maatwebsite\Excel\Concerns\FromCollection;
class ExportJobs implements FromCollection
{
    public function collection()
    {
        //
        return User::get();
    }
}
*/