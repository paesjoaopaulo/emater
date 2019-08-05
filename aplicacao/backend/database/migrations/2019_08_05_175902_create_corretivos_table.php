<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCorretivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('corretivos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome_corretivo');
            $table->decimal('default_custo_tonelada', 10, 2)->default(0);
            $table->decimal('default_teor_cao', 5, 2)->default(0);
            $table->decimal('default_eficiencia_fosforo', 5, 2)->default(0);
            $table->decimal('default_prnt', 5, 2)->default(0);
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
        Schema::dropIfExists('corretivos');
    }
}
