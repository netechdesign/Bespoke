<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
   
    

    Route::namespace('Admin')->group(function () {
        
        Route::resource('user', 'UserController');
        Route::resource('mds', 'MdsController');
        Route::resource('supplier', 'SupplierController');
        Route::resource('utilita', 'UtilitaController');
        Route::resource('areamanager', 'AreamanagerController');
        Route::resource('engineer', 'EngineerController');
        
        Route::resource('vehicalmileas', 'VehicalmileasController');
        
        Route::post('mds/duplicatestore', 'MdsController@duplicatestore')->name('duplicate add');
        Route::post('utilita/view', 'UtilitaController@view');
        Route::post('utilita/DailyPerformance', 'UtilitaController@DailyPerformance')->name('Daily Performance add');
        
        Route::resource('role', 'RoleController');
        Route::get('roledropdown', 'RoleController@roledropdown');
        
        //parmission list          
        
        Route::post('parmission/list', function(){
                            $parmission = App\Models\Permissions::select('id','name','page_name','method_name')->where('status',1)->get();
                            $list=array();
                            foreach($parmission as $vl){
                              $arr =  explode('.',$vl->name); 
                              if(count($arr)>1){
                                if($arr[0]=='mds'){
                                     if($arr[1]=='create'){
                                        $vl->page_name= 'Data Import';
                                     } 
                                     
                                     if($arr[1]=='show'){
                                        $vl->page_name= 'Show Uploaded Data';
                                     }
                                     if($arr[1]=='destroy'){
                                        $vl->page_name= 'Delete Uploaded Data';
                                     }
                                     if($arr[1]=='edit'){
                                          continue;
                                      }
                                      if($arr[1]=='download'){
                                        $vl->page_name= 'Report Download';
                                        $list['Report'][] =$vl;
                                        continue;
                                    }
                                      
                                     $list['File'][] =$vl;
                                }elseif($arr[0]=='utilita'){
                                    if($arr[1]=='show'){
                                        $vl->page_name= 'Report search';
                                        $list['Report'][] =$vl;
                                       
                                    }else{
                                        continue;
                                    }
                                }elseif($arr[0]=='supplier'){
                                    continue;
                                }elseif($arr[0]=='vehicalmileas'){
                                    continue;
                                }else{
                                    
                                    $list[$arr[0]][] =$vl;
                                }

                              }else{
                                
                                if($vl->name=='duplicate add'){
                                    
                                    $vl->page_name= 'Add Duplicate';
                                    $list['File'][] =$vl;
                                }
                              }
                            }
                            $arraylist=array();
                            foreach($list as $ky => $vl){
                                $row=[];
                                $row[$ky]= $vl;
                                array_push($arraylist,$row);
                            }
                           
                            $response = ['success'=>true, 'data'=>$arraylist];
                            return response()->json($response, 201);
                        })->name('permission');
               
   /** dashboard route */
   Route::post('jobstatus', 'DashboardController@jobStatus');
   Route::post('utilita', 'DashboardController@utilita');
   
  
                    });
  

    Route::get('users/logout', 'Auth\UserController@logout');
    
});

Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them

    Route::post('user/login', 'Admin\UserController@login');
    //Route::post('user/register', 'Auth\UserController@register');
});