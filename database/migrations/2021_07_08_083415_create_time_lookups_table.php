<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimeLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('time_lookups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('day')->nullable();
            $table->time('in_hours_start')->nullable();
            $table->time('in_hours_end')->nullable();
            $table->time('out_of_hours_start')->nullable();
            $table->time('out_of_hours_end')->nullable();
            $table->timestamps();
        });
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Monday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Tuesday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Wednesday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Thursday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Friday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Saturday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
        DB::table('time_lookups')->insert(
            array(
                'day' => 'Sunday',
                'in_hours_start' => '07:00',
                'in_hours_end' => '17:00',
                'out_of_hours_start'=>'17:01',
                'out_of_hours_end' =>'06:59'
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('time_lookups');
    }
}
