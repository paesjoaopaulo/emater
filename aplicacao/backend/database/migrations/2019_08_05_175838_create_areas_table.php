<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAreasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('areas', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->decimal('area', 8, 2)->default(0);
            $table->enum('tipo_plantio', ['DIRETO', 'CONVENCIONAL']);
            $table->enum('textura_solo', ['MEDIA', 'ARGILOSA']);
            $table->string('nome_do_responsavel_tecnico');
            
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
        Schema::dropIfExists('areas');
    }
}
