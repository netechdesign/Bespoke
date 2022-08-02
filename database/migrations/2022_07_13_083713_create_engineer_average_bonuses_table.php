<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEngineerAverageBonusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('engineer_average_bonuses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('engineer_id')->index();
            $table->double('average_per_day_bonus');
            $table->integer('days_in_period');    
            $table->integer('current_period')->index();        
            $table->string('previous_period');
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
        Schema::dropIfExists('engineer_average_bonuses');
    }
}
