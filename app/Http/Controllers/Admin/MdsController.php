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
            $q= Morrison_jobs::join('engineer_groups','engineer_groups.child_engineer_id','=','Morrison_jobs.engineer_id');
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
}
