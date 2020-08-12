<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Input;
use Excel;

use DB;
use App\Models\utilita_job;


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
        return Excel::download(new ExportJobs, 'users.xlsx');
    }
}
