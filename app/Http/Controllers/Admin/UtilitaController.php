<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;
use App\Imports\ImportJobs;
use DB;
use App\Models\utilita_job;
use App\Models\Morrison_jobs;
use App\Http\Controllers\Admin\Utilita\Monday;
use App\Http\Controllers\Admin\Utilita\Tuesday;
use App\Http\Controllers\Admin\Utilita\Wednesday;
use App\Http\Controllers\Admin\Utilita\Thursday;
use App\Http\Controllers\Admin\Utilita\Friday;
use App\Http\Controllers\Admin\Utilita\Saturday;
use App\Http\Controllers\Admin\Utilita\Sunday;
class UtilitaController extends Controller
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
               
                
                $columns = explode(',', $request->input('columns'));
                $start = $request->input('iDisplayStart');
                $page_length = $request->input('iDisplayLength');
                
                $jobsrow = utilita_job::select("*",DB::raw('DATE_FORMAT(schedule_date,"%d/%m/%Y") as schedule_date'),
                DB::raw('DATE_FORMAT(schedule_start_time,"%d/%m/%Y %H:%i") as schedule_start_time'),
                DB::raw('DATE_FORMAT(schedule_end_time,"%d/%m/%Y %H:%i") as schedule_end_time'),
                DB::raw('DATE_FORMAT(job_booked,"%d/%m/%Y %H:%i") as job_booked'),
                DB::raw('DATE_FORMAT(on_site_time,"%d/%m/%Y %H:%i") as on_site_time'),
                DB::raw('DATE_FORMAT(cancelled_time,"%d/%m/%Y %H:%i") as cancelled_time')
                                          
                 )->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                    $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('engineer', 'LIKE', "%{$search}%");
                    $query->orWhere('company_name', 'LIKE', "%{$search}%");
                    $query->orWhere('region', 'LIKE', "%{$search}%");
                    
                    
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

                   
                   $user = JWTAuth::toUser($Request->input('token'));
                   
                   $Request->request->add(['created_by'=> $user->id]);
                   
                   
                    $file_path = $Request->file->store(
                        'documents', 'public' //public is drive name from config/filesystem.php
                    );
                    
                    if($file_path){          
                            $file_name = $Request->file('file')->getClientOriginalName();
                           $insret_id = DB::table('sheets')->insertGetId(['file_id' =>$Request->file_id,'file_name' => $file_name, 'file_path' => $file_path]);
                           $Request->request->add(['sheets_id'=> $insret_id]);
                           $data =  Excel::import(new ImportJobs, request()->file('file'));
                         
                                if (!empty($data)) {
                                    DB::table('sheets')->where('id', $insret_id)->update(['is_inserted' => 1]);
                                return response()->json(array('success' => true,
                                'message' => 'Data inserted successfully'
                                ), 200);
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
    
    public function DailyPerformance(Request $Request)
    {
       
       try {
          
                   // $validatedData = $Request->validate(['file' => 'mimes:csv|required']);

                   
                   $user = JWTAuth::toUser($Request->input('token'));
                   
                   $Request->request->add(['created_by'=> $user->id]);
                   
                   
                    //$file_path = $Request->file->store('documents', 'public');

                    $file_path = 1;
                    
                    if($file_path){          
                            $file_name = $Request->file('file')->getClientOriginalName();
                           //$insret_id = DB::table('sheets')->insertGetId(['file_id' =>$Request->file_id,'file_name' => $file_name, 'file_path' => $file_path]);
                           
                          
                           $data =  Excel::import(new ImportJobs, request()->file('file'));
                         
                                if (!empty($data)) {
                                   
                                return response()->json(array('success' => true,
                                'message' => 'Data inserted successfully'
                                ), 200);
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
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $Request)
    {
        //
        $sheets_id = '';
        $start_date = '';
        $today_date = '';
        if(isset($Request->start_date) && $Request->start_date!=''){
            $start_date=date('Y-m-d', strtotime(str_replace('/', '-',$Request->start_date)));
          }else{
            return response()->json(array('success' => false,'message'=> 'start date not found'));  

          }
          if(isset($Request->end_date) && $Request->end_date!=''){
            $today_date=date('Y-m-d', strtotime(str_replace('/', '-',$Request->end_date)));
          }else{
            return response()->json(array('success' => false,'message'=> 'end date not found'));  

          }
          
          //$query= new Utilita_job;
          
          if($Request->file_id=='1'){
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
           }
          elseif($Request->file_id=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
          }else{
            return 'Sorry data not found';
       //  return Redirect::back()->withErrors(['msg', 'Records not found']);
 
        }
         
          
           //if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           if($Request->id!=''){ $q->where('sheets_id', '=', $Request->id); }
           
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
           
          if($q->count() > 0){
            $result=$q->get();
            $categories =array();
            $series=[];

            $abortedcategories =array();
            $abortedseries=[];
            foreach($result as $row){
                if($Request->file_id=='1'){
                    $row->appointment_time = date('A', strtotime($row->schedule_start_time));
               
                 }
                if($row->job_status=='Completed'){
                    if(!in_array($row->engineer,$categories)){
                        array_push($categories,$row->engineer);
                    }

                   // $searchedValue = $row->appointment_time;
                    $data=  array_filter(
                        $series,
                        function ($e) use ($row) {
                            return ($e->name == $row->appointment_time);
                        });
                 
                        if($data){
                            if(isset($data[0]->data)){
                                if(isset($data[0]->data[$row->engineer])){
                                $data[0]->data[$row->engineer]=$data[0]->data[$row->engineer] +1;
                                }else{
                                    $data[0]->data[$row->engineer] = 1;
                                }
                            }
                            if(isset($data[1]->data)){
                                if(isset($data[1]->data[$row->engineer])){
                                $data[1]->data[$row->engineer]=$data[1]->data[$row->engineer] +1;
                                }else{
                                    $data[1]->data[$row->engineer] = 1;
                                }
                            }

                        }else{
                            $object = new \stdClass();
                            $object->name = $row->appointment_time;
                          //  $object->engineers[] = $row->engineer;
                            
                            $object->data[$row->engineer]=1;
                            array_push($series,$object);
                        }
                }
                
                if($row->job_status=='Aborted'){
                    if(!in_array($row->engineer,$abortedcategories)){
                       // array_push($abortedcategories,$row->engineer);
                    }

                   // $searchedValue = $row->appointment_time;
                    $data=  array_filter(
                        $abortedseries,
                        function ($e) use ($row) {
                            return ($e->name == $row->appointment_time);
                        });
                 
                        if($data){
                            
                            if(isset($data[0]->data)){
                                if(isset($data[0]->data[$row->engineer])){
                                $data[0]->data[$row->engineer]=$data[0]->data[$row->engineer] +1;
                                }else{
                                    $data[0]->data[$row->engineer] = 1;
                                }
                            }
                            if(isset($data[1]->data)){
                                if(isset($data[1]->data[$row->engineer])){
                                $data[1]->data[$row->engineer]=$data[1]->data[$row->engineer] +1;
                                }else{
                                    $data[1]->data[$row->engineer] = 1;
                                }
                            }

                        }else{
                            $object = new \stdClass();
                            $object->name = $row->appointment_time;
                          //  $object->engineers[] = $row->engineer;
                            
                            $object->data[$row->engineer]=1;
                            array_push($abortedseries,$object);
                        }
                }
                
            }
           
            //complate
            $engineeram= array_keys($series[0]->data);
            $engineerpm= array_keys($series[1]->data);
            $engineers = $array = array_unique(array_merge($engineeram, $engineerpm));
            $engineers = array_values($engineers);
            foreach($engineers as $vl){
                if (!array_key_exists($vl, $series[0]->data)) {
                    $series[0]->data[$vl]=0;
                }
                if (!array_key_exists($vl, $series[1]->data)) {
                    $series[1]->data[$vl]=0;
                }
            }
                ksort($series[0]->data);
                $engineer= array_keys($series[0]->data);
                $series[0]->data= array_values($series[0]->data);
                ksort($series[1]->data);
                $series[1]->data=array_values($series[1]->data);
                $installnum['series'] = $series;
                $installnum['engineer'] = $engineer;
            //aborted
            
            $engineeram= array_keys($abortedseries[0]->data);
            $engineerpm= array_keys($abortedseries[1]->data);
            
            $engineers = $array = array_unique(array_merge($engineeram, $engineerpm));
            $engineers = array_values($engineers);
            
            foreach($engineers as $vl){
                if (!array_key_exists($vl, $abortedseries[0]->data)) {
                    $abortedseries[0]->data[$vl]=0;
                }
                if (!array_key_exists($vl, $abortedseries[1]->data)) {
                    $abortedseries[1]->data[$vl]=0;
                }
            }
            
            ksort($abortedseries[0]->data);
            $engineer= array_keys($abortedseries[0]->data);
            $abortedseries[0]->data= array_values($abortedseries[0]->data);
            ksort($abortedseries[1]->data);
            $abortedseries[1]->data=array_values($abortedseries[1]->data);
         //   dd($abortedseries);
            $abortedinstallnum['series'] = $abortedseries;
            $abortedinstallnum['engineer'] = $engineer;    
            return response()->json(array('success' => true,'complate'=>$installnum,'aborted'=>$abortedinstallnum));  
          }
         
           return response()->json(array('success' => false,'message'=> 'data not found'));  
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
    public function view(Request $Request) 
    {
        $sheets = [];
        $start_date = date("Y-m-d",strtotime("-6 day"));
        $today_date = date('Y-m-d');
        $month='';
        if(isset($Request->start_date)){
          $start_date=date('Y-m-d', strtotime(str_replace('/', '-', $Request->start_date)));
        }
        if(isset($Request->end_date)){
          $today_date=date('Y-m-d', strtotime(str_replace('/', '-', $Request->end_date)));
        }
        //$query= new Utilita_job;
        
        if($Request->file_id=='1'){
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','morrison_jobs.engineer_id');
           }
          elseif($Request->file_id=='2'){
           $q= Utilita_job::join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
          }else{
            return 'Sorry data not found';
       //  return Redirect::back()->withErrors(['msg', 'Records not found']);
 
        }
        
         if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
         if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
         if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
         
         /** print query   toSql(); */
        // dd($q->toSql());
        if($q->count() > 0){
            $result=$q->get();
            $parent_engineer=array();
            foreach($result->groupBy('parent_engineer') as $k =>$vl){
             
             array_push($parent_engineer, $k);
            }
            
            $Monday=[];
            $Tuesday=[];
            $Wednesday=[];
            $Thursday=[];
            $Friday =[];
            $Saturday=[];
            $Sunday=[];
            foreach($result as $k =>$vl){
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
               $Viewthme='';
               if(!empty($Monday)){
                $data['site_engineer']=$parent_engineer;
                $data['work']=$Monday;
                 $days = new Monday($data);
                 $Viewthme .= $days->view();
               }
              
               if(!empty($Tuesday)){
                $data['site_engineer']=$parent_engineer;
                $data['work']=$Tuesday;
                $days  = new Tuesday($data);
                $Viewthme .= $days->view();
               }

               if(!empty($Wednesday)){
                $data['site_engineer']=$parent_engineer;
                $data['work']=$Wednesday;
                $days  = new Wednesday($data);
                $Viewthme .= $days->view();
               }
               
               if(!empty($Thursday)){
                $data['site_engineer']=$parent_engineer;
                $data['work']=$Thursday;
                $days  = new Thursday($data);
                $Viewthme .= $days->view();
               }

                if(!empty($Friday)){
                    $data['site_engineer']=$parent_engineer;
                    $data['work']=$Friday;
                    $days  = new Friday($data);
                    $Viewthme .= $days->view();
                }

                if(!empty($Saturday)){
                    $data['site_engineer']=$parent_engineer;
                    $data['work']=$Saturday;
                    $days  = new Saturday($data);
                    $Viewthme .= $days->view();
                }

                if(!empty($Sunday)){
                    $data['site_engineer']=$parent_engineer;
                    $data['work']=$Sunday;
                    $days  = new Sunday($data);
                    $Viewthme .= $days->view();
                }
           return $Viewthme;
       }else{
           return 'Sorry data not found';
      //  return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
    }
}
