<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSmsTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sms_teams', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('parent_engineer_id')->nullable();
            $table->string('parent_engineer')->nullable();
            $table->integer('child_engineer_id')->nullable();
            $table->string('child_engineer_name')->nullable();
            $table->integer('team_id')->nullable();
            $table->string('regions_sort_name')->nullable();
            $table->date('from_date')->nullable();
            $table->date('to_date')->nullable();
            $table->integer('created_by')->nullable();
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
        Schema::dropIfExists('sms_teams');
    }
}
