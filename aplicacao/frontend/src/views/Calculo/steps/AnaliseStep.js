import React from 'react';
import { TextField } from '@material-ui/core';

const AnaliseStep = () => {
  return (
    <>
      <TextField
        helperText="Fósforo"
        id="atualmente_fosforo"
        label="P"
        margin="normal"
      />
      <TextField
        helperText="Potássio"
        id="atualmente_potassio"
        label="K"
        margin="normal"
      />
      <TextField
        helperText="Cálcio"
        id="atualmente_calcio"
        label="Ca"
        margin="normal"
      />
      <TextField
        helperText="Magnésio"
        id="atualmente_magnesio"
        label="Mg"
        margin="normal"
      />
      <TextField
        helperText="Enxofre"
        id="atualmente_enxofre"
        label="S"
        margin="normal"
      />
      <TextField
        helperText="Alumínio"
        id="atualmente_aluminio"
        label="Al"
        margin="normal"
      />
      <TextField
        helperText="Hidrogênio e Alumínio"
        id="atualmente_hidrogenio_aluminio"
        label="H + Al"
        margin="normal"
      />
    </>
  );
}

export default AnaliseStep;