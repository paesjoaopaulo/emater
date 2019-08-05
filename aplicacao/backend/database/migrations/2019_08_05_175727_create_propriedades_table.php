<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropriedadesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('propriedades', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome_proprietario');
            $table->string('nome_municipio');
            $table->char('sigla_uf', 2);
            $table->string('lote');
            $table->decimal('area_total', 8, 2)->default(0)->comment('em metros quadrados');
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
        Schema::dropIfExists('propriedades');
    }
}
