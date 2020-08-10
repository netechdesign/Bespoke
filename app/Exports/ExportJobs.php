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

use App\Exports\Monday;
use App\Exports\Tuesday;
use App\Exports\Wednesday;
use App\Exports\Thursday;
use App\Exports\Friday;
use App\Exports\Saturday;
use App\Exports\Sunday;
class ExportJobs implements WithMultipleSheets
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
      //$query= new Utilita_job;
       $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
      
       if($week_no!=''){ $q->where('week_no','=',$week_no); }
       if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
       if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
       if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
       
       /** print query   toSql(); */
      // dd($q->toSql());
       $q=$q->get();
       
     
       $parent_engineer=array();
       foreach($q->groupBy('parent_engineer') as $k =>$vl){
        
        array_push($parent_engineer, $k);
       }
       
       $Monday=[];
       $Tuesday=[];
       $Wednesday=[];
       $Thursday=[];
       $Friday =[];
       $Saturday=[];
       $Sunday=[];
       foreach($q as $k =>$vl){
        $vl->endtime = date('H:i', strtotime($vl->schedule_end_time));
        
        if($vl->week_day=='Monday'){
            array_push($Monday, $vl);
       }
        
        if($vl->week_day=='Tuesday'){
            array_push($Tuesday, $vl);
       }
           if($vl->week_day=='Wednesday'){
                array_push($Wednesday, $vl);
           }
           if($vl->week_day=='Thursday'){
            array_push($Thursday, $vl);
           }
           
           if($vl->week_day=='Friday'){
            array_push($Friday, $vl);
       }
           
           if($vl->week_day=='Saturday'){
            array_push($Saturday, $vl);
       }
           
           if($vl->week_day=='Sunday'){
            array_push($Sunday, $vl);
       }
       }
      
       

        if(!empty($Monday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Monday;
             $sheets[] = new Monday($data);
           }
           if(!empty($Tuesday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Tuesday;
             $sheets[] = new Tuesday($data);
           }
           if(!empty($Wednesday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Wednesday;
             $sheets[] = new Wednesday($data);
           }
           if(!empty($Thursday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Thursday;
             $sheets[] = new Thursday($data);
           }
           if(!empty($Friday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Friday;
             $sheets[] = new Friday($data);
           }
           if(!empty($Saturday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Saturday;
             $sheets[] = new Saturday($data);
           }
           if(!empty($Sunday)){
            $data['site_engineer']=$parent_engineer;
            $data['work']=$Sunday;
             $sheets[] = new Sunday($data);
           }
              
       // $sheets[] = new SecondSheetImport();
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