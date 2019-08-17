import React from 'react';
import { TextField, MenuItem, InputAdornment } from '@material-ui/core';


const fontes = [
  {
    id: 0,
    name: 'Cloreto de Potássio'
  },
  {
    id: 1,
    name: 'Sulfato de Potássio'
  },
  {
    id: 2,
    name: 'Sulf.Potássio/Mag.'
  },
]

const PotassioStep = () => {
  return (
    <>
      <TextField
        id="atualmente_potassio"
        label="Teor desejado"
        margin="normal"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <TextField
        id="fonte_potassio"
        label="Fonte de potássio"
        margin="normal"
        select
        value={0}
      >
        {
          fontes.map((fonte, key) => {
            return (
              <MenuItem
                key={key}
                value={fonte.id}
              >
                {
                  fonte.name
                }
              </MenuItem>
            )
          })
        }
      </TextField>
      <TextField
        id="custo_fonte_potassio"
        label="Custo"
        margin="normal"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>,
        }}
        type="number"
      />
    </>
  );
}

export default PotassioStep;