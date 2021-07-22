<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Teams;


class TeamsController extends Controller
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
                $jobsrow = Teams::select("regions.name","teams.*",DB::raw('DATE_FORMAT(teams.created_at,"%d/%m/%Y") as created_at_date'))
                           ->join('regions','regions.id','=','teams.regions_id')
                           ->where(function($query) use ($request){
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
    public function check_sort_name(Request $request)
    {

        try{
            
            $team= Teams::select(DB::raw('count(*) as total'),'regions_sort_name')->where('regions_id',$request->regions_id)->first();
            $total= $team->total+1;
            $next_sort_name= $request->regions_sort_name.$total; 
            return response()->json(array('success' => true,'regions_sort_name' => $next_sort_name), 200);
        }catch (\Exception $e) 
        {
           $message = $e->getMessage();
           
            return response()->json(array('success' => false,'message'=> $message));
        }
    }
    public function store(Request $request)
    {
        //
        try{
            $validation = $request->validate([
                'engineer_id' => 'unique:teams',
                'regions_sort_name' =>'unique:teams'
                ]);
                
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $data= $request->except('token','next');
            $team= new Teams($data);
            if($team->save()){
            return response()->json(array('success' => true,'message' => 'Data inserted successfully'), 200);
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
}
