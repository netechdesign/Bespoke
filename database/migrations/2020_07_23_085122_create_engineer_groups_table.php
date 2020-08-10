<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEngineerGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('engineer_groups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('parent_engineer_id');
            $table->string('parent_engineer');
            $table->bigInteger('child_engineer_id');
            $table->string('child_engineer_name');
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
        Schema::dropIfExists('engineer_groups');
    }
}
