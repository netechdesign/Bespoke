<?php

namespace App\Imports;
use Maatwebsite\Excel\Concerns\ToModel;
use App\Models\Morrison_jobs;
use App\Models\Vehicle_mileas;
use App\Models\Utilita_job;
use App\Models\SheetDupdatas;
use App\Models\Engineers;
use App\Models\Sms_job;
use App\Models\Engineer_group;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use DB;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;
use Maatwebsite\Excel\Concerns\SkipsUnknownSheets;
use App\Models\Sms_teams;
class ImportJobs implements WithMultipleSheets 
{
   
    public function registerEvents(): array
    {
        return [
            BeforeSheet::class => function(BeforeSheet $event) {
                $this->sheetNames[] = $event->getSheet()->getTitle();
            } 
        ];
    }
    public function sheets(): array
    {
        if(request()->file_id==1){
        return [
            'DataDropVolume' => new FirstSheetImport(),
           ];
        }else if(request()->file_id==2){
            return [
                'Bespoke Engineer Jobs Last Week' => new FirstSheetImport(),
                'Bespoke Engineer Jobs Yesterday' => new FirstSheetImport(),
                'Bespoke Engineer Jobs This Week' => new FirstSheetImport(),
                
                ];
        }
        else if(request()->file_id==3){
            return [
                0 => new FirstSheetImport(),
               ];
        }
        else if(request()->file_id==4){
            return [
                'last week' => new FirstSheetImport(),
                'this week' => new FirstSheetImport(),
                'Yesterday' => new FirstSheetImport(),
               ];
        }
        else if(request()->file_id==5){
            return [
                0 => new SmsSheetImport(),
               ];
        }

    }
}

class SmsSheetImport implements ToModel, WithHeadingRow ,SkipsUnknownSheets{

    public function onUnknownSheet($sheetName)
    {
        // E.g. you can log that a sheet was not found.
        info("Sheet {$sheetName} was skipped");
    }
    public function model(array $row)
        {
            
                $schedule_date_fm = $this->transformDate($row['appointment_date']);
                $schedule_date = date('Y-m-d', strtotime(str_replace('/', '-', $schedule_date_fm)));
                $w = date("w", strtotime($schedule_date));
                $n= 7- $w;
                $sunday_date = date("Y-m-d", strtotime($schedule_date.' +'.$n.' day'));
                $week_no = $this->getWeeks($schedule_date, "sunday");
                $weekday = date('l',strtotime($schedule_date));
                $month = '01'.date('-M-y',strtotime($schedule_date));

                 //check already exist record 
                 $alreadyExist= Sms_job::where('week_no',$week_no)->where('job_reference',$row['job_reference'])->where('engineer',$row['engineer'])->count();
                
                 if($alreadyExist > 0) {
                    $row['appointment_date'] = $schedule_date;
                    $completed_at = $this->transformDate($row['completed_at']);
                    $row['completed_at'] = date('Y-m-d H:i', strtotime(str_replace('/', '-', $completed_at)));
                    
                    $aborted_at = $this->transformDate($row['aborted_at']);
                    $row['aborted_at'] = date('Y-m-d H:i', strtotime(str_replace('/', '-', $aborted_at)));
                     return new SheetDupdatas(["sheets_id" =>request()->sheets_id,"data"=> json_encode($row),"file_id"=>5]); 
                     // throw new ModelNotFoundException("job no ".$row['job_id'].' customerid '.$row['customer_id'].' schedule_date '.$row['schedule_date'].' already exist');
                  
                   }
                   else{
                $engineers =Engineers::where('engineer_name', '=', $row['engineer']);
                $is_in_team	=0;
                
            if ($engineers->count() ==0) {
                            
                $engineers = new Engineers(["engineer_id"=> '0',"engineer_name" => $row['engineer'],'file_id'=>5]);
                $engineers->save();
                $engineers->engineer_id= 'sms'.$engineers->id;
                $engineers->save();
                $engineer_id= 'sms'.$engineers->id;
                $is_in_team	=0;
                $regions_sort_name='';
                $parent_engineer_id = '';
                $team_id = '';
                //["engineer_id" => $row['engineer_id'];
            }else{
                $engineers= $engineers->first();
                $engineer_id = $engineers->engineer_id;
                //$engineer_group =Engineer_group::where('child_engineer_id',$engineer_id)->first();
                $engineer_group = Sms_teams::select('regions_sort_name','parent_engineer_id','team_id')->where('child_engineer_id',$engineer_id)->whereDate('from_date', '<=', $schedule_date)->whereDate('to_date', '>=', $schedule_date)->first();
                if($engineer_group){
                    
                    $regions_sort_name = $engineer_group->regions_sort_name;
                    $parent_engineer_id = $engineer_group->parent_engineer_id;
                    $team_id = $engineer_group->team_id;
                    
                    
                    $is_in_team	=1;
                }else{
                    $regions_sort_name ='';
                    $parent_engineer_id = '';
                    $team_id = '';
                    $is_in_team	=0;
                }
                
            }  
            $row['appointment_date'] = $schedule_date;
            $completed_at = $this->transformDate($row['completed_at']);
            $row['completed_at'] = date('Y-m-d', strtotime(str_replace('/', '-', $completed_at)));
            
            $aborted_at = $this->transformDate($row['aborted_at']);
            $row['aborted_at'] = date('Y-m-d H:i', strtotime(str_replace('/', '-', $aborted_at))); 
            $row['arrived_at'] = date('Y-m-d H:i', strtotime(str_replace('/', '-', $this->transformDate($row['arrived_at']))));
            $row['time_slot_start'] =date('H:i:s', strtotime($this->transformTime($row['time_slot_start'])));
            $row['time_slot_end'] =date('H:i:s', strtotime($this->transformTime($row['time_slot_end'])));
            
            return new Sms_job([
                "sheets_id" =>request()->sheets_id,
                "month"=> $month,
                "week_no"=>$week_no,
                "week_day"=> $weekday,
                "week_date"=>  $sunday_date,
                "engineer_id" =>$engineer_id,
                "engineer" =>$row['engineer'],
                "regions_sort_name"=> $regions_sort_name,
                "team_id" =>$team_id,
                "parent_engineer_id" =>$parent_engineer_id,
                "is_in_team" => $is_in_team,
                "job_reference" =>$row['job_reference'],
                "energy_supplier" =>$row['energy_supplier'],
                "address" =>$row['address'],
                "town" =>$row['town'],
                "post_code" =>$row['post_code'],
                "work_type" =>$row['work_type'],
                "select_work_type" =>$row['please_select_work_type'],
                "meter_type" =>$row['meter_type'],
                "appointment_date" =>$schedule_date,
                "time_slot" => $row['time_slot'],
                "arrived_at" => $row['arrived_at'],
                "status" =>$row['status'],
                "abort_code" =>$row['abort_code'],
                "abort_comments" =>$row['abort_comments'],
                "job_comments" =>$row['job_comments'],
                "time_slot_start" => $row['time_slot_start'],
                "time_slot_end" => $row['time_slot_end'],
                "completed_at" => $row['completed_at'],
                "aborted_at" =>$row['aborted_at'],
                "client" =>$row['client'],
                "reason_for_abort" =>$row['reason_for_abort'],
                "row_data"=> json_encode($row),
                'created_by' => request()->created_by
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
        public function transformDate($value, $format = 'Y-m-d')
        {
            try {
                return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value));
            } catch (\ErrorException $e) {
                return \Carbon\Carbon::createFromFormat($format, $value);
            }
        }
        public function transformTime($value, $format = 'H:i')
        {
            try {
                return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value));
            } catch (\ErrorException $e) {
                return \Carbon\Carbon::createFromFormat($format, $value);
            }
        }
}

class FirstSheetImport implements ToModel, WithHeadingRow ,SkipsUnknownSheets
{
   
    public function onUnknownSheet($sheetName)
    {
        // E.g. you can log that a sheet was not found.
        info("Sheet {$sheetName} was skipped");
    }
       /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        if(request()->file_id==1){
            $engineer_id=0;
            $job_status='';
            if($row['complete']==1){
            $job_status='Completed';
            }
            
            if($row['abort']==1){
            $job_status='Aborted';
            }
            $engineers =Engineers::where('engineer_name', '=', $row['name']);
            if ($engineers->count() ==0) {
                            
                $engineers = new Engineers(["engineer_id"=> $engineer_id,"engineer_name" => $row['name'],'file_id'=>1]);
                $engineers->save();
                $engineers->engineer_id= $engineers->id;
                $engineers->save();
                $engineer_id= $engineers->id;

                //["engineer_id" => $row['engineer_id'];
            }else{
                $engineers= $engineers->first();
                $engineer_id = $engineers->engineer_id;
            }  
            
            //check already exist record 
            $alreadyExist= Morrison_jobs::where('week_day',trim($row['weekday']))->where('job_status',$job_status)->where('engineer_id',$engineer_id)->where('sf_df_helper', $row['sf_df_helper'])->where('schedule_date',date('Y-m-d', strtotime(str_replace('/', '-', $this->transformDate($row['date'])))))->count();
                
            if($alreadyExist > 0) {
                    
                return new SheetDupdatas(["sheets_id" =>request()->sheets_id,"data"=> json_encode($row),"file_id"=>1]); 
                // throw new ModelNotFoundException("job no ".$row['job_id'].' customerid '.$row['customer_id'].' schedule_date '.$row['schedule_date'].' already exist');
             
              }
              else{
            
            return new Morrison_jobs([
            'sheets_id' =>request()->sheets_id,
            'file_id' =>request()->file_id,
            'file_name' =>request()->file_name,
            'month'=> $row['month'],
            'week_day'=> trim($row['weekday']),
            'week_date'=>  date('Y-m-d', strtotime(str_replace('/', '-', $this->transformDate($row['we'])))),
            'schedule_date'=> date('Y-m-d', strtotime(str_replace('/', '-', $this->transformDate($row['date'])))),
            'schedule_start_time'=>  date('H:i:s', strtotime($this->transformTime($row['start_time']))),
            'schedule_end_time'=> date('H:i:s', strtotime($this->transformTime($row['end_time']))),
            'time_difference'=> $row['time_difference'],
            'work_master_sign_id'=> $row['work_master_sign_id'],
            'engineer_id'=> $engineer_id,
            'engineer'=> $row['name'],
            'area'=> $row['area'],
            'region'=> $row['geo_area'],
            'report_group'=> $row['report_group'],
            'field_force'=> $row['field_force'],
            'leaver_flg'=> $row['leaver_flg'],
            'week_summary'=> $row['week_summary'],
            'num'=> $row['num'],
            'complete'=> $row['complete'],
            'abort'=> $row['abort'],
            'job_status'=> $job_status,
            'fault'=>'',
            'no_access_rate'=> $row['no_access_rate'],
            'smart_book'=> $row['smart_book'],
            'warrant_book'=> $row['warrant_book'],
            'traditional_book'=> $row['traditional_book'],
            'smart_complete'=> $row['smart_complete'],
            'warrant_complete'=> $row['warrant_complete'],
            'traditional_complete'=> $row['traditional_complete'],
            'smart_abort'=> $row['smart_abort'],
            'warrant_abort'=> $row['warrant_abort'],
            'traditional_abort'=> $row['traditional_abort'],
            'smart_no_access'=> $row['smart_no_access'],
            'warrant_no_access'=> $row['warrant_no_access'],
            'traditional_no_access'=> $row['traditional_no_access'],
            'sf_df'=> $row['sf_df'],
            'job_type'=> $row['job_type'],
            'sf_df_helper'=> $row['sf_df_helper'],
            'work_type'=> $row['work_type'],
            'created_by' => request()->created_by
        ]);
        }
    }else if(request()->file_id==2){
            
            if(isset($row['customer_id'])){
                $schedule_date_fm = $this->transformDate($row['schedule_date']);
                $schedule_date = date('Y-m-d', strtotime(str_replace('/', '-', $schedule_date_fm)));
                
                
                $w = date("w", strtotime($schedule_date));
                $n= 7- $w;
                $sunday_date = date("Y-m-d", strtotime($schedule_date.' +'.$n.' day'));
              //  $day_no = date("W", strtotime($schedule_date));
                $week_no = $this->getWeeks($schedule_date, "sunday");
                $weekday = date('l',strtotime($schedule_date));
                $month = '01'.date('-M-y',strtotime($schedule_date));
                
                $cancelled_time =null;
                if($row['cancelled_time']!=''){
                    $cancelled_time = $this->transformDate($row['cancelled_time']);
                   $cancelled_time = date('Y-m-d H:i', strtotime(str_replace('/', '-', $cancelled_time)));
                   
                }
                //check already exist record 
                $alreadyExist= Utilita_job::where('week_no',$week_no)->where('job_id',$row['job_id'])->where('customer_id',$row['customer_id'])->where('schedule_date',$schedule_date)->count();
                
                if($alreadyExist > 0) {
                    
                    return new SheetDupdatas(["sheets_id" =>request()->sheets_id,"data"=> json_encode($row),"file_id"=>2]); 
                    // throw new ModelNotFoundException("job no ".$row['job_id'].' customerid '.$row['customer_id'].' schedule_date '.$row['schedule_date'].' already exist');
                 
                  }
                  else{
                        if (Engineers::where('engineer_id', '=', $row['engineer_id'])->count() ==0) {
                            
                                $engineers= new Engineers(["engineer_id" => $row['engineer_id'],"engineer_name" => $row['engineer'],'file_id'=>2]);
                                $engineers->save();
                        }
                        if($row['job_status']=='On Site'){
                            $row['job_status'] ='Completed';
                        }
                        
                            return new Utilita_job([
                                        "sheets_id" =>request()->sheets_id,
                                        "month"=> $month,
                                        "week_no"=>$week_no,
                                        "week_day"=> $weekday,
                                        "week_date"=>  $sunday_date,
                                        "customer_id" => $row['customer_id'],
                                        "job_id" => $row['job_id'],
                                        "post_code" => $row['post_code'],
                                        "job_type" => $row['job_type'],
                                        "job_status" => $row['job_status'],
                                        "fault" => $row['fault'],
                                        "job_booked" =>date('Y-m-d H:i', strtotime(str_replace('/', '-', $this->transformDate($row['job_booked'])))),
                                        "appointment_time" => $row['appointment_time'],
                                        "schedule_start_time" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $this->transformDate($row['schedule_start_time'])))),
                                        "schedule_end_time" =>date('Y-m-d H:i', strtotime(str_replace('/', '-',$this->transformDate($row['schedule_end_time'])))),
                                        "on_site_time" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $this->transformDate($row['on_site_time'])))),
                                        "cancelled_by" => $row['cancelled_by'],
                                        "cancelled_time" => $cancelled_time,
                                        "engineer_id" => $row['engineer_id'],
                                        "engineer" => $row['engineer'],
                                        "company_name" => $row['company_name'],
                                        "schedule_date" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $schedule_date_fm))),
                                        "region" => $row['region'],
                                        'created_by' => request()->created_by
                                    ]);
                     }
            }else{
                
                // old data file
                    return new Jobs([
                        'sheets_id' =>request()->sheets_id,
                        'file_id' =>request()->file_id,
                        'file_name' =>request()->file_name,
                        'date'=> date('Y-m-d', strtotime(str_replace('/', '-', $row['date_of_action']))),
                        'start_time'=> $row['to_charwaldate_of_actionhh24miss'],
                        'name'=> $row['engineer_name'],
                        'geo_area'=> $row['supergroup'],
                        'job_id'=> $row['job_id'], 
                        'schedule_date'=>  date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['schedule_date']))),
                        'appointment_type' => $row['appointment_type'],
                        'description' => $row['description'],
                        'engineer_comment' => $row['engineer_comments'],
                        'time_slot'=> $row['time_slot'],
                        'company_name'=> $row['company_name'],
                        'created_by' => request()->created_by
                    ]);
            }

        }
        else if(request()->file_id==4){
           
            $sheets_id = request()->sheet_id;
            $job_id = $row['job_id'];
            
            $schedule_date_fm = $this->transformDate($row['schedule_date']);
            $schedule_date = date('Y-m-d', strtotime(str_replace('/', '-', $schedule_date_fm)));
            
          // $update =Utilita_job::where('schedule_date', $schedule_date)->where('is_daily_per_add',0)->where('sheets_id', $sheets_id)->where('job_id', $job_id)->first();
          $update =Utilita_job::where('schedule_date', $schedule_date)->where('is_daily_per_add',0)->where('job_id', $job_id)->first();
           if($update){ 
            $update->appoinment_type = $row['appointment_type'];
            $update->description = $row['description'];	
            $update->engineer_comments = $row['engineer_comments'];
            $update->time_slot = $row['time_slot'];
            $update->to_char = $row['to_charwaldate_of_actionhh24miss'];
            $update->is_daily_per_add=1;
            $update->save();
           }
    //--
    /*
           DB::table('utilita_jobs')
              ->where('schedule_date', $schedule_date)
              ->where('sheets_id', $sheets_id)
              ->where('job_id', $job_id)
              ->update(['to_char' => $row['to_charwaldate_of_actionhh24miss'],
              'appoinment_type' => $row['appointment_type'],
              'description' => $row['description'],	
              'engineer_comments' => $row['engineer_comments'],
              'time_slot' => $row['time_slot'],
              'is_daily_per_add'=>1           
              ]);
         */   
        }
        else if(request()->file_id==3){
           
            return new Vehicle_mileas([
                'sheets_id' =>request()->sheets_id,
                'registration' => $row['registration'],
                'drive_date' => date('Y-m-d', strtotime(str_replace('/', '-', $row['end_time']))),
                'start_time' => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['start_time']))),
                'end_time' => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['end_time']))),
                'start_location' => $row['start_location'],
                'end_location' => $row['end_location'],
                'start_poi' => $row['start_poi'],
                'end_poi' => $row['end_poi'],
                'driver' => $row['driver'],
                'duration' => $row['duration'],
                'idle' => $row['idle'],
                'miles' => $row['miles'],
                'max_speed' => $row['max_speed'],
                'start_postcode' => $row['start_postcode'],
                'end_postcode' => $row['end_postcode'],
                'driver_name' => $row['driver_name'],
                'created_by' => request()->created_by
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
    public function transformDate($value, $format = 'Y-m-d')
{
    try {
        return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value));
    } catch (\ErrorException $e) {
        return \Carbon\Carbon::createFromFormat($format, $value);
    }
}
public function transformTime($value, $format = 'H:i')
{
    try {
        return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value));
    } catch (\ErrorException $e) {
        return \Carbon\Carbon::createFromFormat($format, $value);
    }
}
}
