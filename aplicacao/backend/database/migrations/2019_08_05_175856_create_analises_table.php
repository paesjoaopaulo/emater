<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnalisesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('analises', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->decimal('fosforo', 8, 2)->default(0)->comment('em mg/dm3');
            $table->decimal('potassio', 8, 2)->default(0)->comment('em cmolc');
            $table->decimal('calcio', 8, 2)->default(0)->comment('em cmolc');
            $table->decimal('magnesio', 8, 2)->default(0)->comment('em cmolc');
            $table->decimal('enxofre', 8, 2)->default(0)->comment('em cmolc');
            $table->decimal('aluminio', 8, 2)->default(0)->comment('em cmolc');
            $table->decimal('hidrogenio_aluminio', 8, 2)->default(0)->comment('em cmolc');
            $table->decimal('materia_organica', 8, 2)->default(0)->comment('em cmolc');

            $table->integer('profundidade_da_amostra')->default(0)->comment('em cm');

            $table->unsignedBigInteger('propriedade_id');
            $table->foreign('propriedade_id')->references('id')->on('propriedades');
            
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
        Schema::dropIfExists('analises');
    }
}
