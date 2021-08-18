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
use App\Models\Utilita_job;
use App\Models\Morrison_jobs;
use App\Models\Sms_job;
use App\Exports\Smssheet;
use DB;
class Exportsms implements WithMultipleSheets
{
    
    private $data;

    public function _construct() {
        $this->data = new UserService();
    }

    public function sheets(): array
    {
     
        $sheets = [];
        
       $month='';
       $week_no='';
      $start_date = date("Y-m-d",strtotime("-6 day"));
      $today_date = date('Y-m-d');
      if(isset($_REQUEST['start_date'])){
        $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['start_date'])));
      }
      if(isset($_REQUEST['end_date'])){
        $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['end_date'])));
      }
      
      $_REQUEST['file_id']=3;
      //$query= new Utilita_job;
      if($_REQUEST['file_id']=='1'){
        $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
        if($week_no!=''){ $q->where('week_no','=',$week_no); }
       if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
       if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
       if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
       }
      elseif($_REQUEST['file_id']=='2'){
       $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
       if($week_no!=''){ $q->where('week_no','=',$week_no); }
       if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
       if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
       if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
      }
      else{
        
        // $q= Sms_job::select('sms_jobs.*','teams.regions_id','teams.regions_sort_name','time_lookups.in_hours_end')->join('engineer_groups','engineer_groups.child_engineer_id','=','sms_jobs.engineer_id')->join('teams','teams.engineer_id','=','engineer_groups.parent_engineer_id');
        $q= Sms_job::select('sms_jobs.*','time_lookups.in_hours_end');
        
        $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
        
        if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!=''){
          $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');;
        }
        $q->where('sms_jobs.regions_sort_name','!=','');
        
        if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!=''){
          if($_REQUEST['work_type']!='all'){          
               $q->where('job_lookups.contract',$_REQUEST['work_type']);
          }
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
       
       $q=$q->orderBy('engineer','asc')->get();
      //dd($q); 
        $sheets[] = new Smssheet($q);
    
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