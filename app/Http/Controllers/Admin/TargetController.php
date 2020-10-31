<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Targets;
use JWTAuth;
class TargetController extends Controller
{

    public function edit($id)
    {
        //
       $row = Targets::find($id);
       if($row){
        
        return response()->json(array('success' => true,
        'data' => $row
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
        
            $validation = $request->validate([
                'daily_target' => 'required',
                ]);
                
                $user = JWTAuth::toUser($request->input('token'));
                $Targets = Targets::find($id);
                $Targets->daily_target = $request->daily_target;
                $Targets->updated_by = $user->id;
            
           

            if($Targets->save()){
                return response()->json(array('success' => true,
                'message' => 'Targets updated successfully'
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

    
}
