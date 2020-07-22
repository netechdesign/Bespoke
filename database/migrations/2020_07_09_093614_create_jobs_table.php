<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sheets', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('file_id');
            $table->string('file_name')->unique();
            $table->text('file_path');
            $table->integer('is_inserted')->default('0')->comment('1= sheet data inserted in job table');
            $table->timestamps();
        });

        Schema::create('jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('sheets_id')->unsigned()->index();
            $table->integer('file_id');
            $table->string('file_name')->index();
            $table->string('month')->nullable();
            $table->string('week_day')->nullable();
            $table->date('week_date')->nullable();
            $table->date('date')->comment('DATE_OF_ACTION for Utilita');
            $table->string('start_time')->comment('TO_CHAR for Utilita');
            $table->string('end_time')->nullable();
            $table->string('time_difference')->nullable();
            $table->string('work_master_sign_id')->nullable();           
            $table->string('name')->comment('ENGINEER_NAME for Utilita');
            $table->string('area')->nullable();             
            $table->string('geo_area')->comment('SUPERGROUP for Utilita');             
            $table->string('report_group')->nullable();                    
            $table->string('field_force')->nullable();                    
            $table->string('leaver_flg')->nullable(); 
            $table->integer('week_summary')->nullable();
            $table->integer('num')->nullable();
            $table->integer('complete')->nullable();
            $table->integer('abort')->nullable();

            $table->integer('no_access_rate')->nullable(); 

            $table->string('smart_book')->nullable(); 
            $table->string('warrant_book')->nullable(); 
            $table->string('traditional_book')->nullable(); 
            $table->string('smart_complete')->nullable(); 
            $table->string('warrant_complete')->nullable(); 
            $table->string('traditional_complete')->nullable(); 
            $table->string('smart_abort')->nullable(); 
            $table->string('warrant_abort')->nullable(); 
            $table->string('traditional_abort')->nullable(); 
            $table->string('smart_no_access')->nullable(); 
            $table->string('warrant_no_access')->nullable(); 
            $table->string('traditional_no_access')->nullable(); 
            $table->string('sf_df')->nullable(); 
            $table->string('job_type')->nullable(); 
            $table->text('sf_df_helper')->nullable(); 
            $table->string('work_type')->nullable(); 
            $table->string('job_id')->comment('for Utilita')->nullable(); 
            $table->dateTime('schedule_date')->comment('for Utilita')->nullable(); 
            $table->string('appointment_type')->comment('for Utilita')->nullable(); 
            $table->string('description')->comment('for Utilita')->nullable(); 
            $table->text('engineer_comment')->comment('for Utilita')->nullable();
            $table->string('time_slot')->comment('for Utilita')->nullable();  
            $table->string('company_name')->comment('for Utilita')->nullable();  
            $table->integer('created_by');
            $table->timestamps();
        });

        Schema::table('jobs', function($table) {
            $table->foreign('sheets_id')->references('id')->on('sheets')->onDelete('cascade');
            ;
        });
     
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}
