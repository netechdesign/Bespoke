<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Bonus_periods;
use App\Models\Engineers;
use App\Models\Sms_job;
use App\Exports\Exportbonus;
use Input;
use Excel;

class Bonus_periodsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function export() 
    {
       
        
        $filename=' Bonus_periods'.time().'.xlsx';
        return Excel::download(new Exportbonus, $filename);
       
    }

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
        try{
                
            $user = JWTAuth::toUser($request->input('token'));
            $request->request->add(['created_by'=> $user->id]);
            $data= $request->except('token','next');
            if($request->week_date){
                
                $week_date = $request->week_date;
                foreach($week_date as $vl){
                    
                    $bonus_periods = new Bonus_periods();
                    $bonus_periods['created_by'] = $request->created_by;
                    $bonus_periods['month'] = $request->month;
                    $bonus_periods['year'] = $request->year;
                    $bonus_periods['wc'] = date('Y-m-d', strtotime(str_replace('/', '-', $vl['WC'])));
                    $bonus_periods['period'] = $vl['period'];
                    $bonus_periods->save();
                    
                }
            }
           return response()->json(array('success' => true,'message' => 'Data inserted successfully'), 200);
            
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
