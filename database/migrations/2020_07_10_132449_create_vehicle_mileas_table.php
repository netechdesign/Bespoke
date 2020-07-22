<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicleMileasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_mileas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('sheets_id')->unsigned()->index();
            $table->string('registration');
            $table->dateTime('start_time');
            $table->dateTime('end_time'); 
            $table->text('start_location');
            $table->text('end_location');
            $table->string('start_poi')->nullable(); 
            $table->string('end_poi')->nullable(); 
            $table->string('driver')->nullable(); 
            $table->string('duration')->nullable(); 
            $table->string('idle')->nullable(); 
            $table->double('miles');
            $table->double('max_speed');		
            $table->string('start_postcode');
            $table->string('end_postcode'); 
            $table->string('driver_name'); 
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
        Schema::dropIfExists('vehicle_mileas');
    }
}
