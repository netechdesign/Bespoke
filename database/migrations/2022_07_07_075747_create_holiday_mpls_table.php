<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHolidayMplsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('holiday_mpls', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('engineer_id')->index();
            $table->integer('employee_ref_no')->index();
            $table->integer('teamhrs_engineer_id')->index();
            $table->enum('holiday_type',['holiday','bank_holiday','sickness_absence','general_absence','unproductive_time_absence']);
            $table->date('holiday_date');
            $table->float('holiday_hours');
            $table->integer('holiday_minutes');
            $table->float('pu_value_reduction');
            $table->float('mpl_pu')->commment('6-pu_value_reduction');
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
        Schema::dropIfExists('holiday_mpls');
    }
}
