@extends('adminlte::page')

@section('title', 'Emater PR')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
<p>Olá, {{Auth::user()->name}}! Seja bem-vindo.</p>
<p></p>
@stop