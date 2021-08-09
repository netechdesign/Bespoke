<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sms_teams;
use App\Models\Sms_job;
use DB;
class SmsteamController extends Controller
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
                
                
               // __
               $totalCol = $request->input('iColumns');
               
                
               $columns = explode(',', $request->input('columns'));
               $start = $request->input('iDisplayStart');
               $page_length = $request->input('iDisplayLength');
               
               $request['page'] = ($start/$page_length)+1;
               $jobsrow = Sms_teams::select("*",DB::raw('DATE_FORMAT(from_date,"%d/%m/%Y") as from_date'),DB::raw('DATE_FORMAT(to_date,"%d/%m/%Y") as to_date'))->where(function($query) use ($request){
                   $search = $request->input('sSearch');
                 if($request->input('sheets_id')!=''){
                 //  $query->where('sheets_id','=',$request->input('sheets_id'));
                  }
                  if($search!=''){
                      
                    $query->Where('parent_engineer', 'LIKE', "%{$search}%");
                    $query->orWhere('child_engineer_name', 'LIKE', "%{$search}%");
                    $query->orWhere('regions_sort_name', 'LIKE', "%{$search}%");
 
                   
                  } 
                  
               });
               $jobs =$jobsrow->orderBy('regions_sort_name', 'ASC')->paginate($page_length)->toArray();

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
        //
       
        try{
            
            $Engineer = $request['Engineer'];
            
            if(isset($request['is_sms'])){
                $Engineer = json_decode($request['Engineer']);
                
            }

            if(count($Engineer)>0){
                 $available='';   
                foreach($Engineer as $vl){
                    
                    if(isset($request['is_sms'])){
                        $insret_id = DB::table('sms_teams')->insertGetId(['parent_engineer_id' =>$request->parent_engineer_id,'parent_engineer' => $request->parent_engineer, 'child_engineer_id' => $vl->value, 'child_engineer_name' => $vl->label,'team_id' =>$request->team_id,
                        'regions_sort_name' => $request->regions_sort_name,
                        'from_date'=> date('Y-m-d', strtotime(str_replace('/', '-', $request->from_date))),	
                        'to_date'=>date('Y-m-d', strtotime(str_replace('/', '-', $request->to_date)))]);
                        $engineer_id= $vl->value;
                    }else{
                        $insret_id = DB::table('sms_teams')->insertGetId(['parent_engineer_id' =>$request->parent_engineer_id,'parent_engineer' => $request->parent_engineer, 'child_engineer_id' => $vl['value'], 'child_engineer_name' => $vl['label'],'team_id' =>$request->team_id,
                        'regions_sort_name' => $request->regions_sort_name,
                        'from_date'=> date('Y-m-d', strtotime(str_replace('/', '-', $request->from_date))),	
                        'to_date'=>date('Y-m-d', strtotime(str_replace('/', '-', $request->to_date)))]);
                        $engineer_id= $vl['value'];
                    }

                        
                        $engineer_lookup = DB::table('engineer_lookups')->where('engineer_id',$engineer_id)->first();
                        if(!$engineer_lookup)
                                {
                                    if(isset($request['is_sms'])){
                                DB::table('engineer_lookups')->insertGetId(['engineer_id'=>$vl->value,'employee_name'=>$vl->label,'team_id'=> $request->team_id,'regions_sort_name' =>$request->regions_sort_name,'perfomance_level'=>'6','cost'=>'240.00','Monday'=>'Yes','Tuesday'=>'Yes','Wednesday'=>'Yes','Thursday'=>'Yes','Friday'=>'Yes']);
                                    }else{
                                        DB::table('engineer_lookups')->insertGetId(['engineer_id'=>$vl['value'],'employee_name'=>$vl['label'],'team_id'=> $request->team_id,'regions_sort_name' =>$request->regions_sort_name,'perfomance_level'=>'6','cost'=>'240.00','Monday'=>'Yes','Tuesday'=>'Yes','Wednesday'=>'Yes','Thursday'=>'Yes','Friday'=>'Yes']);
                                    }
                                }
                                if(isset($request['is_sms'])){
                                    $from_date = date('Y-m-d', strtotime(str_replace('/', '-', $request->from_date)));	
                                    $to_date = date('Y-m-d', strtotime(str_replace('/', '-', $request->to_date)));
                                     Sms_job::where('engineer_id', $vl->value)->whereDate('appointment_date', '>=', $from_date)->whereDate('appointment_date', '<=', $to_date)->update(['regions_sort_name'=>$request->regions_sort_name,'is_in_team'=>1]);
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
        
        $Sms_teams = Sms_teams::select('*',DB::raw('DATE_FORMAT(from_date,"%d/%m/%Y") as from_date'),DB::raw('DATE_FORMAT(to_date,"%d/%m/%Y") as to_date'))->find($id);
        if($Sms_teams){
            
         return response()->json(array('success' => true,
         'data' => $Sms_teams
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
            
            $data =Sms_teams::find($id);
            
            $data->parent_engineer_id =$request->parent_engineer_id;
            $data->parent_engineer = $request->parent_engineer;
            $data->child_engineer_id = $request->selected_engineer['value'];
            $data->child_engineer_name = $request->selected_engineer['label'];
            $data->team_id =$request->team_id;
            $data->regions_sort_name = $request->regions_sort_name;
            $data->from_date = date('Y-m-d', strtotime(str_replace('/', '-', $request->from_date)));
            $data->to_date =date('Y-m-d', strtotime(str_replace('/', '-', $request->to_date)));
            if($data->save()){
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
        try {
 
            $Engineers = Sms_teams::find($id);
            
            
            if($Engineers->delete()){
                return response()->json(array('success' => true,'message'=> 'deleted'));
            }else{
                return response()->json(array('success' => false,'message'=> 'not deleted')); 
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
