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
use App\Models\Vehicle_mileas;
use App\Http\Controllers\Admin\Utilita\Monday;
use App\Http\Controllers\Admin\Utilita\Tuesday;
use App\Http\Controllers\Admin\Utilita\Wednesday;
use App\Http\Controllers\Admin\Utilita\Thursday;
use App\Http\Controllers\Admin\Utilita\Friday;
use App\Http\Controllers\Admin\Utilita\Saturday;
use App\Http\Controllers\Admin\Utilita\Sunday;
use App\Models\Targets;
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
           $q= Utilita_job::select("*",DB::raw('DATE_FORMAT(schedule_date,"%d/%m/%Y") as schedule_date'),
           DB::raw('DATE_FORMAT(schedule_start_time,"%d/%m/%Y %H:%i") as schedule_start_time'),
           DB::raw('DATE_FORMAT(schedule_end_time,"%d/%m/%Y %H:%i") as schedule_end_time'),
           DB::raw('DATE_FORMAT(job_booked,"%d/%m/%Y %H:%i") as job_booked'),
           DB::raw('DATE_FORMAT(on_site_time,"%d/%m/%Y %H:%i") as on_site_time'),
           DB::raw('DATE_FORMAT(cancelled_time,"%d/%m/%Y %H:%i") as cancelled_time')
                                     
            )->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
          }else{
            return 'Sorry data not found';
       //  return Redirect::back()->withErrors(['msg', 'Records not found']);
 
        }
         
          
           //if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           if($Request->id!=''){ $q->where('sheets_id', '=', $Request->id); }
           
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
           
          if($q->count() > 0){
            if($Request->file_id=='2'){
                $result=$q->orderBy('appointment_time','asc')->get();
            }else{
                $result=$q->orderBy('schedule_start_time','asc')->get();
            }
            $categories =array();
            $series=[];

            $abortedcategories =array();
            $abortedseries=[];

            $cancelledcategories =array();
            $cancelledseries=[];
            
            $descriptioncategories =array();
            $descriptionseries=[];
            $CompletedjobData=[];
            $AbortedjobData=[];
            $AbortedReasonData=[];
            $Miles=[];
            $totalEngineerMiles=[];
            foreach($result as $row){
                if($Request->file_id=='1'){
                    $row->appointment_time = date('A', strtotime($row->schedule_start_time));
               
                 }
                 if(!in_array($row->engineer,$Miles)){
                 $Milesresult= Vehicle_mileas::select(DB::raw('sum(miles) as total_Miles'))->where('driver_name','=',$row->engineer)->whereDate('drive_date', '>=', $start_date)->whereDate('drive_date', '<=', $today_date)->groupBy('driver_name')->first();
                   if($Milesresult){
                    $totalEngineerMiles[$row->engineer] =round($Milesresult->total_Miles,3);
                    }
                  array_push($Miles,$row->engineer);
                 }
                if($row->job_status=='Completed'){
                    if(!in_array($row->engineer,$categories)){
                        array_push($categories,$row->engineer);
                    }
                    $CompletedjobData[$row->engineer][]=$row;
                    
                    
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
                      
                    }
                    $AbortedjobData[$row->engineer][]=$row;
                    $AbortedReasonData[$row->description][]=$row; 
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
                            $object->data[$row->engineer]=1;
                            array_push($abortedseries,$object);
                            
                        }

                            $descriptiondata=  array_filter(
                                $descriptionseries,
                                function ($e) use ($row) {
                                    return ($e->name == $row->appointment_time);
                                });
                         
                                if($descriptiondata){
                                    
                                    if(isset($descriptiondata[0]->data)){
                                        if(isset($descriptiondata[0]->data[$row->description])){
                                        $descriptiondata[0]->data[$row->description]=$descriptiondata[0]->data[$row->description] +1;
                                        }else{
                                            $descriptiondata[0]->data[$row->description] = 1;
                                        }
                                    }
                                    if(isset($descriptiondata[1]->data)){
                                        if(isset($descriptiondata[1]->data[$row->description])){
                                        $descriptiondata[1]->data[$row->description]=$descriptiondata[1]->data[$row->description] +1;
                                        }else{
                                            $descriptiondata[1]->data[$row->description] = 1;
                                        }
                                    }
        
                                }else{
                                    $object = new \stdClass();
                                    $object->name = $row->appointment_time;
                                    $object->data[$row->description]=1;
                                    array_push($descriptionseries,$object);
        
                                }
                }
                
            }
           
            //complate
            $engineeram=[];
            if(isset($series[0]->data)){
            $engineeram= array_keys($series[0]->data);
            }
            $engineerpm=[];
            if(isset($series[1]->data)){
            $engineerpm= array_keys($series[1]->data);
            }
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
            if(isset($series[0]->data)){
                ksort($series[0]->data);
                $engineer= array_keys($series[0]->data);
                $series[0]->data= array_values($series[0]->data);
            }
                if(isset($series[1]->data)){
                ksort($series[1]->data);
                $series[1]->data= array_values($series[1]->data);
                }
                $installnum['series'] = $series;
                $installnum['engineer'] = $engineer;
            //aborted
            $engineeram=[];
            $engineerpm=[];
            if(isset($abortedseries[0]->data)){$engineeram= array_keys($abortedseries[0]->data);}
            if(isset($abortedseries[1]->data)){$engineerpm= array_keys($abortedseries[1]->data);}
            
            
            
            $engineers = $array = array_unique(array_merge($engineeram, $engineerpm));
            $engineers = array_values($engineers);
            
            foreach($engineers as $vl){
                if (isset($abortedseries[0]->data) && !array_key_exists($vl, $abortedseries[0]->data)) {
                    $abortedseries[0]->data[$vl]=0;
                }
                if (isset($abortedseries[1]->data) && !array_key_exists($vl, $abortedseries[1]->data)) {
                    $abortedseries[1]->data[$vl]=0;
                }
            }
            if(isset($abortedseries[0]->data)){   
            ksort($abortedseries[0]->data);
            $engineer= array_keys($abortedseries[0]->data);
            $abortedseries[0]->data= array_values($abortedseries[0]->data);
            }
            if(isset($abortedseries[1]->data)){
            ksort($abortedseries[1]->data);
            $abortedseries[1]->data=array_values($abortedseries[1]->data);
            }
         //   dd($abortedseries);
            $abortedinstallnum['series'] = $abortedseries;
            $abortedinstallnum['engineer'] = $engineer;    
            
        //descriptiondata
        $descriptionam=[];
        if(isset($descriptionseries[0]->data)){
        $descriptionam= array_keys($descriptionseries[0]->data);
        }
        $descriptionpm=[];
        if(isset($descriptionseries[1]->data)){
        $descriptionpm= array_keys($descriptionseries[1]->data);
        }
        $descriptions = $array = array_unique(array_merge($descriptionam, $descriptionpm));
        $descriptions = array_values($descriptions);
        
        foreach($descriptions as $vl){
            if (isset($descriptionseries[0]->data) && !array_key_exists($vl, $descriptionseries[0]->data)) {
                $descriptionseries[0]->data[$vl]=0;
            }
            if (isset($descriptionseries[1]->data) && !array_key_exists($vl, $descriptionseries[1]->data)) {
                $descriptionseries[1]->data[$vl]=0;
            }
        }
        $description=[];
        if(isset($descriptionseries[0]->data)){
        ksort($descriptionseries[0]->data);
        $description= array_keys($descriptionseries[0]->data);
        $descriptionseries[0]->data= array_values($descriptionseries[0]->data);
        }
        if(isset($descriptionseries[1]->data)){
        ksort($descriptionseries[1]->data);
        $descriptionseries[1]->data=array_values($descriptionseries[1]->data);
        }
        $descriptioninstallnum['series'] = $descriptionseries;
        $descriptioninstallnum['description'] = $description;    
        
         

            return response()->json(array('success' => true,'complate'=>$installnum,'aborted'=>$abortedinstallnum,'total_description'=>$descriptioninstallnum,'CompletedjobData'=>$CompletedjobData,'AbortedjobData'=>$AbortedjobData,'AbortedReasonData'=>$AbortedReasonData,'totalEngineerMiles'=>$totalEngineerMiles));  
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
     public function utilitainstall(Request $Request)
    {
        //
        
        switch($Request->report_for)
        {
        case "day":
            $Request->start_date= date('Y-m-d', strtotime('-1 day'));
            $Request->end_date = date('Y-m-d', strtotime('-1 day'));
            break;
            case "weektodate":
                    $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
                    $Request->start_date = $current_week_date['week_start'];
                    $Request->end_date = date('Y-m-d');
            break;
            case "monthtodate":
                $Request->start_date = date('Y-m-01');
                $Request->end_date = date('Y-m-d');
            break;
            case "monthprior":
                $Request->start_date = date('Y-m-1', strtotime('-1 months'));
                $Request->end_date = date('Y-m-t', strtotime('-1 months'));
            break;
            case "yeartodate":
                $Request->start_date = date('Y-01-01');
                $Request->end_date = date('Y-m-d');
            break;
            case "yearprior":
                $Request->start_date = date('Y-01-01', strtotime('-1 year'));
                $Request->end_date = date('Y-12-31', strtotime('-1 year'));
             
            break;   
               
            
                    
         }
         if($Request->job_status=='Aborts'){
            $Request->job_status='Aborted';
         }
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
           $q= Utilita_job::select("*",DB::raw('DATE_FORMAT(schedule_date,"%d/%m/%Y") as schedule_date'),
           DB::raw('DATE_FORMAT(schedule_start_time,"%d/%m/%Y %H:%i") as schedule_start_time'),
           DB::raw('DATE_FORMAT(schedule_end_time,"%d/%m/%Y %H:%i") as schedule_end_time'),
           DB::raw('DATE_FORMAT(job_booked,"%d/%m/%Y %H:%i") as job_booked'),
           DB::raw('DATE_FORMAT(on_site_time,"%d/%m/%Y %H:%i") as on_site_time'),
           DB::raw('DATE_FORMAT(cancelled_time,"%d/%m/%Y %H:%i") as cancelled_time')
                                     
            )->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
          }else{
            return 'Sorry data not found';
       //  return Redirect::back()->withErrors(['msg', 'Records not found']);
 
        }
         
          
           //if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           $time = "17:00:00";
            $q->whereTime('schedule_end_time', '<=', $time); 
           
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
           if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
           if(isset($Request->job_status)){ $q->where('job_status', '=', $Request->job_status); }
          if($q->count() > 0){
            if($Request->file_id=='2'){
                        $result=$q->orderBy('appointment_time','asc')->get();
                }else{
                    $result=$q->get();
                }
            
            $categories =array();
            $series=[];

            
            foreach($result as $row){
                if($Request->file_id=='1'){
                    $row->appointment_time = date('A', strtotime($row->schedule_start_time));
               
                 }
                 
                if($row->job_status==$Request->job_status){
                   
                    if(!in_array($row->engineer,$categories)){
                        array_push($categories,$row->engineer);
                    }
                  //  $CompletedjobData[$row->parent_engineer][$row->engineer][]=$row;
                    
                    
                   // $searchedValue = $row->appointment_time;
                   if(isset($series[$row->parent_engineer])){
                    $data=  array_filter(
                        $series[$row->parent_engineer],
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

                        }
                        else{
                            $object = new \stdClass();
                            $object->name = $row->appointment_time;
                          //  $object->engineers[] = $row->engineer;
                           
                            $object->data[$row->engineer]=1;
                            
                            array_push($series[$row->parent_engineer],$object);
                        }
                    }else{
                        $object = new \stdClass();
                        $object->name = $row->appointment_time;
                      //  $object->engineers[] = $row->engineer;
                       
                        $object->data[$row->engineer]=1;
                        $series[$row->parent_engineer][]=$object;
                        //array_push($series[$row->parent_engineer],$object);
                    }    
                }
                
                
            }
           
            //complate
            $teamLeader=[];
            foreach($series as $ke => $series_vl){
                $installnum=[]; 
            $engineeram=[];
            if(isset($series_vl[0]->data)){
            $engineeram= array_keys($series_vl[0]->data);
            }
            $engineerpm=[];
            if(isset($series_vl[1]->data)){
            $engineerpm= array_keys($series_vl[1]->data);
            }
            $engineers = $array = array_unique(array_merge($engineeram, $engineerpm));
            $engineers = array_values($engineers);
            foreach($engineers as $vl){
                if (!array_key_exists($vl, $series_vl[0]->data)) {
                    $series_vl[0]->data[$vl]=0;
                }
                if (isset($series_vl[1]->data) && !array_key_exists($vl, $series_vl[1]->data)) {
                    $series_vl[1]->data[$vl]=0;
                }
            }
            if(isset($series_vl[0]->data)){
                ksort($series_vl[0]->data);
                $engineer= array_keys($series_vl[0]->data);
                $series_vl[0]->data= array_values($series_vl[0]->data);
            }
                if(isset($series_vl[1]->data)){
                ksort($series_vl[1]->data);
                $series_vl[1]->data= array_values($series_vl[1]->data);
                }
                $leader_id= str_replace(" ", "_",$ke); 
                $installnum[$leader_id]['series'] = $series_vl;
                $installnum[$leader_id]['engineer'] = $engineer;
                
                $teamLeader[]=$installnum;
            }
            
            $targets=Targets::first();
            if($targets){
            $targets_no = $targets->daily_target;
            }
            else
            {
            $targets_no=0;
            }  
            return response()->json(array('success' => true,'complate'=>$teamLeader,'target_data'=>$targets_no));  
          }
         
           return response()->json(array('success' => false,'message'=> 'data not found'));  
    }

    public function utilitainstallTable(Request $Request)
    {
        //
        
        switch($Request->report_for)
        {
        case "day":
            $Request->start_date= date('Y-m-d', strtotime('-1 day'));
            $Request->end_date = date('Y-m-d', strtotime('-1 day'));
            break;
            case "weektodate":
                    $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
                    $Request->start_date = $current_week_date['week_start'];
                    $Request->end_date = date('Y-m-d');
            break;
            case "monthtodate":
                $Request->start_date = date('Y-m-01');
                $Request->end_date = date('Y-m-d');
            break;
            case "monthprior":
                $Request->start_date = date('Y-m-1', strtotime('-1 months'));
                $Request->end_date = date('Y-m-t', strtotime('-1 months'));
            break;
            case "yeartodate":
                $Request->start_date = date('Y-01-01');
                $Request->end_date = date('Y-m-d');
            break;
            case "yearprior":
                $Request->start_date = date('Y-01-01', strtotime('-1 year'));
                $Request->end_date = date('Y-12-31', strtotime('-1 year'));
             
            break;   
               
            
                    
         }
         if($Request->job_status=='Aborts'){
            $Request->job_status='Aborted';
         }
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
           $q= Utilita_job::select('*',DB::raw('DATE_FORMAT(schedule_date,"%d/%m/%Y") as schedule_date'),
           DB::raw('DATE_FORMAT(schedule_start_time,"%d/%m/%Y %H:%i") as schedule_start_time'),
           DB::raw('DATE_FORMAT(schedule_end_time,"%d/%m/%Y %H:%i") as schedule_end_time'),
           DB::raw('DATE_FORMAT(job_booked,"%d/%m/%Y %H:%i") as job_booked'),
           DB::raw('DATE_FORMAT(on_site_time,"%d/%m/%Y %H:%i") as on_site_time'),
           DB::raw('DATE_FORMAT(cancelled_time,"%d/%m/%Y %H:%i") as cancelled_time')
                                     
            )->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
          }else{
            return 'Sorry data not found';
       //  return Redirect::back()->withErrors(['msg', 'Records not found']);
 
        }
         
          
           //if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
           $time = "17:00:00";
           $q->whereTime('schedule_end_time', '<=', $time); 
          
           
         if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
         if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
           if(isset($Request->job_status)){$q->where('job_status', '=', $Request->job_status); }
          if($q->count() > 0){
            if($Request->file_id=='2'){
                $result=$q->orderBy('appointment_time','asc')->get();
        }else{
            $result=$q->get();
        }
            
        $TeamLeader=[];
            foreach($result as $row){
                if(isset($TeamLeader[$row->parent_engineer])){
                    $data=  array_filter(
                        $TeamLeader[$row->parent_engineer],
                        function ($e) use ($row) {
                            return ($e->engineer == $row->engineer);
                        });
                 
                        if($data){
                            $ky = array_keys($data);
                            $ky =$ky[0];
                            if($row->week_no==1){
                                $data[$ky]->week_1 = (isset($data[$ky]->week_1)?$data[$ky]->week_1 +1:1);
                                }
                                if($row->week_no==2){
                                    $data[$ky]->week_2 = (isset($data[$ky]->week_2)?$data[$ky]->week_2 +1:1);
                                 }
                                 if($row->week_no==3){
                                    $data[$ky]->week_3 = (isset($data[$ky]->week_3)?$data[$ky]->week_3 +1:1);
                                 }
                                 if($row->week_no==4){
                                    if(isset($data[$ky]->week_4)){
                                        $data[$ky]->week_4 =$data[$ky]->week_4 +1; 
                                    }
                                 } 
                                 if($row->week_no==5){
                                    
                                    if(isset($data[$ky]->week_5)){
                                        $data[$ky]->week_5 =$data[$ky]->week_5 +1; 
                                    }
                                 }
                                 
                        }else{
                            $object = new \stdClass();
                           $object->engineer = $row->engineer;
                           if($row->week_no==1){
                           $object->week_1 = 1;
                           }
                           else{
                            $object->week_1 =0;
                           }
                           if($row->week_no==2){
                            $object->week_2 = 1;
                            }
                            else{
                                $object->week_2 =0;
                            }
                            if($row->week_no==3){
                                $object->week_3 = 1;
                            }else{
                                $object->week_3 =0;
                            }
                            if($row->week_no==4){
                                $object->week_4 = 1;
                            }else{
                                $object->week_4 =0;
                            } 
                            if($row->week_no==5){
                                $object->week_5 = 1;
                            }

                            $TeamLeader[$row->parent_engineer][]= $object;
                        }
                    }else{
                            $object = new \stdClass();
                           $object->engineer = $row->engineer;
                           if($row->week_no==1){
                           $object->week_1 = 1;
                           }
                           else{
                            $object->week_1 =0;
                           }
                           if($row->week_no==2){
                            $object->week_2 = 1;
                            }
                            else{
                                $object->week_2 =0;
                            }
                            if($row->week_no==3){
                                $object->week_3 = 1;
                            }else{
                                $object->week_3 =0;
                            }
                            if($row->week_no==4){
                                $object->week_4 = 1;
                            }else{
                                $object->week_4 =0;
                            } 
                            if($row->week_no==5){
                                $object->week_5 = 1;
                            }

                            $TeamLeader[$row->parent_engineer][]= $object;
                        }
            }
        
           // dd($TeamLeader);         
            return view('reports.monthtodate',['data'=> $TeamLeader]);
          //  return response()->json(array('success' => true,'complate'=>$teamLeader,'target_data'=>3.5));  
          
        }
         
         //  return response()->json(array('success' => false,'message'=> 'data not found'));  
    }

    public function utilitaFuelmix(Request $Request)
   {
       //
       
       switch($Request->report_for)
       {
       case "day":
           $Request->start_date= date('Y-m-d', strtotime('-1 day'));
           $Request->end_date = date('Y-m-d', strtotime('-1 day'));
           break;
           case "weektodate":
                   $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
                   $Request->start_date = $current_week_date['week_start'];
                   $Request->end_date = date('Y-m-d');
           break;
           case "monthtodate":
               $Request->start_date = date('Y-m-01');
               $Request->end_date = date('Y-m-d');
           break;
           case "monthprior":
               $Request->start_date = date('Y-m-1', strtotime('-1 months'));
               $Request->end_date = date('Y-m-t', strtotime('-1 months'));
           break;
           case "yeartodate":
               $Request->start_date = date('Y-01-01');
               $Request->end_date = date('Y-m-d');
           break;
           case "yearprior":
               $Request->start_date = date('Y-01-01', strtotime('-1 year'));
               $Request->end_date = date('Y-12-31', strtotime('-1 year'));
            
           break;   
              
           
                   
        }
        
       $sheets_id = '';
       $start_date = '';
       $today_date = '';
       $file_name='';
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
          $q= Utilita_job::select("*");
         }else{
           return 'Sorry data not found';
      //  return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
        
         
          //if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
          if($Request->id!=''){ $q->where('sheets_id', '=', $Request->id); }
          
          if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
          if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
        
         if($q->count() > 0){
                    if($Request->file_id=='2'){
                          $result=$q->orderBy('appointment_time','asc')->get();
                          $file_name='Utilita';
                    }else{
                          $result=$q->get();
                          $file_name='Mds';
                    }
           
           $TeamLeader=[];           
           foreach($result as $row){
               if($Request->file_id=='1'){
                   $row->appointment_time = date('A', strtotime($row->schedule_start_time));
              
                }

                $data=  array_filter(
                    $TeamLeader,
                    function ($e) use ($row) {
                        return ($e->job_type == $row->job_type);
                    });
             
                    if($data){
                        $ky = array_keys($data);
                        $ky =$ky[0];
                        if($Request->report_for=='weektodate'){
                                if($row->week_day=='Monday'){
                                $data[$ky]->Mon = (isset($data[$ky]->Mon)?$data[$ky]->Mon +1:1);
                                }
                                if($row->week_day=='Tuesday'){
                                $data[$ky]->Tue = (isset($data[$ky]->Tue)?$data[$ky]->Tue +1:1);
                                }
                                if($row->week_day=='Wednesday'){
                                $data[$ky]->Wed = (isset($data[$ky]->Wed)?$data[$ky]->Wed +1:1);
                                }
                                if($row->week_day=='Thursday'){
                                $data[$ky]->Thu = (isset($data[$ky]->Thu)?$data[$ky]->Thu +1:1);
                                }
                                if($row->week_day=='Friday'){
                                $data[$ky]->Fri = (isset($data[$ky]->Fri)?$data[$ky]->Fri +1:1);
                                }
                                if($row->week_day=='Saturday'){
                                $data[$ky]->Sat = (isset($data[$ky]->Sat)?$data[$ky]->Sat +1:1);
                                }
                                
                                if($row->week_day=='Sunday'){
                                $data[$ky]->Sun = (isset($data[$ky]->Sun)?$data[$ky]->Sun +1:1);
                                }
                            }elseif($Request->report_for=='monthtodate'){
                                if($row->week_no==1){
                                    $data[$ky]->week_1 = (isset($data[$ky]->week_1)?$data[$ky]->week_1 +1:1);
                                    }
                                    if($row->week_no==2){
                                        $data[$ky]->week_2 = (isset($data[$ky]->week_2)?$data[$ky]->week_2 +1:1);
                                     }
                                     if($row->week_no==3){
                                        $data[$ky]->week_3 = (isset($data[$ky]->week_3)?$data[$ky]->week_3 +1:1);
                                     }
                                     if($row->week_no==4){
                                        if(isset($data[$ky]->week_4)){
                                            $data[$ky]->week_4 =$data[$ky]->week_4 +1; 
                                        }
                                     } 
                                     if($row->week_no==5){
                                        
                                        if(isset($data[$ky]->week_5)){
                                            $data[$ky]->week_5 =$data[$ky]->week_5 +1; 
                                        }
                                     }
                            }
                            elseif($Request->report_for=='yeartodate'){
                                $month_vl=date('M',strtotime($row->schedule_date));
                                        if($month_vl=='Jan'){
                                        $data[$ky]->Jan = (isset($data[$ky]->Jan)?$data[$ky]->Jan +1:1);
                                        }
                                        if($month_vl=='Feb'){
                                        $data[$ky]->Feb = (isset($data[$ky]->Feb)?$data[$ky]->Feb +1:1);
                                        }
                                        if($month_vl=='Mar'){
                                        $data[$ky]->Mar = (isset($data[$ky]->Mar)?$data[$ky]->Mar +1:1);
                                        }
                                        if($month_vl=='Apr'){
                                            $data[$ky]->Apr = (isset($data[$ky]->Apr)?$data[$ky]->Apr +1:1);
                                        } 
                                        if($month_vl=='May'){
                                            $data[$ky]->May = (isset($data[$ky]->May)?$data[$ky]->May +1:1);
                                        }
                                        if($month_vl=='Jun'){
                                            $data[$ky]->Jun = (isset($data[$ky]->Jul)?$data[$ky]->Jul +1:1);
                                        }  
                                        if($month_vl=='Jul'){
                                            $data[$ky]->Jul = (isset($data[$ky]->Jul)?$data[$ky]->Jul +1:1);
                                        } 
                                           
                                        if($month_vl=='Aug'){
                                            $data[$ky]->Aug = (isset($data[$ky]->Aug)?$data[$ky]->Aug +1:1);
                                        }
                                          
                                        if($month_vl=='Sep'){
                                            $data[$ky]->Sep = (isset($data[$ky]->Sep)?$data[$ky]->Sep +1:1);
                                        }
                                         
                                        if($month_vl=='Oct'){
                                            $data[$ky]->Oct = (isset($data[$ky]->Oct)?$data[$ky]->Oct +1:1);
                                        }
                                        
                                        if($month_vl=='Nov'){
                                            $data[$ky]->Nov = (isset($data[$ky]->Nov)?$data[$ky]->Nov +1:1);
                                        }
                                          
                                        if($month_vl=='Dec'){
                                            $data[$ky]->Dec = (isset($data[$ky]->Dec)?$data[$ky]->Dec +1:1);
                                        }
                            }
                            
                    }else{
                        $object = new \stdClass();

                                    if($row->job_type=='Dual Fuel Install'){
                                        //$object->job_type = 'Dual Fuel';
                                    }
                            $object->job_type = $row->job_type;

                          if($Request->report_for=='weektodate'){
                            if($row->week_day=='Monday'){
                            $object->Mon = 1;
                            }
                            else{
                            $object->Mon =0;
                            }

                            if($row->week_day=='Tuesday'){
                            $object->Tue = 1;
                            }
                            else{
                            $object->Tue =0;
                            }

                            if($row->week_day=='Wednesday'){
                            $object->Wed = 1;
                            }
                            else{
                            $object->Wed =0;
                            }
                            if($row->week_day=='Thursday'){
                            $object->Thu = 1;
                            }
                            else{
                            $object->Thu =0;
                            }

                            if($row->week_day=='Friday'){
                            $object->Fri = 1;
                            }
                            else{
                            $object->Fri =0;
                            }

                            if($row->week_day=='Saturday'){
                            $object->Sat = 1;
                            }
                            else{
                            $object->Sat =0;
                            }

                            if($row->week_day=='Sunday'){
                            $object->Sun = 1;
                            }
                            else{
                            $object->Sun =0;
                            }
                        }
                        elseif($Request->report_for=='monthtodate'){
                            if($row->week_no==1){
                                $object->week_1 = 1;
                                }
                                else{
                                 $object->week_1 =0;
                                }
                                if($row->week_no==2){
                                 $object->week_2 = 1;
                                 }
                                 else{
                                     $object->week_2 =0;
                                 }
                                 if($row->week_no==3){
                                     $object->week_3 = 1;
                                 }else{
                                     $object->week_3 =0;
                                 }
                                 if($row->week_no==4){
                                     $object->week_4 = 1;
                                 }else{
                                     $object->week_4 =0;
                                 } 
                                 if($row->week_no==5){
                                     $object->week_5 = 1;
                                 }else{
                                    $object->week_5 = 0;
                                 }
     
                        }
                        elseif($Request->report_for=='yeartodate'){
                         
                            if(date('M',strtotime($row->schedule_date))=='Jan'){
                                $object->Jan = 1;
                                }
                                else{
                                 $object->Jan =0;
                                }
                                if($row->week_no=='Feb'){
                                 $object->Feb = 1;
                                 }
                                 else{
                                     $object->Feb =0;
                                 }
                                 if(date('M',strtotime($row->schedule_date))=='Mar'){
                                     $object->Mar = 1;
                                 }else{
                                     $object->Mar =0;
                                 }
                                 if(date('M',strtotime($row->schedule_date))=='Apr'){
                                    $object->Apr = 1;
                                }else{
                                    $object->Apr =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='May'){
                                    $object->May = 1;
                                }else{
                                    $object->May =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Jun'){
                                    $object->Jun = 1;
                                }else{
                                    $object->Jun =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Jul'){
                                    $object->Jul = 1;
                                }else{
                                    $object->Jul =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Aug'){
                                    $object->Aug = 1;
                                }else{
                                    $object->Aug =0;
                                }

                                // 
                                if(date('M',strtotime($row->schedule_date))=='Sep'){
                                    $object->Sep = 1;
                                }else{
                                    $object->Sep =0;
                                }
                                
                                if(date('M',strtotime($row->schedule_date))=='Oct'){
                                    $object->Oct = 1;
                                }else{
                                    $object->Oct =0;
                                }
                                
                                if(date('M',strtotime($row->schedule_date))=='Nov'){
                                    $object->Nov = 1;
                                }else{
                                    $object->Nov =0;
                                }
                                 
                                 if(date('M',strtotime($row->schedule_date))=='Dec'){
                                    $object->Dec = 1;
                                }else{
                                    $object->Dec =0;
                                }
                        }


                        $TeamLeader[]= $object;

                       
                    }
                
               
               
           }
          
           //complate
          
      
           return view('reports.fuelmix',['report_for'=>$Request->report_for,'file_name'=>$file_name,'data'=> $TeamLeader]);
         }
        
          return 'Record not found';  
   }

   
   public function utilitaooh(Request $Request)
   {
       //
       
       switch($Request->report_for)
       {
       case "day":
           $Request->start_date= date('Y-m-d', strtotime('-1 day'));
           $Request->end_date = date('Y-m-d', strtotime('-1 day'));
           break;
           case "weektodate":
                   $current_week_date =  $this->getStartAndEndDate(date("W"),date("Y"));
                   $Request->start_date = $current_week_date['week_start'];
                   $Request->end_date = date('Y-m-d');
           break;
           case "monthtodate":
               $Request->start_date = date('Y-m-01');
               $Request->end_date = date('Y-m-d');
           break;
           case "monthprior":
               $Request->start_date = date('Y-m-1', strtotime('-1 months'));
               $Request->end_date = date('Y-m-t', strtotime('-1 months'));
           break;
           case "yeartodate":
               $Request->start_date = date('Y-01-01');
               $Request->end_date = date('Y-m-d');
           break;
           case "yearprior":
               $Request->start_date = date('Y-01-01', strtotime('-1 year'));
               $Request->end_date = date('Y-12-31', strtotime('-1 year'));
            
           break;   
              
           
                   
        }
        
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
          $q= Utilita_job::select('*')->join('engineer_groups','engineer_groups.child_engineer_id','=','utilita_jobs.engineer_id');
         }else{
           return 'Sorry data not found';
      //  return Redirect::back()->withErrors(['msg', 'Records not found']);

       }
        
         
          //if($month!=''){ $q->whereMonth('schedule_date', '=', $month); }
          $time = "17:00:00";
          $q->whereTime('schedule_end_time', '>=', $time); 
           if($start_date!=''){ $q->whereDate('schedule_date', '>=', $start_date); }
          if($today_date!=''){ $q->whereDate('schedule_date', '<=', $today_date); }
          if(isset($Request->job_status)){$q->where('job_status', '=', 'Completed'); }
         if($q->count() > 0){
            if($Request->file_id=='2'){
                $result=$q->orderBy('appointment_time','asc')->get();
                $file_name='Utilita';
          }else{
                $result=$q->get();
                $file_name='Mds';
          }
           $TeamLeader=[];
           foreach($result as $row){
               if(isset($TeamLeader[$row->parent_engineer])){
                   $data=  array_filter(
                       $TeamLeader[$row->parent_engineer],
                       function ($e) use ($row) {
                           return ($e->engineer == $row->engineer);
                       });
                
                       if($data){
                           $ky = array_keys($data);
                           $ky =$ky[0];
                           
                           if($Request->report_for=='weektodate'){
                            if($row->week_day=='Monday'){
                            $data[$ky]->Mon = (isset($data[$ky]->Mon)?$data[$ky]->Mon +1:1);
                            }
                            if($row->week_day=='Tuesday'){
                            $data[$ky]->Tue = (isset($data[$ky]->Tue)?$data[$ky]->Tue +1:1);
                            }
                            if($row->week_day=='Wednesday'){
                            $data[$ky]->Wed = (isset($data[$ky]->Wed)?$data[$ky]->Wed +1:1);
                            }
                            if($row->week_day=='Thursday'){
                            $data[$ky]->Thu = (isset($data[$ky]->Thu)?$data[$ky]->Thu +1:1);
                            }
                            if($row->week_day=='Friday'){
                            $data[$ky]->Fri = (isset($data[$ky]->Fri)?$data[$ky]->Fri +1:1);
                            }
                            if($row->week_day=='Saturday'){
                            $data[$ky]->Sat = (isset($data[$ky]->Sat)?$data[$ky]->Sat +1:1);
                            }
                            
                            if($row->week_day=='Sunday'){
                            $data[$ky]->Sun = (isset($data[$ky]->Sun)?$data[$ky]->Sun +1:1);
                            }
                        }elseif($Request->report_for=='monthtodate'){
                            if($row->week_no==1){
                                $data[$ky]->week_1 = (isset($data[$ky]->week_1)?$data[$ky]->week_1 +1:1);
                                }
                                if($row->week_no==2){
                                    $data[$ky]->week_2 = (isset($data[$ky]->week_2)?$data[$ky]->week_2 +1:1);
                                 }
                                 if($row->week_no==3){
                                    $data[$ky]->week_3 = (isset($data[$ky]->week_3)?$data[$ky]->week_3 +1:1);
                                 }
                                 if($row->week_no==4){
                                    if(isset($data[$ky]->week_4)){
                                        $data[$ky]->week_4 =$data[$ky]->week_4 +1; 
                                    }
                                 } 
                                 if($row->week_no==5){
                                    
                                    if(isset($data[$ky]->week_5)){
                                        $data[$ky]->week_5 =$data[$ky]->week_5 +1; 
                                    }
                                 }
                        }
                        elseif($Request->report_for=='yeartodate'){
                            $month_vl=date('M',strtotime($row->schedule_date));
                                    if($month_vl=='Jan'){
                                    $data[$ky]->Jan = (isset($data[$ky]->Jan)?$data[$ky]->Jan +1:1);
                                    }
                                    if($month_vl=='Feb'){
                                    $data[$ky]->Feb = (isset($data[$ky]->Feb)?$data[$ky]->Feb +1:1);
                                    }
                                    if($month_vl=='Mar'){
                                    $data[$ky]->Mar = (isset($data[$ky]->Mar)?$data[$ky]->Mar +1:1);
                                    }
                                    if($month_vl=='Apr'){
                                        $data[$ky]->Apr = (isset($data[$ky]->Apr)?$data[$ky]->Apr +1:1);
                                    } 
                                    if($month_vl=='May'){
                                        $data[$ky]->May = (isset($data[$ky]->May)?$data[$ky]->May +1:1);
                                    }
                                    if($month_vl=='Jun'){
                                        $data[$ky]->Jun = (isset($data[$ky]->Jul)?$data[$ky]->Jul +1:1);
                                    }  
                                    if($month_vl=='Jul'){
                                        $data[$ky]->Jul = (isset($data[$ky]->Jul)?$data[$ky]->Jul +1:1);
                                    } 
                                       
                                    if($month_vl=='Aug'){
                                        $data[$ky]->Aug = (isset($data[$ky]->Aug)?$data[$ky]->Aug +1:1);
                                    }
                                      
                                    if($month_vl=='Sep'){
                                        $data[$ky]->Sep = (isset($data[$ky]->Sep)?$data[$ky]->Sep +1:1);
                                    }
                                     
                                    if($month_vl=='Oct'){
                                        $data[$ky]->Oct = (isset($data[$ky]->Oct)?$data[$ky]->Oct +1:1);
                                    }
                                    
                                    if($month_vl=='Nov'){
                                        $data[$ky]->Nov = (isset($data[$ky]->Nov)?$data[$ky]->Nov +1:1);
                                    }
                                      
                                    if($month_vl=='Dec'){
                                        $data[$ky]->Dec = (isset($data[$ky]->Dec)?$data[$ky]->Dec +1:1);
                                    }
                        }
                                
                       }else{
                           $object = new \stdClass();
                          $object->engineer = $row->engineer;
                          if($Request->report_for=='weektodate'){
                            if($row->week_day=='Monday'){
                            $object->Mon = 1;
                            }
                            else{
                            $object->Mon =0;
                            }

                            if($row->week_day=='Tuesday'){
                            $object->Tue = 1;
                            }
                            else{
                            $object->Tue =0;
                            }

                            if($row->week_day=='Wednesday'){
                            $object->Wed = 1;
                            }
                            else{
                            $object->Wed =0;
                            }
                            if($row->week_day=='Thursday'){
                            $object->Thu = 1;
                            }
                            else{
                            $object->Thu =0;
                            }

                            if($row->week_day=='Friday'){
                            $object->Fri = 1;
                            }
                            else{
                            $object->Fri =0;
                            }

                            if($row->week_day=='Saturday'){
                            $object->Sat = 1;
                            }
                            else{
                            $object->Sat =0;
                            }

                            if($row->week_day=='Sunday'){
                            $object->Sun = 1;
                            }
                            else{
                            $object->Sun =0;
                            }
                        }
                        elseif($Request->report_for=='monthtodate'){
                          if($row->week_no==1){
                          $object->week_1 = 1;
                          }
                          else{
                           $object->week_1 =0;
                          }
                          if($row->week_no==2){
                           $object->week_2 = 1;
                           }
                           else{
                               $object->week_2 =0;
                           }
                           if($row->week_no==3){
                               $object->week_3 = 1;
                           }else{
                               $object->week_3 =0;
                           }
                           if($row->week_no==4){
                               $object->week_4 = 1;
                           }else{
                               $object->week_4 =0;
                           } 
                           if($row->week_no==5){
                               $object->week_5 = 1;
                           }else{
                            $object->week_5 = 0;
                           }
                        }  elseif($Request->report_for=='yeartodate'){
                         
                            if(date('M',strtotime($row->schedule_date))=='Jan'){
                                $object->Jan = 1;
                                }
                                else{
                                 $object->Jan =0;
                                }
                                if($row->week_no=='Feb'){
                                 $object->Feb = 1;
                                 }
                                 else{
                                     $object->Feb =0;
                                 }
                                 if(date('M',strtotime($row->schedule_date))=='Mar'){
                                     $object->Mar = 1;
                                 }else{
                                     $object->Mar =0;
                                 }
                                 if(date('M',strtotime($row->schedule_date))=='Apr'){
                                    $object->Apr = 1;
                                }else{
                                    $object->Apr =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='May'){
                                    $object->May = 1;
                                }else{
                                    $object->May =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Jun'){
                                    $object->Jun = 1;
                                }else{
                                    $object->Jun =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Jul'){
                                    $object->Jul = 1;
                                }else{
                                    $object->Jul =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Aug'){
                                    $object->Aug = 1;
                                }else{
                                    $object->Aug =0;
                                }

                                // 
                                if(date('M',strtotime($row->schedule_date))=='Sep'){
                                    $object->Sep = 1;
                                }else{
                                    $object->Sep =0;
                                }
                                
                                if(date('M',strtotime($row->schedule_date))=='Oct'){
                                    $object->Oct = 1;
                                }else{
                                    $object->Oct =0;
                                }
                                
                                if(date('M',strtotime($row->schedule_date))=='Nov'){
                                    $object->Nov = 1;
                                }else{
                                    $object->Nov =0;
                                }
                                 
                                 if(date('M',strtotime($row->schedule_date))=='Dec'){
                                    $object->Dec = 1;
                                }else{
                                    $object->Dec =0;
                                }
                        }
                           $TeamLeader[$row->parent_engineer][]= $object;
                       }
                   }else{
                           $object = new \stdClass();
                          $object->engineer = $row->engineer;
                         
                          if($Request->report_for=='weektodate'){
                            if($row->week_day=='Monday'){
                            $object->Mon = 1;
                            }
                            else{
                            $object->Mon =0;
                            }

                            if($row->week_day=='Tuesday'){
                            $object->Tue = 1;
                            }
                            else{
                            $object->Tue =0;
                            }

                            if($row->week_day=='Wednesday'){
                            $object->Wed = 1;
                            }
                            else{
                            $object->Wed =0;
                            }
                            if($row->week_day=='Thursday'){
                            $object->Thu = 1;
                            }
                            else{
                            $object->Thu =0;
                            }

                            if($row->week_day=='Friday'){
                            $object->Fri = 1;
                            }
                            else{
                            $object->Fri =0;
                            }

                            if($row->week_day=='Saturday'){
                            $object->Sat = 1;
                            }
                            else{
                            $object->Sat =0;
                            }

                            if($row->week_day=='Sunday'){
                            $object->Sun = 1;
                            }
                            else{
                            $object->Sun =0;
                            }
                        }
                        elseif($Request->report_for=='monthtodate'){
                          if($row->week_no==1){
                          $object->week_1 = 1;
                          }
                          else{
                           $object->week_1 =0;
                          }
                          if($row->week_no==2){
                           $object->week_2 = 1;
                           }
                           else{
                               $object->week_2 =0;
                           }
                           if($row->week_no==3){
                               $object->week_3 = 1;
                           }else{
                               $object->week_3 =0;
                           }
                           if($row->week_no==4){
                               $object->week_4 = 1;
                           }else{
                               $object->week_4 =0;
                           } 
                           if($row->week_no==5){
                               $object->week_5 = 1;
                           }else{
                            $object->week_5 = 0;
                           }
                        }  elseif($Request->report_for=='yeartodate'){
                         
                            if(date('M',strtotime($row->schedule_date))=='Jan'){
                                $object->Jan = 1;
                                }
                                else{
                                 $object->Jan =0;
                                }
                                if($row->week_no=='Feb'){
                                 $object->Feb = 1;
                                 }
                                 else{
                                     $object->Feb =0;
                                 }
                                 if(date('M',strtotime($row->schedule_date))=='Mar'){
                                     $object->Mar = 1;
                                 }else{
                                     $object->Mar =0;
                                 }
                                 if(date('M',strtotime($row->schedule_date))=='Apr'){
                                    $object->Apr = 1;
                                }else{
                                    $object->Apr =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='May'){
                                    $object->May = 1;
                                }else{
                                    $object->May =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Jun'){
                                    $object->Jun = 1;
                                }else{
                                    $object->Jun =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Jul'){
                                    $object->Jul = 1;
                                }else{
                                    $object->Jul =0;
                                }
                                if(date('M',strtotime($row->schedule_date))=='Aug'){
                                    $object->Aug = 1;
                                }else{
                                    $object->Aug =0;
                                }

                                // 
                                if(date('M',strtotime($row->schedule_date))=='Sep'){
                                    $object->Sep = 1;
                                }else{
                                    $object->Sep =0;
                                }
                                
                                if(date('M',strtotime($row->schedule_date))=='Oct'){
                                    $object->Oct = 1;
                                }else{
                                    $object->Oct =0;
                                }
                                
                                if(date('M',strtotime($row->schedule_date))=='Nov'){
                                    $object->Nov = 1;
                                }else{
                                    $object->Nov =0;
                                }
                                 
                                 if(date('M',strtotime($row->schedule_date))=='Dec'){
                                    $object->Dec = 1;
                                }else{
                                    $object->Dec =0;
                                }
                        }
                           $TeamLeader[$row->parent_engineer][]= $object;
                       }
           }
       
          // dd($TeamLeader);         
           return view('reports.ooh',['report_for'=>$Request->report_for,'file_name'=>$file_name,'data'=> $TeamLeader]);
         //  return response()->json(array('success' => true,'complate'=>$teamLeader,'target_data'=>3.5));  
         
       }
        
        //  return response()->json(array('success' => false,'message'=> 'data not found'));  
   }

    function getStartAndEndDate($week, $year) {
        
        $dto = new \DateTime();
        $dto->setISODate($year, $week);
        $ret['week_start'] = $dto->format('Y-m-d');
        $dto->modify('+6 days');
        $ret['week_end'] = $dto->format('Y-m-d');
        return $ret;
      }
      

}
