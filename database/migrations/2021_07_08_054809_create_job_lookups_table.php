<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('job_lookups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('job_type')->nullable()->index();
            $table->string('mix')->nullable();
            $table->float('revenue')->nullable();
            $table->float('pu')->nullable();
            $table->string('contract')->nullable();
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
        Schema::dropIfExists('job_lookups');
    }
}
