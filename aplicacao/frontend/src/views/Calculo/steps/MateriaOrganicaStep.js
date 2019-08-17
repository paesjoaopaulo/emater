import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

const unidades = [
  {
    id: 0,
    name: 'Carbono',
  },
  {
    id: 1,
    name: '%',
  },
  {
    id: 2,
    name: 'g/dm³',
  },
]

const MateriaOrganicaStep = () => {
  return (
    <>
      <TextField
        id="materia_organica"
        label="M.O."
        margin="normal"
      />
      <TextField
        id="unidade"
        label="Unidade"
        margin="normal"
        select
        value={0}
      >
        {
          unidades.map((unidade, key) => {
            return (
              <MenuItem
                key={key}
                value={unidade.id}
              >
                {
                  unidade.name
                }
              </MenuItem>
            )
          })
        }
      </TextField>
    </>
  );
}

export default MateriaOrganicaStep;