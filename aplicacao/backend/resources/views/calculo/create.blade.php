@extends('adminlte::page')

@section('title', 'Correção do Solo')

@section('content_header')
<h1>Correção do Solo</h1>
@stop

@section('content')
{{-- <div name="soilbalance-create" id="soilbalance-create"></div> --}}

<form type="post" action="{{action('CalculoController@store')}}">
    <fieldset>
        <legend>Dados da Propriedade</legend>
        <div class="row">
            <div class="form-group col-md-4">
                <label for="area-talhao">Área do Talhão</label>
                <input type="number" class="form-control" name="area-talhao" id="area-talhao" placeholder="Área do Talhão" value="0" min="0">
            </div>
        </div>
        <div class="row">

            <div class="form-group col-md-4">
                <label for="text-argiloso">Textura do Solo</label>
                <div class="radio">
                    <label>
                        <input type="radio" name="textura-do-solo" name="text-argiloso" id="text-argiloso" value="text-argiloso" required>
                        Argiloso
                    </label>
                    <label>
                        <input type="radio" name="textura-do-solo" name="text-media" id="text-media" value="text-media" required>
                        Text. Média
                    </label>
                </div>
            </div>

            <div class="form-group col-md-4">
                <label for="text-argiloso">Sistema de Cultivo</label>
                <div class="radio">
                    <label>
                        <input type="radio" name="optionsRadios" name="text-argiloso" id="text-argiloso" value="text-argiloso" required>
                        Plantio Direto
                    </label>
                    <label>
                        <input type="radio" name="optionsRadios" name="text-media" id="text-media" value="text-media" required>
                        Plantio Convencional
                    </label>
                </div>
            </div>
        </div>
    </fieldset>

    <fieldset>
        <legend>Análise do Solo</legend>
        <p>Teor de nutrientes atualmente no solo</p>

        <div class="row">
            <div class="form-group col-md-3">
                <label for="teor-solo-fosforo">Fósforo</label>
                <input type="number" class="form-control" name="teor-solo-fosforo" id="teor-solo-fosforo" placeholder="em mg/dm³" value="0" min="0"
                    max="100" step="0.01">
            </div>

            <div class="form-group col-md-3">
                <label for="teor-solo-potassio">Potássio</label>
                <input type="number" class="form-control" name="teor-solo-potassio" id="teor-solo-potassio" placeholder="em cmolc" value="0" min="0"
                    max="100" step="0.01">
            </div>

            <div class="form-group col-md-3">
                <label for="teor-solo-calcio">Cálcio</label>
                <input type="number" class="form-control" name="teor-solo-calcio" id="teor-solo-calcio" placeholder="em cmolc" value="0" min="0" max="100"
                    step="0.01">
            </div>

            <div class="form-group col-md-3">
                <label for="teor-solo-magnesio">Magnésio</label>
                <input type="number" class="form-control" name="teor-solo-magnesio" id="teor-solo-magnesio" placeholder="em cmolc" value="0" min="0"
                    max="100" step="0.01">
            </div>

            <div class="form-group col-md-3">
                <label for="teor-solo-enxofre">Enxofre</label>
                <input type="number" class="form-control" name="teor-solo-enxofre" id="teor-solo-enxofre" placeholder="em mg/dm³" value="0" min="0"
                    max="100" step="0.01">
            </div>

            <div class="form-group col-md-3">
                <label for="teor-solo-aluminio">Alumínio</label>
                <input type="number" class="form-control" name="teor-solo-aluminio" id="teor-solo-aluminio" placeholder="em cmolc" value="0" min="0"
                    max="100" step="0.01">
            </div>

            <div class="form-group col-md-3">
                <label for="teor-solo-hidrogenioaluminio">Hidrogênio + Alumínio</label>
                <input type="number" class="form-control" name="teor-solo-hidrogenioaluminio" id="teor-solo-hidrogenioaluminio" placeholder="em cmolc"
                    value="0" min="0" max="100" step="0.01">
            </div>
        </div>

        <legend>Matéria Orgânica</legend>
        <p>Informe o valor e selecione a unidade</p>

        <div class="row">
            <div class="form-group col-md-6">
                <label for="teor-solo-mo">M.O</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="teor-solo-mo" id="teor-solo-mo" value="0" min="0" max="100" step="0.01">
                    <select class="form-control">
                        <option>g/dm³</option>
                        <option>%</option>
                        <option>Carbono</option>
                    </select>
                </div>
            </div>
        </div>
    </fieldset>

    <fieldset>
        <legend>Correção/Recuperação do Fósforo</legend>
        <div class="row">
            <div class="form-group col-md-4">
                <label for="aba-correcao-fosforo-teor">Teor de Fósforo a ser atingido</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="aba-correcao-fosforo-teor" id="aba-correcao-fosforo-teor"
                        placeholder="Percentual desejado de fósforo" value="0" min="0">
                    <span class="input-group-addon">%</span>
                </div>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-fosforo-fonte">Fonte de Fósforo</label>
                <select class="form-control">
                    <option>Fonte I</option>
                    <option>Fonte II</option>
                    <option>Fonte III</option>
                </select>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-fosforo-eficiencia">Eficiência do fósforo</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="aba-correcao-fosforo-eficiencia" id="aba-correcao-fosforo-eficiencia"
                        placeholder="Eficiência da fonte de fósforo" value="0" min="0">
                    <span class="input-group-addon">%</span>
                </div>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-fosforo-custo">Custo em R$/tonelada</label>
                <input type="number" class="form-control" name="aba-correcao-fosforo-custo" id="aba-correcao-fosforo-custo"
                    placeholder="Custo do corretivo" value="0" min="0">
            </div>

        </div>
    </fieldset>

    <fieldset>
        <legend>Correção/Recuperação do Potássio</legend>
        <div class="row">
            <div class="form-group col-md-4">
                <label for="aba-correcao-potassio-teor">Teor de potássio a ser atingido</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="aba-correcao-potassio-teor" id="aba-correcao-potassio-teor"
                        placeholder="Percentual desejado de potássio" value="0" min="0">
                    <span class="input-group-addon">%</span>
                </div>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-potassio-fonte">Fonte de potássio</label>
                <select class="form-control">
                    <option>Fonte I</option>
                    <option>Fonte II</option>
                    <option>Fonte III</option>
                </select>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-potassio-custo">Custo em R$/tonelada</label>
                <input type="number" class="form-control" name="aba-correcao-potassio-custo" id="aba-correcao-potassio-custo"
                    placeholder="Custo do corretivo" value="0" min="0">
            </div>

        </div>
    </fieldset>

    <fieldset>
        <legend>Correção/Recuperação do Cálcio e Magnésio</legend>
        <div class="row">
            <div class="form-group col-md-4">
                <label for="aba-correcao-calciomagnesio-teor">Teor de cálcio a ser atingida</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="aba-correcao-calciomagnesio-teor" id="aba-correcao-calciomagnesio-teor"
                        placeholder="Percentual desejado de cálcio" value="0" min="0">
                    <span class="input-group-addon">%</span>
                </div>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-calciomagnesio-fonte">Fonte de cálcio</label>
                <select class="form-control">
                    <option>Fonte I</option>
                    <option>Fonte II</option>
                    <option>Fonte III</option>
                </select>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-calciomagnesio-custo">Custo em R$/tonelada</label>
                <input type="number" class="form-control" name="aba-correcao-calciomagnesio-custo" id="aba-correcao-calciomagnesio-custo"
                    placeholder="Custo do corretivo" value="0" min="0">
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-calciomagnesio-prnt">PRNT</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="aba-correcao-calciomagnesio-prnt" id="aba-correcao-calciomagnesio-prnt" placeholder=""
                        value="0" min="0">
                    <span class="input-group-addon">%</span>
                </div>
            </div>

            <div class="form-group col-md-4">
                <label for="aba-correcao-calciomagnesio-cao">Teor de CaO</label>
                <div class="input-group">
                    <input type="number" class="form-control" name="aba-correcao-calciomagnesio-cao" id="aba-correcao-calciomagnesio-cao" placeholder=""
                        value="0" min="0">
                    <span class="input-group-addon">%</span>
                </div>
            </div>

        </div>
    </fieldset>

    <button class="btn btn-primary">Finalizar</button>
</form>
@stop

@section('js')
<script src="{{asset('js/app.js')}}"></script>
@stop