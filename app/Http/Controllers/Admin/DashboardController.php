<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;

use DB;
use App\Models\Utilita_job;
use App\Models\Morrison_jobs;
use App\Models\Targets;
class DashboardController extends Controller
{
    //

    function utilita(Request $request){
       
        try{
            
            
        $total_data='0';
        $targets=Targets::first();
            if($targets){
            $total_data = $targets->daily_target;
            }
           
          $q= Utilita_job::select("week_day",DB::raw('count("*") as totals'));
            

            $current_week = date("W");
            $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
            
            $week_day=[];
            $totals=[];
            $target=[];

                    //Prior Week
                    $last_week = $current_week-1;
                    $lastweek_total=0;
                    if($last_week>0){
                        $last_week_date =  $this->getStartAndEndDate($last_week,date("Y"));
                        $lastq = Utilita_job::select('*');
                        if(isset($last_week_date['week_start'])){ $lastq->whereDate('schedule_date', '>=', $last_week_date['week_start']); }
                       if(isset($last_week_date['week_end'])){ $lastq->whereDate('schedule_date', '<=', $last_week_date['week_end']); }
                        $lastq->where('job_status', '=', $request['job_status']); 
                        $lastweek_total = $lastq->count();
                    }
                    $week_day[]='Prior Week';
                    $totals[]=$lastweek_total;
                    $target[]= round(($targets->Monday + $targets->Tuesday + $targets->Wednesday+ $targets->Thursday+ $targets->Friday+$targets->Saturday+$targets->Sunday)/7,1); //$target[]=$total_data;
            
                    //current week data
                    if(isset($current_week_date['week_start'])){ $q->whereDate('schedule_date', '>=', $current_week_date['week_start']); }
                    if(isset($current_week_date['week_end'])){ $q->whereDate('schedule_date', '<=', $current_week_date['week_end']); }
                    $q->where('job_status', '=', $request['job_status']); 
                 
                    if($q->count() > 0){
                        $result=$q->orderBy('schedule_date','asc')->groupBy('week_day')->get();

                        foreach($result as $vl){
                            $week_day[]=$vl->week_day;
                            $totals[]=$vl->totals;
                           // $target[]=$total_data;
                           switch($vl->week_day){
                            case "Monday":
                                $target[] =$targets->Monday;
                            break;
                            case "Tuesday":
                                $target[] =$targets->Tuesday;
                            break;
                            case "Wednesday":
                                $target[] =$targets->Wednesday;
                            break;
                            case "Thursday":
                                $target[] =$targets->Thursday;
                            break;
                            case "Friday":
                                $target[] =$targets->Friday;
                            break;
                            case "Saturday":
                                $target[] =$targets->Saturday;
                            break;
                            case "Sunday":
                                $target[] =$targets->Sunday;
                            break;
                            default:
                            $target[]=$total_data;
                           }
                           
                            
                        }
                    
                    }
          return response()->json(array('success' => true,'week_day'=>$week_day,'totals'=>$totals,'target'=>$target));  
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
        }
    }

    
    function morrison(Request $request){
       
        try{
            
            
            $total_data='0';
            $targets=Targets::first();
                if($targets){
                $total_data = $targets->daily_target;
                }
                
          $q= Morrison_jobs::select("week_day",DB::raw('count("*") as totals'));
            

            $current_week = date("W");
            $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
            
            $week_day=[];
            $totals=[];
            $target=[];

                    //Prior Week
                    $last_week = $current_week-1;
                    $lastweek_total=0;
                    if($last_week>0){
                        $last_week_date =  $this->getStartAndEndDate($last_week,date("Y"));
                        $lastq = Morrison_jobs::select('*');
                        if(isset($last_week_date['week_start'])){ $lastq->whereDate('schedule_date', '>=', $last_week_date['week_start']); }
                        if(isset($last_week_date['week_end'])){ $lastq->whereDate('schedule_date', '<=', $last_week_date['week_end']); }
                        $lastq->where('job_status', '=', $request['job_status']); 
                        $lastweek_total = $lastq->count();
                    }
                    $week_day[]='Prior Week';
                    $totals[]=$lastweek_total;
                    $target[]= round(($targets->Monday + $targets->Tuesday + $targets->Wednesday+ $targets->Thursday+ $targets->Friday+$targets->Saturday+$targets->Sunday)/7,1); //$target[]=$total_data;
            
                    //current week data
                   if(isset($current_week_date['week_start'])){ $q->whereDate('schedule_date', '>=', $current_week_date['week_start']); }
                    if(isset($current_week_date['week_end'])){ $q->whereDate('schedule_date', '<=', $current_week_date['week_end']); }
                    $q->where('job_status', '=', $request['job_status']); 
                 
                    if($q->count() > 0){
                        $result=$q->orderBy('schedule_date','asc')->groupBy('week_day')->get();

                        foreach($result as $vl){
                            $week_day[]=$vl->week_day;
                            $totals[]=$vl->totals;
                          //  $target[]=$total_data;
                          switch($vl->week_day){
                            case "Monday":
                                $target[] =$targets->Monday;
                            break;
                            case "Tuesday":
                                $target[] =$targets->Tuesday;
                            break;
                            case "Wednesday":
                                $target[] =$targets->Wednesday;
                            break;
                            case "Thursday":
                                $target[] =$targets->Thursday;
                            break;
                            case "Friday":
                                $target[] =$targets->Friday;
                            break;
                            case "Saturday":
                                $target[] =$targets->Saturday;
                            break;
                            case "Sunday":
                                $target[] =$targets->Sunday;
                            break;
                            default:
                            $target[]=$total_data;
                           }
                           
                            
                        }
                    
                    }
          return response()->json(array('success' => true,'week_day'=>$week_day,'totals'=>$totals,'target'=>$target));  
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
        }
    }
    function jobStatus(Request $request){
        
        
            try {

            $start_date = date("Y-m-d",strtotime("-6 day"));
            $today_date = date('Y-m-d');

            $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
            
                    if(isset($current_week_date['week_start'])){
                        $start_date = $current_week_date['week_start'];
                    }
                if(isset($current_week_date['week_end'])){ 
                    $today_date = $current_week_date['week_end'];
                 }
  
            $month='';

            if(isset($_REQUEST['start_date'])){
                $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['start_date'])));
              }
              if(isset($_REQUEST['end_date'])){
                $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['end_date'])));
              }
              
            //$query= new Utilita_job;
       
            $q= Utilita_job::select('job_status',DB::Raw('count(*) as total'))->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');

            if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
            
            if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
        
            /** print query   toSql(); */
            // dd($q->toSql());
            $job_status = $q->groupBy('job_status')->orderBy('job_status','desc');
            $job_status = $job_status->get();
            $totalutilita= 0;
            foreach($job_status as $vl){
                $totalutilita = $totalutilita + $vl->total;
            }
            foreach($job_status as $vl){
                $vl->parsentage =  round((($vl->total/$totalutilita) * 100),2);
            }
            // msd
            
            $msd = Morrison_jobs::select('job_status',DB::Raw('count(*) as total'))->join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');

            if($start_date!=''){ $msd->whereDate('schedule_date', '>=', $start_date); }
            
            if($today_date!=''){ $msd->whereDate('schedule_date', '<=', $today_date); }
            $msd_job_status = $msd->groupBy('job_status')->orderBy('job_status','desc');
            $msd_job_status = $msd_job_status->get();
            
            $totalmds= 0;
            foreach($msd_job_status as $vl){
                $totalmds = $totalmds + $vl->total;
            }
            foreach($msd_job_status as $vl){
                $vl->parsentage =  round((($vl->total/$totalmds) * 100),2);
            }
               
                $response = array(
                "job_status" => $job_status,
                "msd_job_status"=> $msd_job_status
                );
                return response()->json($response, 201);
                
            }
            catch (exception $e) {
                return response()->json([
                    'response' => 'error',
                    'message' => $e,
                ]);
            }
          
    }
    
    function getStartAndEndDate($week, $year) {
       
  $dto = new \DateTime();
  $dto->setISODate($year, $week);
  $ret['week_start'] = $dto->format('Y-m-d');
  $dto->modify('+6 days');
  $ret['week_end'] = $dto->format('Y-m-d');
  return $ret;
}

    
    
}
