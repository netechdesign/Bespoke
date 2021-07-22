<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEngineerLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('engineer_lookups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('engineer_id')->nullable()->index();
            $table->string('employee_name')->nullable();
            $table->bigInteger('team_id')->nullable()->index();
            $table->string('regions_sort_name')->nullable();
            $table->string('perfomance_level')->dafault('6');
            $table->float('cost')->default('240.00');
            $table->string('Monday')->dafault('Yes');
            $table->string('Tuesday')->dafault('Yes');
            $table->string('Wednesday')->dafault('Yes');
            $table->string('Thursday')->dafault('Yes');
            $table->string('Friday')->dafault('Yes');
            $table->integer('created_by')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('engineer_lookups');
    }
}
