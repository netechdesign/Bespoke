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
            $bonus_periods =Bonus_periods::where('period',$request->period)->orderBy('wc','asc')->get();
            
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
                        
                        //$teamQ= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');
                        $teamQ= Sms_job::select('sms_jobs.*','time_lookups.in_hours_end')->join('teams','teams.regions_sort_name','=','sms_jobs.regions_sort_name');
                        $teamQ->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
                        if($request->team_id!=''){
                          $teamQ->where('teams.id', '=', $request->team_id);
                        }
                        if($start_date!=''){ $teamQ->whereDate('appointment_date', '>=', $vl->wc); }
                        if($end_date!=''){ $teamQ->whereDate('appointment_date', '<', $todate); }
                        $team_result =$teamQ->orderBy('appointment_date','asc')->get();
                       // dd($team_result->toSql());
                         if($team_result)
                         {
                           
                            foreach($team_result as $vle){
                              $work_type= ($vle->select_work_type!=''?$vle->select_work_type:$vle->work_type);
                              if($vle->status=='completed'){
                                $team[$vle->engineer][$vl->wc][$vle->week_day]['completed'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['completed'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['completed']+1:1);

                                $pu_result =Job_lookup::select('pu','revenue')->where('job_type',$work_type)->first();
                        if($pu_result){
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['work_type'][] =$work_type;
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['pu'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['pu'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['pu']+$pu_result->pu:0);
                          $team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'] = (isset($team[$vle->engineer][$vl->wc][$vle->week_day]['revenue'])?$team[$vle->engineer][$vl->wc][$vle->week_day]['revenue']+$pu_result->revenue:0);
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
         
         $user = JWTAuth::toUser($request->input('token'));
         $role =0;
         if($user){
          $role = $user['roles'];
          
         }
       //echo '<pre/>'; print_r($team); exit;
       return view('reports.sms_bonus_view', ['data' => $team,"period"=>$request->period,'role'=>$role]);
    
        
    }
}
