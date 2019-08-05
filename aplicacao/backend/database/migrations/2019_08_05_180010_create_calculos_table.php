<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCalculosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calculos', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->unsignedBigInteger('fonte_de_fosforo');
            $table->foreign('fonte_de_fosforo')->references('id')->on('corretivos');
            $table->decimal('fonte_de_fosforo_teor_desejado', 15, 3)->default(0);
            $table->decimal('fonte_de_fosforo_eficiencia_desejado', 3, 3)->default(0);
            $table->decimal('fonte_de_fosforo_custo_tonelada', 3, 3)->default(0);

            $table->unsignedBigInteger('fonte_de_potassio');
            $table->foreign('fonte_de_potassio')->references('id')->on('corretivos');
            $table->decimal('fonte_de_potassio_teor_desejado', 15, 3)->default(0);
            $table->decimal('fonte_de_potassio_custo_tonelada', 3, 3)->default(0);

            $table->unsignedBigInteger('fonte_de_calcio');
            $table->foreign('fonte_de_calcio')->references('id')->on('corretivos');
            $table->decimal('fonte_de_calcio_teor_desejado', 15, 3)->default(0);
            $table->decimal('fonte_de_calcio_custo_tonelada', 3, 3)->default(0);
            $table->decimal('fonte_de_calcio_prnt', 3, 3)->default(0);
            $table->decimal('fonte_de_calcio_teor_de_cao', 3, 3)->default(0);

            $table->unsignedBigInteger('analise_id');
            $table->foreign('analise_id')->references('id')->on('analises');

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
        Schema::dropIfExists('calculos');
    }
}
