<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;
use DB;
use App\Exports\Exportsms;
use App\Exports\ExportsmsList;
use App\Exports\Exportworkmix;
use App\Models\Utilita_job;
use App\Models\Morrison_jobs;
use App\Models\Engineers;
use App\Models\Sms_job;
use Illuminate\Support\Facades\Redirect;
use App\Models\Job_lookup;
use App\Models\Engineer_lookup;
class Sms_report extends Controller
{
    public function sms_list(Request $request){
      $filename='sms_'.strtotime(time()).'.xlsx';
          
          return Excel::download(new ExportsmsList, $filename);
          
    }
    public function export() 
    {
      
        //performance export
        $start_date = date("Y-m-d",strtotime("-6 day"));
        $today_date = date('Y-m-d');
        
        $month='';
        if(isset($_REQUEST['start_date'])){
          $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['start_date'])));
        }
        if(isset($_REQUEST['end_date'])){
          $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['end_date'])));
        }
        //$query= new Utilita_job;
        $_REQUEST['file_id']=3;
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
           // $q= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');
           $q= Sms_job::select('sms_jobs.id','regions_sort_name','engineer_id','engineer','appointment_date','status','select_work_type','work_type','time_lookups.in_hours_start','time_lookups.in_hours_end');
           $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        
        if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');;
        }

        
        if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!=''){
          if($_REQUEST['work_type']!='all'){          
               $q->where('job_lookups.contract',$_REQUEST['work_type']);
          }
        }
        $q->where('sms_jobs.regions_sort_name','!=','');
        if($month!=''){ $q->whereMonth('appointment_date', '=', $month); }
        if($start_date!=''){ $q->whereDate('appointment_date', '>=', $start_date); }
        if($today_date!=''){ $q->whereDate('appointment_date', '<=', $today_date); }
        if(isset($_REQUEST['job_type']) && $_REQUEST['job_type']!=''){
          $q->where('work_type',$_REQUEST['job_type']);
        }
        if(isset($_REQUEST['work_completed']) && $_REQUEST['work_completed']!='' && $_REQUEST['work_completed']!='all'){
          
              if($_REQUEST['work_completed']=='in_hours'){
                 $q->whereTime('sms_jobs.completed_at', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              if($_REQUEST['work_completed']=='out_of_hours'){
                $q->whereTime('sms_jobs.completed_at', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
             }
          }
          //utilita
          

          $utilita= Utilita_job::select(
            'utilita_jobs.id',
            DB::raw('(select regions_sort_name from sms_teams where sms_teams.child_engineer_id=utilita_jobs.engineer_id and from_date <= utilita_jobs.schedule_date and to_date >= utilita_jobs.schedule_date) as regions_sort_name'),
          'engineer_id',
          'engineer',
          DB::raw('utilita_jobs.schedule_date as appointment_date'),
          DB::raw('utilita_jobs.job_status as status'),
          DB::raw('"" as select_work_type'),
          DB::raw('utilita_jobs.job_type as work_type'),
          'time_lookups.in_hours_start',
          'time_lookups.in_hours_end');
          $utilita->join('sms_teams', function ($join) {
            $join->on('sms_teams.child_engineer_id', '=', 'utilita_jobs.engineer_id');
                 
                         });
           $utilita->join('time_lookups','utilita_jobs.week_day','=','time_lookups.day');

          if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!=''){
               $utilita->join('job_lookups','utilita_jobs.job_type','=','job_lookups.job_type');;
          }


          if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!=''){
            if($_REQUEST['work_type']!='all'){          
                  $utilita->where('job_lookups.contract',$_REQUEST['work_type']);
            }
          }

          

    if($month!=''){ $utilita->whereMonth('schedule_date', '=', $month); }
    if($start_date!=''){ $utilita->whereDate('schedule_date', '>=', $start_date); }
    if($today_date!=''){ $utilita->whereDate('schedule_date', '<=', $today_date); }
    if(isset($_REQUEST['job_type']) && $_REQUEST['job_type']!=''){
    $utilita->where('job_type',$_REQUEST['job_type']);
    }
    

    if(isset($_REQUEST['work_completed']) && $_REQUEST['work_completed']!='' && $_REQUEST['work_completed']!='all'){
              
      if($_REQUEST['work_completed']=='in_hours'){
        $utilita->whereDate('job_status','Completed');
        $utilita->whereTime('utilita_jobs.schedule_end_time', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
      }
      if($_REQUEST['work_completed']=='out_of_hours'){
        $utilita->whereDate('job_status','Completed');
        $utilita->whereTime('utilita_jobs.schedule_end_time', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
    }
    }
  
    
    if(isset($_REQUEST['company']) && $_REQUEST['company']==0){
            $utilita->union($q);
            $q = $utilita;
          }
    elseif(isset($_REQUEST['company']) && $_REQUEST['company']==1){ // 1 = utilita
            $q  = $utilita;
          
          }
    elseif(isset($_REQUEST['company']) && $_REQUEST['company']==2){ // 2 = sms
          $q = $q->orderBy('engineer','asc');
        }
    
          }
         /** print query   toSql(); */
        // dd($q->toSql());
        $q=$q->count();
       if($q>0){
        $filename='sms_'.strtotime(time()).'.xlsx';
        
        return Excel::download(new Exportsms, $filename);
       }else{
        return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
    }

    public function workmixexport() 
    {
        
        $start_date = date("Y-m-d",strtotime("-6 day"));
        $today_date = date('Y-m-d');
        
        $month='';
        if(isset($_REQUEST['start_date'])){
          $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['start_date'])));
        }
        if(isset($_REQUEST['end_date'])){
          $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['end_date'])));
        }
        //$query= new Utilita_job;
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
           // $q= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');

          //  $q= Sms_job::select('sms_jobs.*',DB::raw('DATE_FORMAT(sms_jobs.arrived_at,"%H:%i:%s") as engineer_arrived'),DB::raw('teams.engineer_name as teams_engineer_name'),'time_lookups.in_hours_start','time_lookups.in_hours_end')->join('teams','teams.regions_sort_name','=','sms_jobs.regions_sort_name');
          $q= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_day','appointment_date',DB::raw('DATE_FORMAT(sms_jobs.arrived_at,"%H:%i:%s") as engineer_arrived'),DB::raw('teams.engineer_name as teams_engineer_name'),'time_lookups.in_hours_start','time_lookups.in_hours_end')->join('teams','teams.regions_sort_name','=','sms_jobs.regions_sort_name');
        $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        
        if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');;
        }
        
        if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!='all'){
          $q->where('job_lookups.contract',$_REQUEST['file_id']);
        }
        
        if($month!=''){ $q->whereMonth('appointment_date', '=', $month); }
        if($start_date!=''){ $q->whereDate('appointment_date', '>=', $start_date); }
        if($today_date!=''){ $q->whereDate('appointment_date', '<=', $today_date); }
        if(isset($_REQUEST['job_type']) && $_REQUEST['job_type']!=''){
          $q->where('work_type',$_REQUEST['job_type']);
        }
        if(isset($_REQUEST['work_completed']) && $_REQUEST['work_completed']!='' && $_REQUEST['work_completed']!='all'){
          
              if($_REQUEST['work_completed']=='in_hours'){
                 $q->whereTime('sms_jobs.completed_at', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              if($_REQUEST['work_completed']=='out_of_hours'){
                $q->whereTime('sms_jobs.completed_at', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
             }
          }
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
                      DB::raw('DATE_FORMAT(utilita_jobs.schedule_start_time,"%H:%i:%s") as engineer_arrived'),
                      DB::raw('sms_teams.parent_engineer as teams_engineer_name'),
                      'time_lookups.in_hours_start',
                      'time_lookups.in_hours_end'
                      )->join('time_lookups','utilita_jobs.week_day','=','time_lookups.day');
                      $utilita->join('sms_teams','sms_teams.child_engineer_id','=','utilita_jobs.engineer_id');
                     
        
                      if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!=''){
                      $utilita->join('job_lookups','utilita_jobs.job_type','=','job_lookups.job_type');;
                      }
                      if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!='all'){
                      $utilita->where('job_lookups.contract',$_REQUEST['file_id']);
                      }
        
                      if($month!=''){ $utilita->whereMonth('schedule_date', '=', $month); }
                      if($start_date!=''){ $utilita->whereDate('schedule_date', '>=', $start_date); }
                      if($today_date!=''){ $utilita->whereDate('schedule_date', '<=', $today_date); }
                      if(isset($_REQUEST['job_type']) && $_REQUEST['job_type']!=''){
                      $utilita->where('job_type',$_REQUEST['job_type']);
                      }
        
                      if(isset($_REQUEST['work_completed']) && $_REQUEST['work_completed']!='' && $_REQUEST['work_completed']!='all'){
        
                        if($_REQUEST['work_completed']=='in_hours'){
                        $utilita->whereDate('job_status','Completed');
                        $utilita->whereTime('utilita_jobs.schedule_end_time', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
                        }
                        if($_REQUEST['work_completed']=='out_of_hours'){
                        $utilita->whereDate('job_status','Completed');
                        $utilita->whereTime('utilita_jobs.schedule_end_time', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
                        }
                        }
                        
                        if(isset($_REQUEST['company']) && $_REQUEST['company']==0){
                          $utilita->union($q);
                          $q = $utilita;
                        }
                  elseif(isset($_REQUEST['company']) && $_REQUEST['company']==1){ // 1 = utilita
                    //      $q  = $utilita;
                          $q = $utilita;
                        }
                  elseif(isset($_REQUEST['company']) && $_REQUEST['company']==2){ // 2 = sms
                        $q = $q;
                      }
          
          }
         /** print query   toSql(); */
        // dd($q->toSql());
        $q=$q->count();
       
       if($q>0){
        $filename='workmix_'.time().'.xlsx';
        
        return Excel::download(new Exportworkmix, $filename);
       }else{
        return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
    }
    public function workmixexport_view(Request $request) 
    {
        
        $start_date = date("Y-m-d",strtotime("-6 day"));
        $today_date = date('Y-m-d');
        
        $month='';
        if(isset($request->start_date)){
          $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $request->start_date)));
        }
        if(isset($request->end_date)){
          $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $request->end_date)));
        }
        //$query= new Utilita_job;
        if($request->file_id=='1'){
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
            if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
            if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
            if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); } 
            $job =$q->get();
        }
          elseif($request->file_id=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
           if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }  
           $job =$q->get();
        }else{
            $q= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_day','appointment_date',DB::raw('DATE_FORMAT(sms_jobs.arrived_at,"%H:%i:%s") as engineer_arrived'),DB::raw('teams.engineer_name as teams_engineer_name'),'time_lookups.in_hours_start','time_lookups.in_hours_end')->join('teams','teams.regions_sort_name','=','sms_jobs.regions_sort_name');
        $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        
        if(isset($request->file_id) && $request->file_id!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');;
        }
        if(isset($request->file_id) && $request->file_id!='all'){
          $q->where('job_lookups.contract',$request->file_id);
        }
        
        if($month!=''){ $q->whereMonth('appointment_date', '=', $month); }
        if($start_date!=''){ $q->whereDate('appointment_date', '>=', $start_date); }
        if($today_date!=''){ $q->whereDate('appointment_date', '<=', $today_date); }
        if(isset($request->job_type) && $request->job_type!=''){
          $q->where('work_type',$request->job_type);
        }
        if(isset($request->work_completed) && $request->work_completed!='' && $request->work_completed!='all'){
          
              if($request->work_completed=='in_hours'){
                 $q->whereTime('sms_jobs.completed_at', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              if($request->work_completed=='out_of_hours'){
                $q->whereTime('sms_jobs.completed_at', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
             }
          }
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
              DB::raw('DATE_FORMAT(utilita_jobs.schedule_start_time,"%H:%i:%s") as engineer_arrived'),
              DB::raw('sms_teams.parent_engineer as teams_engineer_name'),
              'time_lookups.in_hours_start',
              'time_lookups.in_hours_end'
              )->join('time_lookups','utilita_jobs.week_day','=','time_lookups.day');
              $utilita->join('sms_teams','sms_teams.child_engineer_id','=','utilita_jobs.engineer_id');
             

              if(isset($request->file_id) && $request->file_id!=''){
              $utilita->join('job_lookups','utilita_jobs.job_type','=','job_lookups.job_type');;
              }
              if(isset($request->file_id) && $request->file_id!='all'){
              $utilita->where('job_lookups.contract',$request->file_id);
              }

              if($month!=''){ $utilita->whereMonth('schedule_date', '=', $month); }
              if($start_date!=''){ $utilita->whereDate('schedule_date', '>=', $start_date); }
              if($today_date!=''){ $utilita->whereDate('schedule_date', '<=', $today_date); }
              if(isset($request->job_type) && $request->job_type!=''){
              $utilita->where('job_type',$request->job_type);
              }

              if(isset($request->work_completed) && $request->work_completed!='' && $request->work_completed!='all'){

                if($request->work_completed=='in_hours'){
                $utilita->whereDate('job_status','Completed');
                $utilita->whereTime('utilita_jobs.schedule_end_time', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
                }
                if($request->work_completed=='out_of_hours'){
                $utilita->whereDate('job_status','Completed');
                $utilita->whereTime('utilita_jobs.schedule_end_time', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
                }
                }
                
                if(isset($request->company) && $request->company==0){
                  $utilita->union($q);
                  $job = $utilita->get();
                }
          elseif(isset($request->company) && $request->company==1){ // 1 = utilita
            //      $q  = $utilita;
                  $job = $utilita->groupBy('utilita_jobs.id')->get();
                }
          elseif(isset($request->company) && $request->company==2){ // 2 = sms
                $job = $q->get();
              }
  
          }
          //$job =$q->get();
         /** print query   toSql(); */
       //  dd($q->toSql());
       
        
      //  dd($job);
       if($job){
        $team=[];
        
        $total_engineer=0;
        $seleceted_days = 0;
      if(isset($request->start_date)){
        $start_date = strtotime(str_replace('/', '-', $request->start_date));
      }
      if(isset($request->end_date)){
        $enfday_date=strtotime(str_replace('/', '-', $request->end_date));
        $datediff = $enfday_date - $start_date;
        $seleceted_days = round($datediff / (60 * 60 * 24));
        if($request->end_date==$request->start_date){
            $seleceted_days = 1;
        }

      }
      $national=[];
         
      $national['total_job']=0;
      $national['completed']=0;
      $national['completed_per']=0;
      $national['Single_per']=0;
      $national['Dual_per']=0;
      $national['Other_per']=0;
      $national['in_hours_per']=0;
      $national['out_hours_per']=0;

      $national['Single']=0;
      $national['Dual']=0;
      $national['Other']=0;
      $national['in_hours']=0;
      $national['out_hours']=0;
      
      
        foreach($job as $vl)
        {
            $work_type= ($vl->select_work_type!=''?$vl->select_work_type:$vl->work_type);
            
            
            
            
            
            $national['total_job'] = $national['total_job']+1;

            if(isset($team[$vl->teams_engineer_name][$vl->engineer_id])){
                 //working_day 
                 
                 if (in_array($vl->appointment_date, $team[$vl->teams_engineer_name][$vl->engineer_id]['appointment_date'])) {
                    //$team[$vl->teams_engineer_name][$vl->engineer_id]['working_day'] = $team[$vl->teams_engineer_name][$vl->engineer_id]['working_day']+1;
                }else{
                    
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['working_day'] =$team[$vl->teams_engineer_name][$vl->engineer_id]['working_day']+1;
                }
                //total
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['total_job'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['total_job'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['total_job']+1:1);
                //Completed 
                    if($vl->status!='cancelled'){
                        
                        //pu
                        $pu_result =Job_lookup::select('mix','pu','revenue')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                        if($pu_result){
                          $team[$vl->teams_engineer_name][$vl->engineer_id]['completed'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['completed'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['completed']+1:1);
                         $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix])?$team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix]+1:1);
                        
                         if($vl->in_hours_start<= $vl->engineer_arrived && $vl->in_hours_end >= $vl->engineer_arrived){
                          $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']+1:1);
                      }else{
                          $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'] = (isset($team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'])?$team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']+1:1);
                      }
                        }

                    
                    
                }

            }else{
                //engineer_name
                $total_engineer += 1;
                $team[$vl->teams_engineer_name]['regions_engineer_total'] =(isset($team[$vl->teams_engineer_name]['regions_engineer_total'])?$team
                [$vl->teams_engineer_name]['regions_engineer_total']+1:1);
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['engineer_name'] =$vl->engineer;
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['appointment_date'][] =$vl->appointment_date;
                    $team[$vl->teams_engineer_name][$vl->engineer_id]['working_day'] =1;
                //total
                     $team[$vl->teams_engineer_name][$vl->engineer_id]['total_job'] =1;
                
                //Completed  
                
                if($vl->status!='cancelled'){
                            
                        
                            $pu_result =Job_lookup::select('mix','pu','revenue')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                            if($pu_result){
                                
                                if($pu_result->mix=='Single'){
                                 $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] =1;
                                }
                                else{
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['Single'] = 0;
                                }
                                if($pu_result->mix=='Dual'){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] =1;
                                  }  else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual'] =0;
                                   }
                                   if($pu_result->mix=='Other'){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id][$pu_result->mix] =1;
                                   }else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['Other'] =0;
                                   }
                                   $team[$vl->teams_engineer_name][$vl->engineer_id]['completed'] = 1; 

                                   if($vl->in_hours_start<= $vl->engineer_arrived && $vl->in_hours_end >= $vl->engineer_arrived){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'] =1;
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'] =0;
                                }else{
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours'] =1;
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours'] =0;
                                }    
                                }else{
                                  $team[$vl->teams_engineer_name][$vl->engineer_id]['completed'] = 0; 
                                }
                        
                                
                    }else{
                      $team[$vl->teams_engineer_name][$vl->engineer_id]['completed'] = 0;
                    }
                 
                    
            }

            
         }
         
         //Percentage Calculator

         foreach($job as $vl)
         {
            
             if(isset($team[$vl->teams_engineer_name][$vl->engineer_id])){
                 
                 //Completed per
                     
                 if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['completed']!=0){    
                         $team[$vl->teams_engineer_name][$vl->engineer_id]['completed_per'] = number_format(($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                        }else{
                          $team[$vl->teams_engineer_name][$vl->engineer_id]['completed_per'] = 0.00 ;
                       }
                       //  $national['completed_per'] = $team[$vl->teams_engineer_name][$vl->engineer_id]['completed_per'] + $national['completed_per'];
                     
                         if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['Single']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['Single']!=0){
                         $team[$vl->teams_engineer_name][$vl->engineer_id]['Single_per'] = number_format(($team[$vl->teams_engineer_name][$vl->engineer_id]['Single']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                         
                         
                         }else{
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['Single_per'] = 0.00 ;
                         }
                   
                         if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['Dual']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual']!=0){
                            $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual_per'] = number_format(($team[$vl->teams_engineer_name][$vl->engineer_id]['Dual']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                            
                           
                            }else{
                               $team[$vl->teams_engineer_name][$vl->engineer_id]['Dual_per'] = 0.00 ;
                            }

                          if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['Other']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['Other']!=0){
                                $team[$vl->teams_engineer_name][$vl->engineer_id]['Other_per'] = number_format(($team[$vl->teams_engineer_name][$vl->engineer_id]['Other']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                                
                               
                                }else{
                                   $team[$vl->teams_engineer_name][$vl->engineer_id]['Other_per'] = '0.00' ;
                                }
                                
                                if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']!=0){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours_per'] = number_format(($team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                                    
                                    
                                    }else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['in_hours_per'] = 0.00 ;
                                    }
                                
                                if(isset($team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']) && $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']!=0){
                                    $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours_per'] = number_format(($team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours']/($team[$vl->teams_engineer_name][$vl->engineer_id]['completed']))*100,2) ;
                                    
                                    
                                    }else{
                                       $team[$vl->teams_engineer_name][$vl->engineer_id]['out_hours_per'] = 0.00 ;
                                    }
                 
             }
             
             
          }
         foreach($team as $k => $tm){
            
            foreach($tm as $d => $t){
                
                if($d!='regions_engineer_total'){

                    if(isset($t['completed'])){
                      $national['completed'] = $t['completed'] + $national['completed'];
                    }
                    
                    if(isset($t['Single'])){
                        $national['Single'] = $t['Single'] + $national['Single'];
                      }
                    
                    if(isset($t['Dual'])){
                        $national['Dual'] = $t['Dual'] + $national['Dual'];
                      }
                    
                    if(isset($t['Other'])){
                        $national['Other'] = $t['Other'] + $national['Other'];
                      }
                    
                    if(isset($t['in_hours'])){
                        $national['in_hours'] = $t['in_hours'] + $national['in_hours'];
                      }
                    
                    if(isset($t['out_hours'])){
                        $national['out_hours'] = $t['out_hours'] + $national['out_hours'];
                      }

                }
                
            }
         }
      //  echo '<pre/>'; print_r($team); exit;
         
       
        return view('reports.workmix_report', ['data' => $team,'national'=>$national,'view'=>1]);
       }else{
        return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
    }

    public function performance_view(Request $request) 
    {
      
        //performance export
        $start_date = date("Y-m-d",strtotime("-6 day"));
        $today_date = date('Y-m-d');
        
        $month='';
        if(isset($request->start_date)){
          $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $request->start_date)));
        }
        if(isset($request->end_date)){
          $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $request->end_date)));
        }
        //$query= new Utilita_job;
        $request->file_id=3;
        if($request->file_id=='1'){
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
            if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
            if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
            if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); } 
            $job=$q->orderBy('engineer','asc')->get();
        }
          elseif($request->file_id=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
           if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }  
           $job=$q->orderBy('engineer','asc')->get();
        }else{
          
            //$q= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');
            
           
            $q= Sms_job::select('sms_jobs.id','regions_sort_name','engineer_id','engineer','appointment_date','status','select_work_type','work_type','time_lookups.in_hours_start','time_lookups.in_hours_end','post_code',
            DB::raw('"sms" as table_type'));
            $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        $q->where('sms_jobs.regions_sort_name','!=','');
        
        if(isset($request->file_idwork_type) && $request->file_idwork_type!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');
          $q->where('job_lookups.contract',$request->work_type);
        }
        
        if(isset($request->work_type) && $request->work_type['label']!=''){
          
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');
          if($request->work_type['label']!='All'){
            
               $q->where('job_lookups.contract',$request->work_type['label']);
          }
        }
        
        if($month!=''){ $q->whereMonth('appointment_date', '=', $month); }
        
        if($start_date!=''){ $q->whereDate('appointment_date', '>=', $start_date); }
        if($today_date!=''){ $q->whereDate('appointment_date', '<=', $today_date); }
        
        if(isset($request->job_type) && $request->job_type!=''){
          $q->where('work_type',$request->job_type);
        }
        if(isset($request->work_completed) && $request->work_completed!='' && $request->work_completed!='all'){
          
              if($request->work_completed['value']=='in_hours'){
                 $q->whereTime('sms_jobs.completed_at', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              if($request->work_completed['value']=='out_of_hours'){
                $q->whereTime('sms_jobs.completed_at', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
             }
          }

          //utilita
          

                    $utilita= Utilita_job::select(
                      'utilita_jobs.id',
                      DB::raw('(select regions_sort_name from sms_teams where sms_teams.child_engineer_id=utilita_jobs.engineer_id and from_date <= utilita_jobs.schedule_date and to_date >= utilita_jobs.schedule_date) as regions_sort_name'),
                    'engineer_id',
                    'engineer',
                    DB::raw('utilita_jobs.schedule_date as appointment_date'),
                    DB::raw('utilita_jobs.job_status as status'),
                    DB::raw('"" as select_work_type'),
                    DB::raw('utilita_jobs.job_type as work_type'),
                    'time_lookups.in_hours_start',
                    'time_lookups.in_hours_end',
                    'post_code',
                     DB::raw('"utilita" as table_type')
                  );
                    $utilita->join('sms_teams', function ($join) {
                      $join->on('sms_teams.child_engineer_id', '=', 'utilita_jobs.engineer_id');
                           
                                   });
                     $utilita->join('time_lookups','utilita_jobs.week_day','=','time_lookups.day');


              if(isset($request->file_id) && $request->file_id!=''){
              //$utilita->join('job_lookups','utilita_jobs.job_type','=','job_lookups.job_type');;
              }
              if(isset($request->file_id) && $request->file_id!='all'){
             // $utilita->where('job_lookups.contract',$request->file_id);
              }
              if(isset($request->work_type) && $request->work_type['label']!=''){
          
                $utilita->join('job_lookups','utilita_jobs.job_type','=','job_lookups.job_type');
                if($request->work_type['label']!='All'){
                  
                     $utilita->where('job_lookups.contract',$request->work_type['label']);
                }
              }

              if($month!=''){ $utilita->whereMonth('schedule_date', '=', $month); }
              if($start_date!=''){ $utilita->whereDate('schedule_date', '>=', $start_date); }
              if($today_date!=''){ $utilita->whereDate('schedule_date', '<=', $today_date); }
              if(isset($request->job_type) && $request->job_type!=''){
              $utilita->where('job_type',$request->job_type);
              }
              if(isset($request->work_completed) && $request->work_completed!='' && $request->work_completed!='all'){

              if($request->work_completed=='in_hours'){
              $utilita->whereDate('job_status','Completed');
              $utilita->whereTime('utilita_jobs.schedule_end_time', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              if($request->work_completed=='out_of_hours'){
              $utilita->whereDate('job_status','Completed');
              $utilita->whereTime('utilita_jobs.schedule_end_time', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              }
              
              if(isset($request->company) && $request->company==0){
                      $utilita->union($q);
                      $job = $utilita->orderBy('engineer','asc')->get();
                    }
              elseif(isset($request->company) && $request->company==1){ // 1 = utilita
                      $q  = $utilita;
                      $job = $utilita->orderBy('engineer','asc')->groupBy('utilita_jobs.id')->get();
                    }
              elseif(isset($request->company) && $request->company==2){ // 2 = sms
                    $job = $q->orderBy('engineer','asc')->get();
                  }
              
             // dd($utilita->toSql());
              //End utilita


          }

       if($q->count()>0){
        
        $team=[];
        $total_engineer=0;
        $seleceted_days = 0;
      if(isset($request->start_date)){
        $start_date = strtotime(str_replace('/', '-', $request->start_date));
      }
      if(isset($request->end_date)){
        
        $enfday_date=strtotime(str_replace('/', '-', $request->end_date));
        $datediff = $enfday_date - $start_date;
        $seleceted_days = round($datediff / (60 * 60 * 24));
        if($request->end_date==$request->start_date){
            $seleceted_days = 1;
        }

      }
      $national=[];
      $national['total_work_day']=0;   
      $national['total_job']=0;
      $national['completed']=0;
      $national['completed_per']=0;
      $national['aborted']=0;
      $national['aborted_per']=0;
      $national['cancelled']=0;
      $national['mpl_pu']=0;
      $national['pu']=0;
      $national['open']=0;
      $national['pu_day']=0;
      $national['bonus_pus']=0;
      $national['bonus_pus_day']=0;
      $national['bonus']=0;
      $national['bonus_day']=0;
      $national['revenue']=0;
      $national['revenue_day']=0;
      $national['profit']=0;
      $national['profit_day']=0;

        foreach($job as $vl)
        {
          //m25_postcodes
              $post_code = explode(" ",$vl->post_code);
              $post_code= $post_code[0];
              $m25_postcodes = DB::table('m25_postcodes')->select('name')->where('name', 'LIKE', '%'.$post_code)->first();
          //m25_postcodes

          $vl->status= strtolower($vl->status);
            $work_type= ($vl->select_work_type!=''?$vl->select_work_type:$vl->work_type);
            
            
            if($vl->status=='completed'){
                $national['completed'] = $national['completed'] +1;
            }
            if($vl->status=='aborted'){
                $national['aborted'] = $national['aborted'] +1;
                
            }
            if($vl->status=='cancelled'){
                $national['cancelled'] = $national['cancelled'] +1;
            }
            if($vl->status=='assigned' || $vl->status=='departed' || $vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                 {
                $national['open'] = $national['open'] +1;
                }
            
            $national['total_job'] = $national['total_job']+1;
            
            if(isset($team[$vl->regions_sort_name][$vl->engineer_id])){
                 //working_day 
                 
                 if (in_array($vl->appointment_date, $team[$vl->regions_sort_name][$vl->engineer_id]['appointment_date'])) {
                    //$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['working_day']+1;
                }else{
                  $team[$vl->regions_sort_name][$vl->engineer_id]['appointment_date'][] =$vl->appointment_date;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['working_day'] =$team[$vl->regions_sort_name][$vl->engineer_id]['working_day']+1;
                }
                //total
                    $team[$vl->regions_sort_name][$vl->engineer_id]['total_job'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['total_job'])?$team[$vl->regions_sort_name][$vl->engineer_id]['total_job']+1:1);
                //Completed 
                    if($vl->status=='completed'){
                        $team[$vl->regions_sort_name][$vl->engineer_id]['completed'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['completed'])?$team[$vl->regions_sort_name][$vl->engineer_id]['completed']+1:1);
                        //pu
                        $pu_result =Job_lookup::select('pu','revenue','revenue_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                        if($pu_result){
                          if($m25_postcodes){
                            $pu_result->revenue = $pu_result->revenue_M25;
                            }
                            $team[$vl->regions_sort_name][$vl->engineer_id]['work_type'][] =$work_type;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu']+$pu_result->pu:$pu_result->pu);
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['revenue'])?$team[$vl->regions_sort_name][$vl->engineer_id]['revenue']+$pu_result->revenue:$pu_result->revenue);

                        $dt = date('Ymd',strtotime($vl->appointment_date));
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt]+$pu_result->pu:$pu_result->pu);
                        }

                    }
                //cancelled     
                if($vl->status=='cancelled'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cancelled']+1:1);
                 } 
                //aborted
                if($vl->status=='aborted'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['aborted'])?$team[$vl->regions_sort_name][$vl->engineer_id]['aborted']+1:1);
                   
                      $pu_result =Job_lookup::select('pu_aborted','revenue_aborted','revenue_aborted_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();

                      if($pu_result){
                        if($m25_postcodes){
                          $pu_result->revenue_aborted = $pu_result->revenue_aborted_M25;
                          }

                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu']+$pu_result->pu_aborted:$pu_result->pu_aborted);
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['revenue'])?$team[$vl->regions_sort_name][$vl->engineer_id]['revenue']+$pu_result->revenue_aborted:$pu_result->revenue_aborted);

                        $dt = date('Ymd',strtotime($vl->appointment_date));
                        
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt]+$pu_result->pu_aborted:$pu_result->pu_aborted);
                      }

                 } 
                //awaiting info  
                if($vl->status=='assigned' || $vl->status=='departed' || $vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                 {
                    $team[$vl->regions_sort_name][$vl->engineer_id]['open']=(isset($team[$vl->regions_sort_name][$vl->engineer_id]['open'])?$team[$vl->regions_sort_name][$vl->engineer_id]['open']+1:1);
                    }

                //Cost per working day 
                // $cost_per_day = Engineer_lookup::where('engineer_id',$vl->engineer_id)->first();   
                // if($cost_per_day){
                //    $team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day']+$pu_result->cost:0);
                // }    

            }else{
                //engineer_name
                $total_engineer += 1;
                $team[$vl->regions_sort_name]['regions_engineer_total'] =(isset($team[$vl->regions_sort_name]['regions_engineer_total'])?$team
                [$vl->regions_sort_name]['regions_engineer_total']+1:1);
                    $team[$vl->regions_sort_name][$vl->engineer_id]['engineer_name'] =$vl->engineer;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['engineer_id'] =$vl->engineer_id;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['appointment_date'][] =$vl->appointment_date;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['working_day'] =1;
                //total
                     $team[$vl->regions_sort_name][$vl->engineer_id]['total_job'] =1;
                //cancelled     
                     if($vl->status=='cancelled'){
                        $team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'] = 1;
                     }else{
                        $team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'] = 0;
                     }
                //aborted
                if($vl->status=='aborted'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted'] = 1;

                    //pu
                    $pu_result =Job_lookup::select('pu_aborted','revenue_aborted','revenue_aborted_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                    
                    if($pu_result){
                      if($m25_postcodes){
                        $pu_result->revenue_aborted = $pu_result->revenue_aborted_M25;
                        }
                        $team[$vl->regions_sort_name][$vl->engineer_id]['work_type'][] =$work_type;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = $pu_result->pu_aborted;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = $pu_result->revenue_aborted;

                        $dt = date('Ymd',strtotime($vl->appointment_date));
                        
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt]+$pu_result->pu_aborted:$pu_result->pu_aborted);
                        }else{
                               
                            $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                            $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                        }
                   }else{
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted'] = 0;
                    $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu']:0);
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['revenue'])?$team[$vl->regions_sort_name][$vl->engineer_id]['revenue']:0);
                   }
                   if($vl->status=='assigned' || $vl->status=='departed' || $vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                   {
                    $team[$vl->regions_sort_name][$vl->engineer_id]['open'] = 1;
                    }else{
                        $team[$vl->regions_sort_name][$vl->engineer_id]['open'] = 0;
                    }
                //Completed  
                    if($vl->status=='completed'){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['completed'] = 1;
                    //pu
                    $pu_result =Job_lookup::select('pu','revenue','revenue_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vl->appointment_date)->whereDate('to_date', '>=', $vl->appointment_date)->first();
                    
                    if($pu_result){
                      if($m25_postcodes){
                        $pu_result->revenue = $pu_result->revenue_M25;
                        }
                        $team[$vl->regions_sort_name][$vl->engineer_id]['work_type'][] =$work_type;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = $pu_result->pu;
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = $pu_result->revenue;
                        $dt = date('Ymd',strtotime($vl->appointment_date));
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt]+$pu_result->pu:$pu_result->pu);
                        }else{
                          $dt = date('Ymd',strtotime($vl->appointment_date));
                         // $team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'][$dt] = $pu_result->pu; 
                            $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                            $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                        }
                        
                    }else{
                      
                        $team[$vl->regions_sort_name][$vl->engineer_id]['completed'] = 0; 
                        $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu']:0);
                        $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['revenue'])?$team[$vl->regions_sort_name][$vl->engineer_id]['revenue']:0);
                     //   $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] = 0;
                      //      $team[$vl->regions_sort_name][$vl->engineer_id]['revenue'] = 0;
                    }
                //awaiting info    
                if($vl->status=='assigned' || $vl->status=='departed' || $vl->status=='awaiting info' || $vl->status=='arrived' || $vl->status=='received' || $vl->status=='started')
                    {
                    $team[$vl->regions_sort_name][$vl->engineer_id]['open'] = 1;
                    }
                //Cost per working day 
                 $cost_per_day = Engineer_lookup::where('engineer_id',$vl->engineer_id)->first();   
                 if($cost_per_day){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'] = $cost_per_day->cost;
                 }else{
                    $team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'] = 0;
                 }
                    
            }

            
         }
         //Percentage Calculator
//echo '<pre/>'; print_r($team); exit;


         foreach($job as $vl)
         {
            
             if(isset($team[$vl->regions_sort_name][$vl->engineer_id])){
                 
              
                 //Completed per
                     if($vl->status=='completed'){
                        
                         $team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['completed']/($team[$vl->regions_sort_name][$vl->engineer_id]['total_job']-(isset($team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cancelled']:0)))*100,2) ;

                         $national['completed_per'] = $team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'] + $national['completed_per'];
                     }else{
                      if(!isset($team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'])){
                       $team[$vl->regions_sort_name][$vl->engineer_id]['completed_per'] =0;
                      }
                     }
                 
                 //aborted per
                 if($vl->status=='aborted'){
                    
                     $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['aborted']/($team[$vl->regions_sort_name][$vl->engineer_id]['total_job']-(isset($team[$vl->regions_sort_name][$vl->engineer_id]['cancelled'])?$team[$vl->regions_sort_name][$vl->engineer_id]['cancelled']:0)))*100,2) ;

                     $national['aborted_per'] = $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] + $national['aborted_per'];
                     
                    }else{
                   // $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] =0;
                   if(!isset($team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'])){
                    $team[$vl->regions_sort_name][$vl->engineer_id]['aborted_per'] =0;
                   }
                  }
                    
                //pu_day  
                   if(isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu']) && $team[$vl->regions_sort_name][$vl->engineer_id]['pu'] >= 0){
                       //$team[$vl->regions_sort_name][$vl->engineer_id]['pu_day'] = round(($team[$vl->regions_sort_name][$vl->engineer_id]['pu']/$seleceted_days)/$total_engineer,4) ;
                       
                        
                       
                     //  $team[$vl->regions_sort_name][$vl->engineer_id]['pu_day'] = round(($team[$vl->regions_sort_name][$vl->engineer_id]['pu']/$seleceted_days)/$team[$vl->regions_sort_name]['regions_engineer_total'],4) ;
                     $total_engineer =1;
                      $team[$vl->regions_sort_name][$vl->engineer_id]['pu_day'] = number_format(($team[$vl->regions_sort_name][$vl->engineer_id]['pu']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'])/$total_engineer,4) ;

                     $team[$vl->regions_sort_name][$vl->engineer_id]['regions_engineer_total']=$team[$vl->regions_sort_name]['regions_engineer_total'];
                      
                     
                      //$team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus'] = max(0,$team[$vl->regions_sort_name][$vl->engineer_id]['pu']-($team[$vl->regions_sort_name][$vl->engineer_id]['working_day']*6));
                      $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus'] = 0;

                      $team[$vl->regions_sort_name][$vl->engineer_id]['mpl_pu']=0;
                      $team[$vl->regions_sort_name][$vl->engineer_id]['pu_value_reduction']=0;
                      if(isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'])){
                      foreach($team[$vl->regions_sort_name][$vl->engineer_id]['pu_date'] as $appointment_dates => $dvl){
                                                
                        /** mpl_pu */
                        $mpl_pu=6.00;
                              $pu_value_reduction=0;
                              $holiday_mpl = \App\Models\Holiday_mpl::where('holiday_date',$appointment_dates)->where('engineer_id',$vl->engineer_id)->first();  
                              if($holiday_mpl){
                                $mpl_pu = $holiday_mpl->mpl_pu;
                                if($holiday_mpl->holiday_type!='unproductive_time_absence'){
                                    $pu_value_reduction = $holiday_mpl->pu_value_reduction;
                                }  
                            }
                            $team[$vl->regions_sort_name][$vl->engineer_id]['mpl_pu'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['mpl_pu'])?$team[$vl->regions_sort_name][$vl->engineer_id]['mpl_pu']+ $mpl_pu:$mpl_pu);

                            $team[$vl->regions_sort_name][$vl->engineer_id]['pu_value_reduction'] = (isset($team[$vl->regions_sort_name][$vl->engineer_id]['pu_value_reduction'])?$team[$vl->regions_sort_name][$vl->engineer_id]['pu_value_reduction'] + $pu_value_reduction:$pu_value_reduction);
                        /* */
                        $team_bonus_pus = floatval(max(0,$dvl-$mpl_pu)); 
                        $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus'] =$team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']  + $team_bonus_pus;
                      }
                    }
                      
                     // $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']/$seleceted_days;
                      $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                      
                      $team[$vl->regions_sort_name][$vl->engineer_id]['bonus'] = ($team[$vl->regions_sort_name][$vl->engineer_id]['bonus_pus']*20)+($team[$vl->regions_sort_name][$vl->engineer_id]['working_day']*10);     
                       //=(Bonus PU*20)+10
                      // $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus']/$seleceted_days;
                       $team[$vl->regions_sort_name][$vl->engineer_id]['bonus_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['bonus']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                       
                     // $team[$vl->regions_sort_name][$vl->engineer_id]['revenue_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['revenue']/$seleceted_days;
                       $team[$vl->regions_sort_name][$vl->engineer_id]['revenue_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['revenue']/$team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                    }else{
                     // dd($vl->engineer_id);
                     
                    }
                 //profit
                 $engineer_total_cost =($team[$vl->regions_sort_name][$vl->engineer_id]['working_day']*$team[$vl->regions_sort_name][$vl->engineer_id]['cost_per_day'])+$team[$vl->regions_sort_name][$vl->engineer_id]['bonus'];
                 $team[$vl->regions_sort_name][$vl->engineer_id]['profit'] = $team[$vl->regions_sort_name][$vl->engineer_id]['revenue']-$engineer_total_cost;
                 
                 //Profit/Day
                 //$team[$vl->regions_sort_name][$vl->engineer_id]['profit_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['profit']/$seleceted_days; 
                 $team[$vl->regions_sort_name][$vl->engineer_id]['profit_day'] = $team[$vl->regions_sort_name][$vl->engineer_id]['profit']/ 
                 $team[$vl->regions_sort_name][$vl->engineer_id]['working_day'];
                 $team[$vl->regions_sort_name][$vl->engineer_id]['seleceted_DATE_days'] = $seleceted_days;
               
                  
             }
             
             
          }
         foreach($team as $k => $tm){
            foreach($tm as $d => $t){
                if($d!='regions_engineer_total'){

                  
                  if(isset($t['working_day'])){
                    $national['total_work_day'] = $t['working_day'] + $national['total_work_day'];
                    }
                    
                              if(isset($t['mpl_pu'])){
                                $national['mpl_pu'] = $t['mpl_pu'] + $national['mpl_pu'];
                                }
                                if(isset($t['pu'])){
                                $national['pu'] = $t['pu'] + $national['pu'];
                                }
                                if(isset($t['pu_day'])){
                                $national['pu_day'] = $t['pu_day'] + $national['pu_day'];
                                }
                                if(isset($t['bonus_pus'])){
                                $national['bonus_pus'] = $t['bonus_pus'] + $national['bonus_pus'];
                                }
                                if(isset($t['bonus_pus_day'])){
                                $national['bonus_pus_day'] = $t['bonus_pus_day'] + $national['bonus_pus_day'];
                                } 
                                if(isset($t['bonus'])){
                                $national['bonus'] = $t['bonus'] + $national['bonus'];
                                }  
                                if(isset($t['bonus_day'])){
                                $national['bonus_day'] = $t['bonus_day'] + $national['bonus_day'];
                                }  

                                if(isset($t['revenue'])){
                                $national['revenue'] = $t['revenue'] + $national['revenue'];
                                }

                                if(isset($t['revenue_day'])){
                                $national['revenue_day'] = $t['revenue_day'] + $national['revenue_day'];
                                }

                                if(isset($t['profit'])){
                                $national['profit'] = $t['profit'] + $national['profit'];
                                }

                                if(isset($t['profit_day'])){
                                $national['profit_day'] = $t['profit_day'] + $national['profit_day'];
                                }
                }
                
            }
         }
         $user = JWTAuth::toUser($request->input('token'));
         if($user){
          $request->role = $user['roles'];
          
         }
         
        // echo '<pre/>'; print_r($team['SO1']['sms584']); exit;
        ksort($team);
       
        return view('sms_performance_view', ['data' => $team,'national'=>$national,'view'=>1,'query'=>$request]);
        
       }else{
        return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
    }
    
}
