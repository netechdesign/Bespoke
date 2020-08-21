<?php

namespace App\Imports;
use Maatwebsite\Excel\Concerns\ToModel;
use App\Models\Jobs;
use App\Models\Vehicle_mileas;
use App\Models\Utilita_job;
use App\Models\SheetDupdatas;
use App\Models\Engineers;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class ImportJobs implements ToModel, WithHeadingRow
{
   
       /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        if(request()->file_id==1){
        return new Jobs([
            'sheets_id' =>request()->sheets_id,
            'file_id' =>request()->file_id,
            'file_name' =>request()->file_name,
            'month'=> $row['month'],
            'week_day'=> $row['weekday'],
            'week_date'=>  date('Y-m-d', strtotime(str_replace('/', '-', $row['we']))),
            'date'=> date('Y-m-d', strtotime(str_replace('/', '-', $row['date']))),
            'start_time'=> $row['start_time'],
            'end_time'=> $row['end_time'],
            'time_difference'=> $row['time_difference'],
            'work_master_sign_id'=> $row['work_master_sign_id'],
            'name'=> $row['name'],
            'area'=> $row['area'],
            'geo_area'=> $row['geo_area'],
            'report_group'=> $row['report_group'],
            'field_force'=> $row['field_force'],
            'leaver_flg'=> $row['leaver_flg'],
            'week_summary'=> $row['week_summary'],
            'num'=> $row['num'],
            'complete'=> $row['complete'],
            'abort'=> $row['abort'],
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
        }else if(request()->file_id==2){
            
            if(isset($row['customer_id'])){
               
                $schedule_date = date('Y-m-d', strtotime(str_replace('/', '-', $row['schedule_date'])));
                
                $w = date("w", strtotime($schedule_date));
                $n= 7- $w;
                $sunday_date = date("Y-m-d", strtotime($schedule_date.' +'.$n.' day'));
              //  $day_no = date("W", strtotime($schedule_date));
                $week_no = $this->getWeeks($schedule_date, "sunday");
                $weekday = date('l',strtotime($schedule_date));
                $month = '01'.date('-M-y',strtotime($schedule_date));
                
                $cancelled_time =null;
                if($row['cancelled_time']!=''){
                   $cancelled_time = date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['cancelled_time'])));
                }
                //check already exist record 
                $alreadyExist= Utilita_job::where('week_no',$week_no)->where('job_id',$row['job_id'])->where('customer_id',$row['customer_id'])->where('schedule_date',$schedule_date)->count();
                
                if($alreadyExist > 0) {
                    
                    return new SheetDupdatas([
                        "sheets_id" =>request()->sheets_id,"data"=> json_encode($row),"file_id"=>2]); 
                    // throw new ModelNotFoundException("job no ".$row['job_id'].' customerid '.$row['customer_id'].' schedule_date '.$row['schedule_date'].' already exist');
                 
                  }
                  else{
                        if (Engineers::where('engineer_id', '=', $row['engineer_id'])->count() ==0) {
                            
                                $engineers= new Engineers(["engineer_id" => $row['engineer_id'],"engineer_name" => $row['engineer']]);
                                $engineers->save();
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
                                        "job_booked" =>date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['job_booked']))),
                                        "appointment_time" => $row['appointment_time'],
                                        "schedule_start_time" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['schedule_start_time']))),
                                        "schedule_end_time" =>date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['schedule_end_time']))),
                                        "on_site_time" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['on_site_time']))),
                                        "cancelled_by" => $row['cancelled_by'],
                                        "cancelled_time" => $cancelled_time,
                                        "engineer_id" => $row['engineer_id'],
                                        "engineer" => $row['engineer'],
                                        "company_name" => $row['company_name'],
                                        "schedule_date" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row['schedule_date']))),
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
        } else if(request()->file_id==3){
           
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
    
}
