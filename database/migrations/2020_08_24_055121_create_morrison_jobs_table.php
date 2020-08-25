<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMorrisonJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('morrison_jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('sheets_id')->unsigned()->index();
            $table->integer('file_id');
            $table->string('file_name')->index();
            $table->string('month')->nullable();
            $table->string('week_day')->nullable();
            $table->date('week_date')->nullable();
            $table->dateTime('schedule_date')->nullable();
            $table->string('schedule_start_time')->nullable();
            $table->string('schedule_end_time')->nullable();
            $table->string('time_difference')->nullable();
            $table->string('work_master_sign_id')->nullable();           
            $table->bigInteger('engineer_id')->nullable();	
            $table->string('engineer')->nullable();	
            $table->string('area')->nullable();             
            $table->string('region')->nullable();             
            $table->string('report_group')->nullable();                    
            $table->string('field_force')->nullable();                    
            $table->string('leaver_flg')->nullable(); 
            $table->integer('week_summary')->nullable();
            $table->integer('num')->nullable();
            $table->integer('complete')->nullable();
            $table->integer('abort')->nullable();
            $table->string('job_status')->nullable();	
            $table->string('fault')->nullable();	
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
        Schema::dropIfExists('morrison_jobs');
    }
}
