<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Engineer_lookup;



class Engineer_lookupController extends Controller
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
                $jobsrow = Engineer_lookup::where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   if($search!=''){
                                    $query->Where('engineer_name', 'LIKE', "%{$search}%");
                                    $query->orWhere('regions_sort_name', 'LIKE', "%{$search}%");
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

    public function dropdown_list(Request $request)
    {
        try {
            $manager = DB::table('engineers')->select(DB::raw('engineer_id as value'),DB::raw('engineer_name as label'))->whereNotIn('engineer_id', function($query){
                $query->select('engineer_id')
                ->from('engineer_lookups');
            })->get();
            

            $regions = DB::table('teams')->select(DB::raw('id as value'),DB::raw('CONCAT(engineer_name, " ", regions_sort_name) AS label'),'regions_sort_name')->get();
            
            return response()->json(array('success' => true,'manager' => json_decode($manager),'region'=>json_decode($regions)), 200);
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
        try{
            $engineers =new Engineer_lookup();
            $engineers->engineer_id = $request->engineer_id;
            $engineers->employee_name= $request->engineer_name;
            $engineers->team_id= $request->team_id;
            $engineers->regions_sort_name= $request->regions_sort_name;
            $engineers->perfomance_level= $request->perfomance_level;
            $engineers->cost= $request->cost;
            $engineers->Monday= $request->Monday;	
            $engineers->Tuesday= $request->Tuesday;
            $engineers->Wednesday= $request->Wednesday;
            $engineers->Thursday= $request->Thursday;
            $engineers->Friday= $request->Friday;

            if($engineers->save()){
                return response()->json(array('success' => true,
                'message' => 'Engineer inserted successfully'
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
        $Engineer_lookup = Engineer_lookup::find($id);
        if($Engineer_lookup){
            
         return response()->json(array('success' => true,
         'data' => $Engineer_lookup
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
        
        try{
            $engineers =Engineer_lookup::find($id);
            $engineers->engineer_id = $request->engineer_id;
            $engineers->employee_name= $request->engineer_name;
            $engineers->team_id= $request->team_id;
            $engineers->regions_sort_name= $request->regions_sort_name;
            $engineers->perfomance_level= $request->perfomance_level;
            $engineers->cost= $request->cost;
            $engineers->Monday= $request->Monday;	
            $engineers->Tuesday= $request->Tuesday;
            $engineers->Wednesday= $request->Wednesday;
            $engineers->Thursday= $request->Thursday;
            $engineers->Friday= $request->Friday;

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
}
