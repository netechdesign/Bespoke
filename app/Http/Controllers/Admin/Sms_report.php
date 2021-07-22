<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;
use DB;
use App\Exports\Exportsms;
use App\Exports\Exportworkmix;
use App\Models\Utilita_job;
use App\Models\Morrison_jobs;
use App\Models\Engineers;
use App\Models\Sms_job;
use Illuminate\Support\Facades\Redirect;

class Sms_report extends Controller
{
    public function export() 
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
            $q= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');
        $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        
        if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');;
        }
        if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!=''){
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
            $q= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');
        $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        
        if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');;
        }
        if(isset($_REQUEST['file_id']) && $_REQUEST['file_id']!=''){
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
    
}
