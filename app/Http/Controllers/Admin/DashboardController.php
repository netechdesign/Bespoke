<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;

use DB;
use App\Models\Utilita_job;

class DashboardController extends Controller
{
    //

    function utilita(Request $request){
       
        try{
            
            //dd($request['job_status']);
            $today_date= date("Y-m-d");
            $month =  date("m");
          $currentWeek =  $this->getWeeks($today_date, "sunday");
        
        
          $q= Utilita_job::select("week_day",DB::raw('count("*") as totals'));
             $q->whereMonth('week_date', '=', $month); 
            $q->where('week_no', '=', $currentWeek); 
            $q->where('job_status', '=', $request['job_status']); 
            
          if($q->count() > 0){
            $result=$q->orderBy('schedule_date','asc')->groupBy('week_day')->get();
            $week_day=[];
            $totals=[];
            $target=[];

            //Prior Week
            $week_day[]='Prior Week';
            $totals[]=10;
            $target[]=5.5;

            foreach($result as $vl){
                $week_day[]=$vl->week_day;
                $totals[]=$vl->totals;
                $target[]=5.5;
                
            }
            return response()->json(array('success' => true,'week_day'=>$week_day,'totals'=>$totals,'target'=>$target));  
          }
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
            $month='';

            if(isset($_REQUEST['start_date'])){
                $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['start_date'])));
              }
              if(isset($_REQUEST['end_date'])){
                $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['end_date'])));
              }
              
            //$query= new Utilita_job;
            $today_date= date("Y-m-d");
            $month =  date("m");
          $currentWeek =  $this->getWeeks($today_date, "sunday");
        
            $q= Utilita_job::select('job_status',DB::Raw('count(*) as total'))->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');

           // if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
          //  if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
          $q->whereMonth('week_date', '=', $month); 
          $q->where('week_no', '=', $currentWeek); 


            /** print query   toSql(); */
             dd($q->toSql());
            $job_status = $q->groupBy('job_status')->orderBy('job_status','desc');
            if($job_status->count()>0){ 
                $job_status = $job_status->get();
                $response = array(
                "job_status" => $job_status,
                );
                return response()->json($response, 201);
                }
            }
            catch (exception $e) {
                return response()->json([
                    'response' => 'error',
                    'message' => $e,
                ]);
            }
          
    }	
    public function getWeeks($date, $rollover)
    {
        $cut = substr($date, 0, 8);
        $daylen = 86400;

        $timestamp = strtotime($date);
        $first = strtotime($cut . "00");
        $elapsed = ($timestamp - $first) / $daylen;

        $weeks = 1;

        for ($i = 1; $i <= $elapsed; $i++)
        {
            $dayfind = $cut . (strlen($i) < 2 ? '0' . $i : $i);
            $daytimestamp = strtotime($dayfind);

            $day = strtolower(date("l", $daytimestamp));

            if($day == strtolower($rollover))  $weeks ++;
        }

        return $weeks;
    }
}
