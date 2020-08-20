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
            
            $q= Utilita_job::select('job_status',DB::Raw('count(*) as total'))->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');

            if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
            if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }

            /** print query   toSql(); */
            // dd($q->toSql());
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
}
