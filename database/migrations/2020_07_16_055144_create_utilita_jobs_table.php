<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUtilitaJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('utilita_jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('sheets_id')->unsigned()->index();
            $table->string('month')->nullable();
            $table->integer('week_no');
            $table->string('week_day')->nullable();
            $table->date('week_date')->nullable();
            $table->bigInteger('customer_id')->nullable();
            $table->bigInteger('job_id')->nullable();
            $table->string('post_code')->nullable();	
            $table->string('job_type')->nullable();	
            $table->string('job_status')->nullable();	
            $table->string('fault')->nullable();	
            $table->dateTime('job_booked')->nullable();	
            $table->string('appointment_time')->nullable();	
            $table->dateTime('schedule_start_time')->nullable();	
            $table->dateTime('schedule_end_time')->nullable();	
            $table->dateTime('on_site_time')->nullable();	
            $table->string('cancelled_by')->nullable();	
            $table->dateTime('cancelled_time')->nullable();	
            $table->bigInteger('engineer_id')->nullable();	
            $table->string('engineer')->nullable();	
            $table->string('company_name')->nullable();	
            $table->dateTime('schedule_date')->nullable();	
            $table->string('region')->nullable();
            $table->integer('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('utilita_jobs');
    }
}
