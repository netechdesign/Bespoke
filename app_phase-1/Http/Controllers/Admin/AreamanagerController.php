<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Engineers;
use App\Models\Engineer_group;

use DB;
class AreamanagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $response = Engineers::select(DB::raw('engineer_id as value'),DB::raw('engineer_name as label'))->get();
            return response()->json($response, 201);
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
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
       
        try{
            $Engineer = json_decode($request['Engineer']);
            $SiteEngineer = json_decode($request['SiteEngineer']);
            
            if(!isset($SiteEngineer->value)){
                return response()->json(array('success' => false,'message'=> 'Please select Area Engineer'));
            }

            if(count($Engineer)>0){
                 $available='';   
                foreach($Engineer as $vl){
                    $is_available= DB::table('engineer_groups')->where('child_engineer_id',$vl->value);
                   if($is_available->count()==0){
                        $insret_id = DB::table('engineer_groups')->insertGetId(['parent_engineer_id' =>$SiteEngineer->value,'parent_engineer' => $SiteEngineer->label, 'child_engineer_id' => $vl->value, 'child_engineer_name' => $vl->label]);
                   }else{
                    $is_available  = $is_available->first();
                    $available.= $is_available->child_engineer_name.' is in '.$is_available->parent_engineer.',';
                   }



                }
                
           if($available!=''){
            return response()->json(array('success' => false,'message'=> $available));
           }
                return response()->json(array('success' => true,
                'message' => 'Engineer inserted successfully'
                ), 200);
            }else{
                return response()->json(array('success' => false,'message'=> 'Please select Engineer'));
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
    public function show(Request $request)
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
                
                $jobsrow = Engineer_group::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('parent_engineer', 'LIKE', "%{$search}%");
                    $query->orWhere('child_engineer_name', 'LIKE', "%{$search}%");
                    
                    
                    
                   } 
                   
                })->offset($start);
                $jobs = $jobsrow->orderBy('id', 'DESC')->limit($page_length)->get();
                $totalRecords = Engineer_group::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                       
                    $query->Where('parent_engineer', 'LIKE', "%{$search}%");
                    $query->orWhere('child_engineer_name', 'LIKE', "%{$search}%");
                    
                    
                    
                   } 
                   
                })->count();
                
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
 
            
             DB::table('engineer_groups')->where('id', $id)->delete();
 
             return response()->json(array('success' => true,'message'=> 'deleted'));
            
             
             
         }
         catch (exception $e) {
             return response()->json([
                 'response' => 'error',
                 'message' => $e,
             ]);
         }
    }
}
