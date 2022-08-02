<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Bonus_periods;
use App\Models\Engineers;
use App\Models\Sms_job;
use App\Exports\Exportbonus;
use App\Models\Job_lookup;
use App\Models\Engineer_lookup;
use Input;
use Excel;
use App\Models\Utilita_job;
class Bonus_periodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function export() 
    {
       
        
        $filename=' Bonus_periods'.time().'.xlsx';
        return Excel::download(new Exportbonus, $filename);
       
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
                
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $data= $request->except('token','next');
            if($request->week_date){
                
                $week_date = $request->week_date;
                foreach($week_date as $vl){
                    
                    $bonus_periods = new Bonus_periods();
                    $bonus_periods['created_by'] = $request->created_by;
                    $bonus_periods['month'] = $request->month;
                    $bonus_periods['year'] = $request->year;
                    $bonus_periods['wc'] = date('Y-m-d', strtotime(str_replace('/', '-', $vl['WC'])));
                    $bonus_periods['period'] = $vl['period'];
                    $bonus_periods->save();
                    
                }
            }
           return response()->json(array('success' => true,'message' => 'Data inserted successfully'), 200);
            
        }catch (\Exception $e) 
        {
           $message = $e->getMessage();
           
            return response()->json(array('success' => false,'message'=> $message));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
      
      $Bonus_periods = Bonus_periods::select('id',DB::raw('DATE_FORMAT(wc,"%d/%m/%Y") as WC'),DB::raw('period as period'))->where('month',$request->month)->where('year',$request->year)->get();
      if($Bonus_periods){
          return response()->json(array('success' => true,'data' => $Bonus_periods), 200);
   }
   else{
       return response()->json(array('success' => false,'message'=> 'not found')); 
   }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        try{
                
          $user = JWTAuth::toUser($request->input('token'));
          $request->request->add(['created_by'=> $user->id]);
          $data= $request->except('token','next');
          if($request->week_date){
              
              $week_date = $request->week_date;
              foreach($week_date as $vl){
                  
                  $bonus_periods = Bonus_periods::find($vl['id']);
                  $bonus_periods['created_by'] = $request->created_by;
                  $bonus_periods['month'] = $request->month;
                  $bonus_periods['year'] = $request->year;
                  $bonus_periods['wc'] = date('Y-m-d', strtotime(str_replace('/', '-', $vl['WC'])));
                  $bonus_periods['period'] = $vl['period'];
                  $bonus_periods->save();
                  
              }
          }
         return response()->json(array('success' => true,'message' => 'Data inserted successfully'), 200);
          
      }catch (\Exception $e) 
      {
         $message = $e->getMessage();
         
          return response()->json(array('success' => false,'message'=> $message));
      }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    
    public function report_view(Request $request) 
    {
     
        $sheets = [];
       
        $request->file_id==3;
        $team=[];
        if($request->file_id=='1'){
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
            if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
            if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
            if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); } 
        }
          elseif($request->file_id=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
           if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }  
        }else{
            
            $bonus_periods =Bonus_periods::where('period',$request->period)->where('year',$request->year_id)->orderBy('wc','asc')->get();
            
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
                          15-06-2022 changed
                         $teamQ= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_day','appointment_date','time_lookups.in_hours_end','post_code',
                        DB::raw('"sms" as table_type'))->join('teams','teams.regions_sort_name','=','sms_jobs.regions_sort_name');
                       */
                      $teamQ= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_day','appointment_date','time_lookups.in_hours_end','post_code',
                        DB::raw('"sms" as table_type'));
                        
                        $teamQ->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
                        if($request->team_id!=''){
                          $teamQ->where('sms_jobs.parent_engineer_id', '=', $request->team_id);
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
                        if($request->team_id!=''){
                            /*
                            15-06-2022 changed
                             $utilita->where('sms_teams.team_id', '=', $request->team_id);
                             */
                            $utilita->where('sms_teams.parent_engineer_id', '=', $request->team_id);
                            
                          }
                          if($start_date!=''){ $utilita->whereDate('schedule_date', '>=', $vl->wc); }
                        if($end_date!=''){ $utilita->whereDate('schedule_date', '<', $todate); }

                     
                        if(isset($request->company) && $request->company==0){
                            
                            $utilita->union($teamQ);
                            $team_result =$utilita->orderBy('appointment_date','asc')->get();
                        }
                        elseif(isset($request->company) && $request->company==1){ // 1 = utilita
                            $team_result =$utilita->orderBy('appointment_date','asc')->get();
                        }
                        elseif(isset($request->company) && $request->company==2){ // 2 = sms
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
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['engineer_id']=$vle->engineer_id;
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['appointment_date']=$vle->appointment_date;  
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['pu_no'][] =$pu_result->pu;
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']+$pu_result->pu:$pu_result->pu);
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']+$pu_result->revenue:$pu_result->revenue);
                        }else{
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['engineer_id']=$vle->engineer_id;
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['appointment_date']=$vle->appointment_date; 
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']:0);
                            $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']:0);
                          
                        }
                                }
                                elseif($vle->status=='aborted'){
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
                              $team[$vle->engineer][$vl->wc][$vle->week_day]['engineer_id']=$vle->engineer_id;
                              $team[$vle->engineer][$vl->wc][$vle->week_day]['appointment_date']=$vle->appointment_date; 
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
                //$vl['appointment_date'];
              $mpl_pu=6.00;
              $pu_value_reduction=0;
              $holiday_mpl = \App\Models\Holiday_mpl::where('holiday_date',$vl['appointment_date'])->where('engineer_id',$vl['engineer_id'])->first();  
              if($holiday_mpl){
                $mpl_pu = $holiday_mpl->mpl_pu;
                $team[$pk][$dk][$k]['holiday_mpl_list'] = json_encode($holiday_mpl);
                //$team[$pk][$dk][$k]['holiday_mpl_list'][$holiday_mpl->holiday_type][] = json_encode($holiday_mpl);
                if($holiday_mpl->holiday_type!='unproductive_time_absence'){
                    $pu_value_reduction = $holiday_mpl->pu_value_reduction;
                }  
            } 
              $team[$pk][$dk][$k]['mpl_pu'] = $mpl_pu;
              $team[$pk][$dk][$k]['pu_value_reduction'] = $pu_value_reduction;
              
              $team[$pk][$dk][$k]['pu']= floatval($vl['pu']);
              $team[$pk][$dk][$k]['bonus_pus'] = floatval(max(0,$vl['pu']-$mpl_pu)); 
              $team[$pk][$dk][$k]['bonus'] = ($team[$pk][$dk][$k]['bonus_pus'] *20)+10;
              $average_per_day_bonus = \App\Models\Engineer_average_bonus::where('current_period',$request->period)->where('engineer_id',$vl['engineer_id'])->pluck('average_per_day_bonus')->first();
              if($average_per_day_bonus){
                $team[$pk][$dk][$k]['average_per_day_bonus'] = $average_per_day_bonus;
              }
            }


          }
            
            
         }
         
         $user = JWTAuth::toUser($request->input('token'));
         $role =0;
         if($user){
          $role = $user['roles'];
          
         }
         ksort($team);
         
     // echo '<pre/>'; dd($team['David Brice']); exit;
       return view('reports.sms_bonus_view', ['data' => $team,"period"=>$request->period,'role'=>$role]);
    
        
    }
    function getWeeklyDayNumbers($startDate, $endDate) {
        $weekdays = array('monday' => 0, 'tuesday' => 0, 'wednesday' => 0, 'thursday' => 0, 'friday' => 0, 'saturday' => 0, 'sunday' => 0);
       
        $weekdays['saturday'] += $this->number_of_days(0x40, $startDate, $endDate); // SATURDAY
        $weekdays['sunday'] += $this->number_of_days(0x01, $startDate, $endDate); // SUNDAY
        $total_week_days = $weekdays['saturday'] + $weekdays['sunday'];
        return $total_week_days;
    }
    public function dayscount($date2,$date1)
    {
        $diff = abs(strtotime($date2) - strtotime($date1));
        $total_days = floor((strtotime($date2) - strtotime($date1))/60/60/24);
        $weekdays = $this->getWeeklyDayNumbers($date1,$date2);

        $total_days = $total_days - $weekdays;
        return $total_days;
    }
    function number_of_days($days, $start, $end) {
        $start = strtotime($start); $end = strtotime($end);
        $w = array(date('w', $start), date('w', $end));
        $x = floor(($end-$start)/604800);
        $sum = 0;
        for ($day = 0;$day < 7;++$day) {
            if ($days & pow(2, $day)) {
                $sum += $x + ($w[0] > $w[1]?$w[0] <= $day || $day <= $w[1] : $w[0] <= $day && $day <= $w[1]);
            }
        }
        return $sum;
    }
    public function previous_three_periods(Request $request)
    {
       // $engineers = Engineers::where('employee_ref_no','!=','')->pluck('engineer_id')->toArray();
     //  $employee_ref_no =array_values($engineers);
      // $employee_ref_no = implode(", ", $employee_ref_no);   
       
        
        $current_year = date('Y');
        $current_month= date('m');
        
  
        $current_year_month = date('Y-m'); 
        $current_first_week_date = date('Y-m-d',strtotime('last monday',strtotime(date('Y-m-01')))); 
        
        $current_period = DB::select('SELECT `period` FROM `bonus_periods` WHERE DATE_FORMAT(wc,"%Y-%m-%d") = "'.$current_first_week_date.'" ORDER BY wc DESC LIMIT 0,1');
        
        if($current_period){
            $current_period = $current_period[0]->period;
           $current_bonus_engineers = \App\Models\Engineer_average_bonus::where('current_period',$current_period)->pluck('engineer_id')->toArray();   
           $current_bonus_engineers =array_values($current_bonus_engineers); 
        $period = DB::select('SELECT `period`,month FROM `bonus_periods` WHERE DATE_FORMAT(wc,"%Y-%m-%d") < "'.$current_first_week_date.'" GROUP BY period ORDER BY convert(year,decimal) DESC,convert(period,decimal) DESC, wc ASC LIMIT 0,3');
        
        
        
        $total = count($period);

         if($total>0){
             $array='';
             foreach($period as $vl){
                   
                if($current_month == $vl->month){
                    continue;
                }
                     if($array!=''){
                        $array.=',';
                     }
                     $array.=$vl->period;
                   }
                                      
        $row = DB::select('SELECT * FROM `bonus_periods` WHERE convert(year,decimal)<='.$current_year.' and period IN ('.$array.') ORDER BY wc ASC');
        
                    $total_row = count($row);
                    
                    if($total_row>0){
                        $DaysperiodOne= 0;
                        $Daysperiodtwo = 0;
                        $Daysperiodthree= 0;
                          
                    $start_date = $row[0]->wc;
                    $end_date = $row[$total_row-1]->wc;
                    $end_date = date('Y-m-d',strtotime($end_date."+ 6 days"));    
                    
                    $Days_in_period = $this->dayscount($end_date,$start_date);
                          
            
           $teamQ= Sms_job::select('sms_jobs.id','select_work_type','work_type','status','sms_jobs.engineer_id','engineer','week_date','week_day','appointment_date','time_lookups.in_hours_end','post_code',DB::raw('"sms" as table_type'));
           $teamQ->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
          
           $teamQ->join('engineers','engineers.engineer_id','=','sms_jobs.engineer_id');
         // $teamQ->whereIn('engineers.employee_ref_no', '=', $employee_ref_no);
         $teamQ->where('engineers.employee_ref_no','!=','');  
           
           if($start_date!=''){ $teamQ->whereDate('appointment_date', '>=', $start_date); }
           if($end_date!=''){ $teamQ->whereDate('appointment_date', '<', $end_date); }

           //Utilita
           $utilita=  Utilita_job::select(
            'utilita_jobs.id',
            DB::raw('"" as select_work_type'),
            DB::raw('utilita_jobs.job_type as work_type'),
            DB::raw('utilita_jobs.job_status as status'),
            'utilita_jobs.engineer_id',
            'engineer',
            'week_date',
            'week_day',
            DB::raw('utilita_jobs.schedule_date as appointment_date'),
            'time_lookups.in_hours_end','post_code',
            DB::raw('"sms" as table_type'))->join('time_lookups','utilita_jobs.week_day','=','time_lookups.day');
           // $utilita->join('sms_teams','sms_teams.child_engineer_id','=','utilita_jobs.engineer_id'); 
           $utilita->join('engineers','engineers.engineer_id','=','utilita_jobs.engineer_id');
          // $utilita->whereIn('engineers.employee_ref_no', '=', $employee_ref_no);
          $utilita->where('engineers.employee_ref_no','!=','');  
              if($start_date!=''){ $utilita->whereDate('schedule_date', '>=',$start_date); }
            if($end_date!=''){ $utilita->whereDate('schedule_date', '<', $end_date); }

         
            if(isset($request->company) && $request->company==0){
                
                $utilita->union($teamQ);
                $team_result = $utilita->orderBy('appointment_date','asc')->get();
            }
            elseif(isset($request->company) && $request->company==1){ // 1 = utilita
                $team_result =$utilita->orderBy('appointment_date','asc')->get();
            }
            else{ // 2 = sms
                $team_result =$teamQ->orderBy('appointment_date','asc')->get();
            }
            
            if($team_result)
            {
              $total_pu=0;
              $engineer_pu=[];
               foreach($team_result as $vle){
                 if(in_array($vle->engineer_id,$current_bonus_engineers)){
                    continue;
                 } 
                   //m25_postcodes
                   $post_code = explode(" ",$vle->post_code);
                    $post_code= $post_code[0];
                   //$m25_postcodes = DB::table('m25_postcodes')->select('name')->where('name', 'LIKE', '%'.$post_code)->first();
                  $m25_postcodes = DB::select("SELECT `name` from `m25_postcodes` where `name` LIKE '%".$post_code."' limit 1");
                  
                  //m25_postcodes
                  
                   $vle['status'] = strtolower($vle->status);
                                    
                 $work_type= ($vle->select_work_type!=''?$vle->select_work_type:$vle->work_type);
                 if($vle->status=='completed'){
                   $team[$vle->engineer][$vle->week_date][$vle->week_day]['completed'] = (isset($team[$vle->engineer][$vle->week_date][$vle->week_day]['completed'])?$team[$vle->engineer][$vle->week_date][$vle->week_day]['completed']+1:1);

                  
                  
                   $pu_result = DB::select("SELECT pu,revenue,revenue_M25 from `job_lookups` where `job_type`='".$work_type."' and from_date <='".$vle->appointment_date."' and to_date >='".$vle->appointment_date."' limit 1");

           if($pu_result){

               if($m25_postcodes){
                   $pu_result[0]->revenue = $pu_result[0]->revenue_M25;
                   }
             $team[$vle->engineer][$vle->week_date][$vle->week_day]['engineer_id']=$vle->engineer_id;
             $team[$vle->engineer][$vle->week_date][$vle->week_day]['appointment_date']=$vle->appointment_date;  
             $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu_no'][] =$pu_result[0]->pu;
            // $team[$vle->engineer][$vle->week_day]['work_type'][] =$work_type;
             $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'])?$team[$vle->engineer][$vle->week_date][$vle->week_day]['pu']+$pu_result[0]->pu:$pu_result[0]->pu);
            // $team[$vle->engineer][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vle->week_day]['revenue'])?$team[$vle->engineer][$vle->week_day]['revenue']+$pu_result[0]->revenue:$pu_result[0]->revenue);
             $total_pu = $total_pu + $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'];

             
           }else{
            $team[$vle->engineer][$vle->week_date][$vle->week_day]['appointment_date']=$vle->appointment_date; 
            $team[$vle->engineer][$vle->week_date][$vle->week_day]['engineer_id']=$vle->engineer_id;
               //$team[$vle->engineer][$vle->week_day]['work_type'][] =$work_type;
               $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'])?$team[$vle->engineer][$vle->week_date][$vle->week_day]['pu']:0);
               
              // $team[$vle->engineer][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vle->week_day]['revenue'])?$team[$vle->engineer][$vle->week_day]['revenue']:0);
              $total_pu = $total_pu + $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'];
           }
                   }
                   elseif($vle->status=='aborted'){
                       $team[$vle->engineer][$vle->week_date][$vle->week_day]['aborted'] = (isset($team[$vle->engineer][$vle->week_date][$vle->week_day]['aborted'])?$team[$vle->engineer][$vle->week_date][$vle->week_day]['aborted']+1:1);

                      // $pu_result =Job_lookup::select('pu','revenue')->where('job_type',$work_type)->first();
                       
                     //  $pu_result =Job_lookup::select('pu_aborted','revenue_aborted','revenue_aborted_M25')->where('job_type',$work_type)->whereDate('from_date', '<=', $vle->appointment_date)->whereDate('to_date', '>=', $vle->appointment_date)->first();

                       $pu_result = DB::select("SELECT pu_aborted,revenue_aborted,revenue_aborted_M25 from `job_lookups` where `job_type`='".$work_type."' and from_date <='".$vle->appointment_date."' and to_date >='".$vle->appointment_date."' limit 1");
               if($pu_result){
                   
                   if($m25_postcodes){
                       $pu_result[0]->revenue_aborted = $pu_result[0]->revenue_aborted_M25;
                       }
                       $team[$vle->engineer][$vle->week_date][$vle->week_day]['engineer_id']=$vle->engineer_id;
                 $team[$vle->engineer][$vle->week_date][$vle->week_day]['appointment_date']=$vle->appointment_date;  

                 $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu_no'][] =$pu_result[0]->pu_aborted;
                 
                 $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'])?$team[$vle->engineer][$vle->week_date][$vle->week_day]['pu']+$pu_result[0]->pu_aborted:$pu_result[0]->pu_aborted);
                 $total_pu = $total_pu + $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'];
                 
               }else{
                $team[$vle->engineer][$vle->week_date][$vle->week_day]['appointment_date']=$vle->appointment_date; 
                $team[$vle->engineer][$vle->week_date][$vle->week_day]['engineer_id']=$vle->engineer_id;
                   $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'])?$team[$vle->engineer][$vle->week_date][$vle->week_day]['pu']:0);

                   $total_pu = $total_pu + $team[$vle->engineer][$vle->week_date][$vle->week_day]['pu'];
               }
                       }    
                  
               }
             
            if(isset($team)){   
             $engineer_pu=[];
             
                  foreach($team as $pk => $weekdate)
                    {
                        foreach($weekdate as $pk => $periods)
                        {   
                            foreach($periods as $dk => $day){
                                
                            
                            $mpl_pu=6.00;
                            $holiday_mpl = \App\Models\Holiday_mpl::where('holiday_date',$day['appointment_date'])->where('engineer_id',$day['engineer_id'])->first();  
                            if($holiday_mpl){
                            $mpl_pu = $holiday_mpl->mpl_pu;
                            } 
                            $pu= floatval($day['pu']);
                            $bonus_pus = floatval(max(0,$day['pu']-$mpl_pu)); 
                            $bonus = ($bonus_pus *20)+10;
                            $engineer_pu[$day['engineer_id']]['total_bonus'] =(isset($engineer_pu[$day['engineer_id']]['total_bonus'])?$engineer_pu[$day['engineer_id']]['total_bonus']+$bonus:$bonus);


                            $engineer_pu[$day['engineer_id']]['working_day'][]=$day['appointment_date'];

                            }
                       }
                    }
         
                    if(count($engineer_pu)>0)
                    {
                        
                        foreach($engineer_pu as $engineer_id => $t_pu){
                            
                            $Days_in_period= count($t_pu['working_day']);
                            $Engineer_average_bonus = new \App\Models\Engineer_average_bonus();
                            $Engineer_average_bonus['engineer_id'] = $engineer_id;
                            $Engineer_average_bonus['average_per_day_bonus'] = round($t_pu['total_bonus']/$Days_in_period,2);
                            $Engineer_average_bonus['days_in_period'] = $Days_in_period;
                            $Engineer_average_bonus['current_period'] = $current_period;
                            $Engineer_average_bonus['previous_period'] =$array;
                            $Engineer_average_bonus->save();
                        
                        }
                        return 'data save';   
                    }
                }
              
            }
            else
            {
           
            }
                    }
         }else{
             return 'data not found';
         }
        }
        else
        {
            return 'current period not found';
        }

    }

}
