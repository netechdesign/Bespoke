<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Job_lookup;

class Job_lookupController extends Controller
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
                
                $request['page'] = ($start/$page_length)+1;
                $jobsrow = Job_lookup::where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                                    $query->Where('job_type', 'LIKE', "%{$search}%");
                                    $query->orWhere('mix', 'LIKE', "%{$search}%");
                                    $query->orWhere('revenue', 'LIKE', "%{$search}%");
                                    $query->orWhere('pu', 'LIKE', "%{$search}%");
                                    $query->orWhere('contract', 'LIKE', "%{$search}%");
                                  } 
                   
                });
                $jobs =$jobsrow->orderBy('id', 'DESC')->paginate($page_length)->toArray();

                
                $response = array(
                "aaData" => $jobs['data'],
                "iTotalDisplayRecords" => $jobs['total'],
                "iTotalRecords" => $jobs['total'],
                "sColumns" => $request->input('sColumns'),
                "sEcho" => $request->input('sEcho'),
                "cuttentPage"=>$request['page']
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
        try{
            $user = JWTAuth::toUser($request->input('token'));
                       
            $engineers = new Job_lookup();
            $engineers->job_type = $request->job_type;
            $engineers->mix= $request->mix;
            $engineers->revenue = $request->revenue;
            $engineers->pu= $request->pu;
            $engineers->revenue_aborted = $request->revenue_aborted;
            $engineers->pu_aborted= $request->pu_aborted;
            $engineers->contract= $request->contract;
            $engineers->created_by = $user->id;
            if($engineers->save()){
                return response()->json(array('success' => true,
                'message' => 'Job lookup inserted successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not added')); 
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
        $Job_lookup = Job_lookup::find($id);
        if($Job_lookup){
            
         return response()->json(array('success' => true,
         'data' => $Job_lookup
         ), 200);
     }
     else{
         return response()->json(array('success' => false,'message'=> 'not found')); 
     }
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
        try{
            $engineers =Job_lookup::find($id);
            $engineers->job_type = $request->job_type;
            $engineers->mix= $request->mix;
            $engineers->revenue = $request->revenue;
            $engineers->pu= $request->pu;
            $engineers->revenue_aborted = $request->revenue_aborted;
            $engineers->pu_aborted= $request->pu_aborted;
            $engineers->contract= $request->contract;
            
            if($engineers->save()){
                return response()->json(array('success' => true,
                'message' => 'Engineer updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not added')); 
            }
            
        }catch (\Exception $e) 
        {
           $message = $e->getMessage();
           
            return response()->json(array('success' => false,'message'=> $message));
        }
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
    public function dropdown_list(Request $request)
    {
        try {
            
            $job_lookups = DB::table('job_lookups')->select(DB::raw('job_type as value'),DB::raw('job_type as label'))->get();
            
            return response()->json(array('success' => true,'job_lookups' => json_decode($job_lookups)), 200);
        }
        catch (exception $e) {
            return response()->json([
                'response' => 'error',
                'message' => $e,
            ]);
        }
    }
}
