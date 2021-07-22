<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmsJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms_jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('sheets_id')->unsigned()->index();
            $table->string('month')->nullable();
            $table->integer('week_no');
            $table->string('week_day')->nullable();
            $table->date('week_date')->nullable();
            $table->integer('engineer_id')->nullable();
            $table->string('engineer')->nullable();
            $table->integer('is_in_team')->default(0)->comment('0 is not join');
            $table->date('appointment_date')->nullable();
            $table->string('job_reference')->nullable();
            $table->string('energy_supplier')->nullable();
            $table->text('address')->nullable();
            $table->string('town')->nullable();
            $table->string('post_code')->nullable();
            $table->string('work_type')->nullable();
            $table->string('select_work_type')->nullable();
            $table->string('meter_type')->nullable();
            $table->string('time_slot')->nullable();
            $table->dateTime('arrived_at')->nullable();
            $table->string('status')->nullable();
            $table->string('abort_code')->nullable();
            $table->text('abort_comments')->nullable();
            $table->text('job_comments')->nullable();
            $table->string('time_slot_start')->nullable();
            $table->string('time_slot_end')->nullable();
            $table->dateTime('completed_at')->nullable();
            $table->dateTime('aborted_at')->nullable();
            $table->string('client')->nullable();
            $table->text('reason_for_abort')->nullable();
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
        Schema::dropIfExists('sms_jobs');
    }
}
