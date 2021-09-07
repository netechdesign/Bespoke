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
use App\Exports\SmsListsheet;
use DB;
class ExportsmsList implements WithMultipleSheets
{
    
    private $data;

    public function _construct() {
        $this->data = new UserService();
    }

    public function sheets(): array
    {
     
        $sheets = [];
        
        if(isset($_REQUEST['start_date'])){
          $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['start_date'])));
        }
        if(isset($_REQUEST['end_date'])){
          $end_date=date('Y-m-d', strtotime(str_replace('/', '-', $_REQUEST['end_date'])));
        }
        $q= Sms_job::select('sms_jobs.row_data','sms_jobs.engineer','time_lookups.in_hours_end');
        $q->join('time_lookups','sms_jobs.week_day','=','time_lookups.day');
     
     
        if(isset($_REQUEST['work_type']) && $_REQUEST['work_type']!='null'){
          $work_type =json_decode($_REQUEST['work_type']);     
          
            if($work_type->label!=''){
                  $q->join('job_lookups','sms_jobs.work_type','=','job_lookups.job_type');
                  if($work_type->label!='All'){
                      $q->where('job_lookups.contract',$work_type->label);
                  }
          }
        }
        $q->where('sms_jobs.regions_sort_name','!=','');
     
        if($start_date!=''){ $q->whereDate('appointment_date', '>=', $start_date); }
        if($end_date!=''){ $q->whereDate('appointment_date', '<=', $end_date); }
     
        if(isset($_REQUEST['job_type']) && $_REQUEST['job_type']!=''){
          $q->where('work_type',$_REQUEST['job_type']);
        }
        if(isset($_REQUEST['status']) && $_REQUEST['status']!=''){
          if($_REQUEST['status']=='open'){
            $q->whereIn('sms_jobs.status',['awaiting info','arrived','received','started']);
            }else{
              $q->where('sms_jobs.status',$_REQUEST['status']);
            }
        
        }
        if(isset($_REQUEST['engineer_id']) && $_REQUEST['engineer_id']!=''){
          $q->where('sms_jobs.engineer_id',$_REQUEST['engineer_id']);
          }
        if(isset($_REQUEST['work_completed']) && $_REQUEST['work_completed']!='' && $_REQUEST['work_completed']!='all'){
          
              if($_REQUEST['work_completed']=='in_hours'){
                  $q->whereTime('sms_jobs.completed_at', '<=', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
              if($_REQUEST['work_completed']=='out_of_hours'){
                $q->whereTime('sms_jobs.completed_at', '>', DB::raw( 'DATE_FORMAT(time_lookups.in_hours_end,"%H:%i:%s")')); 
              }
          }
       
              /** print query   toSql(); */
            // dd($q->toSql());
            $q=$q->orderBy('appointment_date','asc')->get();
            
      
        $sheets[] = new SmsListsheet($q);
    
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