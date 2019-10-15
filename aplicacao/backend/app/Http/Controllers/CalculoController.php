<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CalculoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = $request->all();
        $calculo = [];

        if ($data['propriedade']['textura_do_solo'] == 'TEXT_MEDIA') {

            $calculo['ideal_fosforo'] = '12';
            $calculo['ideal_potassio'] = '0.25';
            $calculo['ideal_calcio'] = '4';
            $calculo['ideal_magnesio'] = '1';
            $calculo['ideal_enxofre'] = '6';
            $calculo['ideal_aluminio'] = '0';
            $calculo['ideal_hidrogenio_aluminio'] = '';
        } else if ($data['propriedade']['textura_do_solo'] == 'ARGILOSO') {

            $calculo['ideal_fosforo'] = '9';
            $calculo['ideal_potassio'] = '0.35';
            $calculo['ideal_calcio'] = '6';
            $calculo['ideal_magnesio'] = '1.5';
            $calculo['ideal_enxofre'] = '9';
            $calculo['ideal_aluminio'] = '0';
            $calculo['ideal_hidrogenio_aluminio'] = '';
        }

        return [
            $calculo
        ];
    }
}
