import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';

const AnaliseStep = () => {
  return (
    <>
      <TextField
        id="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="P"
        margin="normal"
      />
      <TextField
        id="atualmente_potassio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="K"
        margin="normal"
      />
      <TextField
        id="atualmente_calcio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="Ca"
        margin="normal"
      />
      <TextField
        id="atualmente_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="Mg"
        margin="normal"
      />
      <TextField
        id="atualmente_enxofre"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="S"
        margin="normal"
      />
      <TextField
        id="atualmente_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="Al"
        margin="normal"
      />
      <TextField
        id="atualmente_hidrogenio_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="H + Al"
        margin="normal"
      />
    </>
  );
}

export default AnaliseStep;