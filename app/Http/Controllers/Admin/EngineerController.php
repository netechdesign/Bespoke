<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Engineers;
use DB;
use App\Models\Holiday_mpl;
class EngineerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function holiday_pu()
    {
        $databaseName = DB::connection()->getDatabaseName();

      //$day= 1; $Hours=8; $Minutes =480; then $pu_value_reduction=6;
       $engineers = Engineers::where('employee_ref_no','!=','')->pluck('employee_ref_no')->toArray();
       $employee_ref_no =array_values($engineers);
       $employee_ref_no = implode(", ", $employee_ref_no);    //prints 1, 2, 3
       $employee_pu_colomn ="(CASE WHEN day_time='Full day' THEN 8 ELSE 4 END) as holiday_hours,(CASE WHEN day_time='Full day' THEN 480 ELSE 240 END) as holiday_minutes,(CASE WHEN day_time='Full day' THEN 6 ELSE 3 END) as pu_value_reduction,(CASE WHEN day_time='Full day' THEN 0 ELSE 3 END) as mpl_pu";//mpl_pu

//$hr_system_employee = DB::connection('dbhrsystem')->select("SELECT 'holiday' as holiday_type,holidays_dates.is_approved,engineer_id,employee_details.user_id as teamhrs_user_id,employee_details.employee_ref_no,holidays_dates.holiday_date,(CASE WHEN day_time='Full day' THEN 1 ELSE 0.5 END) as hday,$employee_pu_colomn from holidays_dates join employee_details on holidays_dates.user_id=employee_details.user_id join bespokemetering-31313576cf.engineers as bsml_engineers on bsml_engineers.employee_ref_no = employee_details.employee_ref_no where employee_details.employee_ref_no IN($employee_ref_no)");

$hr_system_employee = DB::connection('dbhrsystem')->select("SELECT 'holiday' as holiday_type,holidays_dates.is_approved,employee_details.user_id as teamhrs_user_id,employee_details.employee_ref_no,holidays_dates.holiday_date,(CASE WHEN day_time='Full day' THEN 1 ELSE 0.5 END) as hday,$employee_pu_colomn from holidays_dates join employee_details on holidays_dates.user_id=employee_details.user_id where employee_details.employee_ref_no IN($employee_ref_no)");

//and holidays_dates.is_approved!='no' 
if($hr_system_employee){
   foreach($hr_system_employee as $vl){
    

    $holiday_mpl=Holiday_mpl::where('holiday_date',$vl->holiday_date)->where('holiday_type',$vl->holiday_type)->where('teamhrs_user_id',$vl->teamhrs_user_id)->where('employee_ref_no',$vl->employee_ref_no)->first();
    if($holiday_mpl){
  if($vl->is_approved=='no'){
    $holiday_mpl->delete();
  }
    }else{
            if($vl->is_approved!='no'){
                $engineerdts = Engineers::where('employee_ref_no',$vl->employee_ref_no)->first();
                $engineer_id = $engineerdts->engineer_id;
                    $holiday_mpl = new Holiday_mpl();
                    $holiday_mpl["holiday_type"]= $vl->holiday_type;
                    $holiday_mpl["engineer_id"]= $engineer_id;
                    $holiday_mpl["teamhrs_user_id"]= $vl->teamhrs_user_id;
                    $holiday_mpl["employee_ref_no"]= $vl->employee_ref_no;
                    $holiday_mpl["holiday_date"]= $vl->holiday_date;
                    $holiday_mpl["holiday_hours"]= $vl->holiday_hours;
                    $holiday_mpl["holiday_minutes"]= $vl->holiday_minutes;
                    $holiday_mpl["pu_value_reduction"]= $vl->pu_value_reduction;
                    $holiday_mpl["mpl_pu"]= $vl->mpl_pu;
                    $holiday_mpl->save();
                    
            }
    }  
      
   } 
}

$absences = DB::connection('dbhrsystem')->select("SELECT * FROM absences join employee_details on absences.user_id=employee_details.user_id where employee_details.employee_ref_no IN($employee_ref_no)");
if($absences){
    foreach($absences as $vl)
            {

                
                $teamhrs_user_id = $vl->user_id;
                if($vl->absence_type==1){
                   $holiday_type= 'sickness_absence';
                }elseif($vl->absence_type==2){
                    $holiday_type= 'general_absence';
                }
                elseif($vl->absence_type==3){
                    $holiday_type= 'unproductive_time_absence';
                }else{
                    $holiday_type= 'bank_holiday';
                }
                if($vl->days<=1){

                    $holiday_hours= $vl->hours;
                    $holiday_minutes = $vl->hours*60;
                    $pu_value_reduction = ($holiday_minutes*6)/480;
                    $mpl_pu = 6-$pu_value_reduction;
                    $holiday_mpl=Holiday_mpl::where('holiday_date',$vl->from_date)->where('holiday_type',$holiday_type)->where('teamhrs_user_id',$teamhrs_user_id)->where('employee_ref_no',$vl->employee_ref_no)->first();

                    if($holiday_mpl){
                        
                          }else{
                                  
                                      $engineerdts = Engineers::where('employee_ref_no',$vl->employee_ref_no)->first();
                                      $engineer_id = $engineerdts->engineer_id;
                                          $holiday_mpl = new Holiday_mpl();
                                          $holiday_mpl["holiday_type"]= $holiday_type;
                                          $holiday_mpl["engineer_id"]= $engineer_id;
                                          $holiday_mpl["teamhrs_user_id"]= $teamhrs_user_id;
                                          $holiday_mpl["employee_ref_no"]= $vl->employee_ref_no;
                                          $holiday_mpl["holiday_date"]= $vl->from_date;
                                          $holiday_mpl["holiday_hours"]= $holiday_hours;
                                          $holiday_mpl["holiday_minutes"]= $holiday_minutes;
                                          $holiday_mpl["pu_value_reduction"]= $pu_value_reduction;
                                          $holiday_mpl["mpl_pu"]= $mpl_pu;
                                          $holiday_mpl->save();
                                          
                                  
                          } 
                }
                else{
                        

                        $iDateFrom = mktime(1, 0, 0, substr($vl->from_date, 5, 2), substr($vl->from_date, 8, 2), substr($vl->from_date, 0, 4));
                $iDateTo = mktime(1, 0, 0, substr($vl->to_date, 5, 2), substr($vl->to_date, 8, 2), substr($vl->to_date, 0, 4));
                $aryRange=[];

                if ($iDateTo >= $iDateFrom) {
                    array_push($aryRange, date('Y-m-d', $iDateFrom)); // first entry
                    while ($iDateFrom<$iDateTo) {
                        $iDateFrom += 86400; // add 24 hours
                        
                        $holiday_date = date('Y-m-d', $iDateFrom);

                        $holiday_hours= 8;
                        $holiday_minutes = $holiday_hours*60;
                        $pu_value_reduction = ($holiday_minutes*6)/480;
                        $mpl_pu = 6-$pu_value_reduction;
                        
                        $holiday_mpl=Holiday_mpl::where('holiday_date',$holiday_date)->where('holiday_type',$holiday_type)->where('teamhrs_user_id',$teamhrs_user_id)->where('employee_ref_no',$vl->employee_ref_no)->first();

                        if($holiday_mpl)
                        {

                        }
                        else
                        {
                            $engineerdts = Engineers::where('employee_ref_no',$vl->employee_ref_no)->first();
                            $engineer_id = $engineerdts->engineer_id;
                            $holiday_mpl = new Holiday_mpl();
                            $holiday_mpl["holiday_type"]= $holiday_type;
                            $holiday_mpl["engineer_id"]= $engineer_id;
                            $holiday_mpl["teamhrs_user_id"]= $teamhrs_user_id;
                            $holiday_mpl["employee_ref_no"]= $vl->employee_ref_no;
                            $holiday_mpl["holiday_date"]= $holiday_date;
                            $holiday_mpl["holiday_hours"]= $holiday_hours;
                            $holiday_mpl["holiday_minutes"]= $holiday_minutes;
                            $holiday_mpl["pu_value_reduction"]= $pu_value_reduction;
                            $holiday_mpl["mpl_pu"]= $mpl_pu;
                            $holiday_mpl->save();
                        }
                    }
                }
                }
                //$holiday_mpl=Holiday_mpl::where('holiday_date',$vl->holiday_date)->where('holiday_type',$vl->holiday_type)->where('teamhrs_user_id',$vl->teamhrs_user_id)->where('employee_ref_no',$vl->employee_ref_no)->first();
            }
}
       
    }
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
                
                $jobsrow = Engineers::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   
                   $query->Where('is_delete', 0);
                   if($search!=''){
                       
                    $query->Where('engineer_id', 'LIKE', "%{$search}%");
                    $query->orWhere('engineer_name', 'LIKE', "%{$search}%");
                    $query->orWhere('employee_ref_no', 'LIKE', "%{$search}%");
                    
                    
                    
                   } 
                   
                })->offset($start);
                $jobs = $jobsrow->orderBy('id', 'DESC')->limit($page_length)->get();
                $totalRecords = Engineers::select("*")->where(function($query) use ($request){
                    $search = $request->input('sSearch');
                  if($request->input('sheets_id')!=''){
                  //  $query->where('sheets_id','=',$request->input('sheets_id'));
                   }
                   $query->Where('is_delete', 0);
                   if($search!=''){
                        $query->Where('engineer_id', 'LIKE', "%{$search}%");
                        $query->orWhere('engineer_name', 'LIKE', "%{$search}%");
            
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
        // ALTER TABLE `mds`.`engineers` ADD UNIQUE `employee_ref_no` (`employee_ref_no`);

        try{
            
            $engineers =new Engineers();
            $engineers->engineer_id = $request->engineer_id;
            $engineers->engineer_name = $request->engineer_name;
            $engineers->employee_ref_no = $request->employee_ref_no;
            
            $engineers->file_id =0;

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
        //
        $Engineers = Engineers::find($id);
        if($Engineers){
          return response()->json(array('success' => true,'data' => $Engineers), 200);
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
        
 
            $Engineers = Engineers::find($id);
            $Engineers->engineer_id = $request->engineer_id;
            $Engineers->engineer_name = $request->engineer_name;
            $Engineers->employee_ref_no = $request->employee_ref_no;
            
            

            if($Engineers->save()){
              
                return response()->json(array('success' => true,
                'message' => 'Engineers updated successfully'
                ), 200);
            }
            else{
                return response()->json(array('success' => false,'message'=> 'not update')); 
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
        try {
 
            $Engineers = Engineers::find($id);
            $Engineers->is_delete=1;
            
            if($Engineers->save()){
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
