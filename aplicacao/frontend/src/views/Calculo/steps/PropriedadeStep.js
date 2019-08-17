import React from 'react';
import { TextField } from '@material-ui/core';

const PropriedadeStep = () => {

  return (
    <>
      <TextField
        helperText="Fulano de Tal"
        id="nome_do_proprietario"
        label="Nome do Proprietário"
        margin="normal"
      />

      <TextField
        helperText="Cabrobró/CE"
        id="municipio"
        label="Nome do Município"
        margin="normal"
      />

      <TextField
        helperText="LOTE 803E"
        id="lote"
        label="Lote"
        margin="normal"
      />

      <TextField
        helperText="24.400"
        id="area_total"
        label="Área Total"
        margin="normal"
        prefix="R$"
      />

      <TextField
        helperText="knsknslnskl"
        id="talhao"
        label="Talhão"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="area_do_talhao"
        label="Área do Talhão"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="matricula_do_lote"
        label="Matrícula do Lote"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="textura_do_solo"
        label="Textura do Solo"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="sistema_de_cultivo"
        label="Sistema de Cultivo"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="nome_do_responsavel_tecnico"
        label="Responsável Técnico"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="profundidade_da_amostra"
        label="Profundidade da Amostra"
        margin="normal"
      />

      <TextField
        helperText="knsknslnskl"
        id="numero_do_resultado_da_analise_do_solo"
        label="Nº da Análise do Solo"
        margin="normal"
      />
    </>
  );

}

export default PropriedadeStep;
