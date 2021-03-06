<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use DB;
use App\Models\Vehicle_mileas;

class VehicalmileasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
    public function show(Request $Request)
    {
        //
        
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
             $q= Vehicle_mileas::select('driver_name',DB::Raw('sum(miles) as total_miles'),DB::Raw('max(max_speed) as max_speed'));
             $listData= Vehicle_mileas::select("*",DB::raw('DATE_FORMAT(drive_date,"%d/%m/%Y") as drive_date'),
             DB::raw('DATE_FORMAT(start_time,"%d/%m/%Y %H:%i") as start_time'),
             DB::raw('DATE_FORMAT(end_time,"%d/%m/%Y %H:%i") as end_time')
               );
            
            
             if($month!=''){
                   $q->whereMonth('drive_date', '=', $month);
                   $listData->whereMonth('drive_date', '=', $month);
                }
             if($start_date!=''){ 
                 $q->whereDate('drive_date', '>=', $start_date);
                $listData->whereDate('drive_date', '>=', $start_date);
            }
             if($today_date!=''){ $q->whereDate('drive_date', '<=', $today_date);
                $listData->whereDate('drive_date', '<=', $today_date);
            }
             
             /** print query   toSql(); */
            // dd($q->toSql());
            $totalmileage ='';
            if($q->count() > 0){
                $totalmileage =$q->groupBy('driver_name')->get();
                $listmileage =$listData->get();

            }
            return response()->json(array('success' => true,'totalmileage'=>$totalmileage,'listmileage'=>$listmileage));  
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
