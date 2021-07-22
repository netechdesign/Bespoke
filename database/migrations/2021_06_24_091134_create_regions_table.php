<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('regions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('sort_name');
            $table->timestamps();
        });

        DB::table('regions')->insert(
            array(
                'name' => 'North England',
                'sort_name' => 'NO'
            )
        );
        DB::table('regions')->insert(
            array(
                'name' => 'Scotland',
                'sort_name' => 'SC'
            )
        );
        DB::table('regions')->insert(
            array(
                'name' => 'South England',
                'sort_name' => 'SO'
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
        Schema::dropIfExists('regions');
    }
}
