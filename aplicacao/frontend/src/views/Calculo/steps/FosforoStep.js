import React from 'react';
import { TextField, InputAdornment, MenuItem } from '@material-ui/core';

const fontes = [
  {
    id: 0,
    name: 'Superfosfato Simples',
    eficiencia: 70
  },
  {
    id: 1,
    name: 'Superfosfato Triplo',
    eficiencia: 70
  },
  {
    id: 2,
    name: 'MAP',
    eficiencia: 70
  },
  {
    id: 3,
    name: 'DAP',
    eficiencia: 70
  },
  {
    id: 4,
    name: 'Yoorin',
    eficiencia: 70
  },
  {
    id: 5,
    name: 'Fosfato  Arad',
    eficiencia: 70
  },
  {
    id: 6,
    name: 'Fosfato  Gafsa',
    eficiencia: 70
  },
  {
    id: 7,
    name: 'Fosfato  Daoui',
    eficiencia: 70
  },
  {
    id: 8,
    name: 'Fosf.  Patos Minas',
    eficiencia: 70
  },
  {
    id: 9,
    name: 'Escória de Thomas',
    eficiencia: 70
  },
  {
    id: 10,
    name: 'Ácido Fosfórico',
    eficiencia: 70
  },
  {
    id: 11,
    name: 'Multif.Magnesiano',
    eficiencia: 70
  }
];

const FosforoStep = () => {
  return (
    <>
      <TextField
        id="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        label="Teor desejado"
        margin="normal"
      />
      <TextField
        id="fonte_fosforo"
        label="Fonte de fósforo"
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
        id="custo_fonte_fosforo"
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

export default FosforoStep;