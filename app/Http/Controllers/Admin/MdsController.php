<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;
use App\Imports\ImportJobs;
use App\Exports\ExportJobs;
use DB;
use App\Models\Jobs;
use App\Models\Utilita_job;
use App\Models\Morrison_jobs;
use App\Models\Engineers;
use App\Models\Sms_job;
use App\Models\Sms_teams;
use Illuminate\Support\Facades\Redirect;

class MdsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        if(!$request->ajax()){
            view('error_handler', compact('exception'));
          } 
          else{
          
            try {
                
                $totalCol = $request->input('iColumns');
                $search = $request->input('sSearch');
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                $jobsrow = Jobs::select("*",DB::raw('DATE_FORMAT(date,"%d/%m/%Y") as date')
               )->where(function($query) use ($request){
                  if($request->input('file_id')!=''){
                    $query->where('file_id','=',$request->input('file_id'));
                    $query->where('file_id','=',$request->input('file_id'));
                   } 
                })->offset($start);
               
                $jobs = $jobsrow->limit($page_length)->get();
                $totalRecords = $jobsrow->count();
                
                
                $response = array(
                "aaData" => $jobs,
                "iTotalDisplayRecords" => $totalRecords,
                "iTotalRecords" => $totalRecords,
                "sColumns" => $request->input('sColumns'),
                "sEcho" => $request->input('sEcho'),
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
    public function store(Request $Request)
    {
       
       try {
          
                   // $validatedData = $Request->validate(['file' => 'mimes:csv|required']);

                   ini_set('memory_limit', '-1');
                   set_time_limit(0);
                   $user = JWTAuth::toUser($Request->input('token'));
                   
                   $Request->request->add(['created_by'=> $user->id]);
                           

                    $file_path = $Request->file->store(
                        'documents', 'public' //public is drive name from config/filesystem.php
                    );
                    
                    if($file_path){          
                            $file_name = $Request->file('file')->getClientOriginalName();
                            $insret_id=0;
                            if($Request->file_id!=4){
                           $insret_id = DB::table('sheets')->insertGetId(['file_id' =>$Request->file_id,'file_name' => $file_name, 'file_path' => $file_path]);
                           $Request->request->add(['sheets_id'=> $insret_id]);
                            }
                           $data =  Excel::import(new ImportJobs, request()->file('file'));
                         
                                if (!empty($data)) {
                                    DB::table('sheets')->where('id', $insret_id)->update(['is_inserted' => 1]);
                                    $dup_data =  DB::table('sheet_dupdatas')->where('sheets_id',$insret_id)->where('file_id',$Request->file_id)->where('is_deleted',0);
                                    $rs=''; 
                                    if($dup_data->count()>0){
                                        $rs =  $dup_data->get();
                                        foreach($rs as $v){
                                            $v->data = json_decode($v->data);
                                        }    
                                    }
                                    
                                return response()->json(array('success' => true,'message' => 'Data inserted successfully','duplicate_data'=>$rs), 200);
                                } else {
                                return response()->json(array('success' => false));
                                }
                            }
                            else{
                                    return response()->json(array('success' => false));
                            }
                         
                         
                            
                         
            }catch (\Exception $e) 
            {
               $sheets_id = request()->sheets_id;
               DB::table('sheets')->where('id', $sheets_id)->delete();
               DB::table('jobs')->where('sheets_id', $sheets_id)->delete();
               $message = $e->getMessage();
               
               $text = strstr($message, ':', true);
               if($text=='Undefined index'){
                $message = 'Sorry '.strstr($message, ':').' title not match in file';
               }
                return response()->json(array('success' => false,'message'=> $message));
            }
           
    }
    public function duplicatestore(Request $Request){
        try {
            if(isset($Request->id)){
               $data = explode(',', $Request->id);
               $file_id='';
               foreach($data as $val){
                $dup_data =  DB::table('sheet_dupdatas')->where('id',$val)->where('is_deleted',0)->first();
                $file_id = $dup_data->file_id;
                if($dup_data->file_id==2){
                    $row = json_decode($dup_data->data);
                    
                    if(isset($row->customer_id)){
               
                        $schedule_date = date('Y-m-d', strtotime(str_replace('/', '-', $row->schedule_date)));
                        
                        $w = date("w", strtotime($schedule_date));
                        $n= 7- $w;
                        $sunday_date = date("Y-m-d", strtotime($schedule_date.' +'.$n.' day'));
                      //  $day_no = date("W", strtotime($schedule_date));
                        $week_no = $this->getWeeks($schedule_date, "sunday");
                        $weekday = date('l',strtotime($schedule_date));
                        $month = '01'.date('-M-y',strtotime($schedule_date));
                        
                        $cancelled_time =null;
                        if($row->cancelled_time!=''){
                           $cancelled_time = date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->cancelled_time)));
                        }
                        
                        
                                if (Engineers::where('engineer_id', '=', $row->engineer_id)->count() ==0) {
                                    
                                        $engineers= new Engineers(["engineer_id" => $row->engineer_id,"engineer_name" => $row->engineer,'file_id'=>2]);
                                        $engineers->save();
                                }
                                $user = JWTAuth::toUser($Request->input('token'));
                                $savedt = new Utilita_job([
                                                "sheets_id" =>$dup_data->sheets_id,
                                                "month"=> $month,
                                                "week_no"=>$week_no,
                                                "week_day"=> $weekday,
                                                "week_date"=>  $sunday_date,
                                                "customer_id" => $row->customer_id,
                                                "job_id" => $row->job_id,
                                                "post_code" => $row->post_code,
                                                "job_type" => $row->job_type,
                                                "job_status" => $row->job_status,
                                                "fault" => $row->fault,
                                                "job_booked" =>date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->job_booked))),
                                                "appointment_time" => $row->appointment_time,
                                                "schedule_start_time" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->schedule_start_time))),
                                                "schedule_end_time" =>date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->schedule_end_time))),
                                                "on_site_time" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->on_site_time))),
                                                "cancelled_by" => $row->cancelled_by,
                                                "cancelled_time" => $cancelled_time,
                                                "engineer_id" => $row->engineer_id,
                                                "engineer" => $row->engineer,
                                                "company_name" => $row->company_name,
                                                "schedule_date" => date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->schedule_date))),
                                                "region" => $row->region,
                                                'created_by' => $user->id
                                            ]);
                                            $savedt->save();
                                            DB::table('sheet_dupdatas')->where('id', $val)->update(['is_deleted' => 1]);
                    }
                }elseif($dup_data->file_id==5){
                    $row = json_decode($dup_data->data);
                    
                    if(isset($row->job_reference)){
               
                        
                        $schedule_date = date('Y-m-d', strtotime(str_replace('/', '-', $row->appointment_date)));
                        $w = date("w", strtotime($schedule_date));
                        $n= 7- $w;
                        $sunday_date = date("Y-m-d", strtotime($schedule_date.' +'.$n.' day'));
                        $week_no = $this->getWeeks($schedule_date, "sunday");
                        $weekday = date('l',strtotime($schedule_date));
                        $month = '01'.date('-M-y',strtotime($schedule_date));
        
                        //engineer add
                        $engineers =Engineers::where('engineer_name', '=', $row->engineer);
                        $is_in_team	=0;
                        
                    if ($engineers->count() ==0) {
                                    
                        $engineers = new Engineers(["engineer_id"=> '0',"engineer_name" => $row->engineer,'file_id'=>5]);
                        $engineers->save();
                        $engineers->engineer_id= 'sms'.$engineers->id;
                        $engineers->save();
                        $engineer_id= 'sms'.$engineers->id;
                        $is_in_team	=0;
                        $regions_sort_name='';
                        //["engineer_id" => $row['engineer_id'];
                    }else{
                        $engineers= $engineers->first();
                        $engineer_id = $engineers->engineer_id;
                        //$engineer_group =Engineer_group::where('child_engineer_id',$engineer_id)->first();
                        $engineer_group = Sms_teams::select('regions_sort_name')->where('child_engineer_id',$engineer_id)->whereDate('from_date', '<=', $schedule_date)->whereDate('to_date', '>=', $schedule_date)->first();
                        if($engineer_group){
                            $regions_sort_name = $engineer_group->regions_sort_name;
                            
                            $is_in_team	=1;
                        }else{
                            $regions_sort_name ='';
                            $is_in_team	=0;
                        }
                        
                    }  
                    
                        
                    
                    $row->completed_at = date('Y-m-d', strtotime(str_replace('/', '-', $row->completed_at)));
                    
                    
                    $row->aborted_at = date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->aborted_at))); 
                    $row->arrived_at = date('Y-m-d H:i', strtotime(str_replace('/', '-', $row->arrived_at)));
                    $row->time_slot_start =date('H:i:s', strtotime($row->time_slot_start));
                    $row->time_slot_end =date('H:i:s', strtotime($row->time_slot_end));

                                $user = JWTAuth::toUser($Request->input('token'));
                                $savedt = Sms_job::where("job_reference",$row->job_reference)->where("engineer",$row->engineer)->first();
                                            
                                $savedt["sheets_id"] = $dup_data->sheets_id;
                                $savedt["month"]= $month;
                                $savedt["week_no"]=$week_no;
                                $savedt["week_day"]= $weekday;
                                $savedt["week_date"]=  $sunday_date;
                                $savedt["engineer_id"] =$engineer_id;
                                $savedt["engineer"] =$row->engineer;
                                $savedt["regions_sort_name"]= $regions_sort_name;
                                
                                $savedt["job_reference"] =$row->job_reference;
                                $savedt["energy_supplier"] =$row->energy_supplier;
                                $savedt["address"] =$row->address;
                                $savedt["town"] =$row->town;
                                $savedt["post_code"] =$row->post_code;
                                $savedt["work_type"] =$row->work_type;
                                $savedt["select_work_type"] =$row->please_select_work_type;
                                $savedt["meter_type"] =$row->meter_type;
                                $savedt["appointment_date"] =$schedule_date;
                                $savedt["time_slot"] = $row->time_slot;
                                $savedt["arrived_at"] = $row->arrived_at;
                                $savedt["status"] =$row->status;
                                $savedt["abort_code"] =$row->abort_code;
                                $savedt["abort_comments"] =$row->abort_comments;
                                $savedt["job_comments"] =$row->job_comments;
                                $savedt["time_slot_start"] = $row->time_slot_start;
                                $savedt["time_slot_end"] = $row->time_slot_end;
                                $savedt["completed_at"] = $row->completed_at;
                                $savedt["aborted_at"] = $row->aborted_at;
                                $savedt["client"] = $row->client;
                                $savedt["reason_for_abort"] = $row->reason_for_abort;
                                $savedt["row_data"]= json_encode($row);
                                $savedt['created_by'] = $user->id;
                                            
                                            $savedt->save();
                                            DB::table('sheet_dupdatas')->where('id', $val)->update(['is_deleted' => 1]);
                    }
                }
               }
            return response()->json(array('success' => true,'message' => 'Data inserted successfully','file_id'=>$file_id), 200);
            }else{
                return response()->json(array('success' => false,'message'=> 'selected data not found')); 
            }
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
    public function edit($id)
    {
        //
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
           }
          elseif($_REQUEST['file_id']=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
          }
         
        
        
         if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
         if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
         if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
         
         /** print query   toSql(); */
        // dd($q->toSql());
         $q=$q->count();
        // dd($q);
       if($q>0){
        return Excel::download(new ExportJobs, 'users.xlsx');
       }else{
        return Redirect::back()->withErrors(['msg', 'Records not found']);

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
