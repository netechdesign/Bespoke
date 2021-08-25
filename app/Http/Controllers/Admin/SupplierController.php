<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
use App\Models\Sheets;

class SupplierController extends Controller
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
                
                $jobs = Sheets::select("*",
                            \DB::raw('(CASE 
                                WHEN file_id = "1" THEN "Morrison Data services" 
                                WHEN file_id = "2" THEN "Utilita" 
                                WHEN file_id = "3" THEN "Vehicle Mileage"
                                WHEN file_id = "5" THEN "SMS"
                                ELSE "N.A" 
                                END) AS file_type')
                    )
                    ->where(function($query) use ($request){
                  if($request->input('file_id')!=''){
                    $query->where('file_id','=',$request->input('file_id'));
                    $query->where('file_id','=',$request->input('file_id'));
                   } 
                })->offset($start)->limit($page_length)->orderBy('id','desc')->get();
                $totalRecords = Sheets::count();
                
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
    public function store(Request $request)
    {
        //
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
        try {
           $row= Sheets::find($id);  
           if($row->file_id==1){
            DB::table('jobs')->where('sheets_id', $id)->delete();
            $deleted=1;
           }elseif($row->file_id==2){
            DB::table('utilita_jobs')->where('sheets_id', $id)->delete();
            $deleted=1;
           }
           elseif($row->file_id==3){
            DB::table('vehicle_mileas')->where('sheets_id', $id)->delete();
            $deleted=1;
           }
           elseif($row->file_id==5){
            DB::table('sms_jobs')->where('sheets_id', $id)->delete();
            $deleted=1;
           }
           else{
            return response()->json(array('success' => false,'message'=> 'id not found'));   
           } 

           if(isset($deleted)){
            DB::table('sheets')->where('id', $id)->delete();

            return response()->json(array('success' => true,'message'=> 'deleted'));
           }
            
            
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
        }
    }
}
