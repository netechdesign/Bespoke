<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/

Route::group(array('prefix' => '/'), function() {
  
   Route::namespace('Admin')->group(function () {
      Route::resource('parmission', 'ParmissionController');
});
   Route::get('/', function(){
        return view('welcome');
     });
     
     Route::get('auth/signin', function(){
      return view('welcome');
   });
     Route::get('/list/utilita/{id}', function(){
      return view('welcome');
   });
   Route::get('/list/morrison/{id}', function(){
      return view('welcome');
   }); 
   Route::get('/dataimport', function(){
      return view('welcome');
   }); 
   
   Route::get('/dailyperformance/{id}', function(){
      return view('welcome');
   });
   Route::get('/list', function(){
      return view('welcome');
   }); 
   

   Route::get('/siteengineer', function(){
      return view('welcome');
   }); 
   
   Route::get('/utilitachart', function(){
      return view('welcome');
   }); 
   
   Route::get('/Engineer', function(){
      return view('welcome');
   });
   Route::get('/report', function(){
      return view('welcome');
   }); 
   Route::get('/report', function(){
      return view('welcome');
   }); 
     
     Route::get('/dashboard', function(){
        return view('welcome');
     }); 
     
     Route::get('/role', function(){
      return view('welcome');
   });
   Route::get('/role/add', function(){
      return view('welcome');
   });
   
   Route::get('/role/edit/{id}', function(){
      return view('welcome');
   });

   Route::get('/user', function(){
      return view('welcome');
   });
   Route::get('/user/add', function(){
      return view('welcome');
   });
   
   Route::get('/user/edit/{id}', function(){
      return view('welcome');
   });
   
   Route::get('/settarget', function(){
      return view('welcome');
   });
   
   Route::get('/vehicle', function(){
      return view('welcome');
   });

   Route::get('/team/add', function(){
      return view('welcome');
   });
   
   Route::get('/team', function(){
      return view('welcome');
   });
   
   Route::get('/employee_lookup', function(){
      return view('welcome');
   });
   
   Route::get('/job_lookup', function(){
      return view('welcome');
   });
   Route::get('/job_lookup/add', function(){
      return view('welcome');
   });
   
   Route::get('/time_lookup', function(){
      return view('welcome');
   });
   
   Route::get('/bonus_period/add', function(){
      return view('welcome');
   });
   Route::get('/performance', function(){
      return view('welcome');
   });
   Route::get('/bonus-periods', function(){
      return view('welcome');
   });
   Route::get('/work-mix', function(){
      return view('welcome');
   });
   
   Route::get('/sms-groups/add', function(){
      return view('welcome');
   });
   Route::get('/sms-groups', function(){
      return view('welcome');
   });
     Route::get('/export', 'Admin\MdsController@export');
     Route::get('/sms/export', 'Admin\Sms_report@export');
     Route::get('/sms/list', 'Admin\Sms_report@sms_list');
     
     Route::get('/bonus_periods/export', 'Admin\Bonus_periodsController@export');
     Route::get('/sms/workmixexport', 'Admin\Sms_report@workmixexport');
     
     Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.request');
     
    
    });

