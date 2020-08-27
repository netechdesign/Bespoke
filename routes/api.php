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
        Route::resource('mds', 'MdsController');
        Route::resource('supplier', 'SupplierController');
        Route::resource('utilita', 'UtilitaController');
        Route::resource('engineer', 'EngineerController');
        Route::resource('vehicalmileas', 'VehicalmileasController');
        
        Route::post('mds/duplicatestore', 'MdsController@duplicatestore');
        Route::post('utilita/view', 'UtilitaController@view');
        Route::post('utilita/DailyPerformance', 'UtilitaController@DailyPerformance');
        
        Route::post('jobstatus', 'DashboardController@jobStatus');
        
        
               
    });

    Route::get('users/logout', 'Auth\UserController@logout');
    
});

Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them

    Route::post('user/login', 'Auth\UserController@login');
    Route::post('user/register', 'Auth\UserController@register');
});