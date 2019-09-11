import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

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

  const classes = useStyles();

  return (
    <>
      <TextField
        id="materia_organica"
        label="M.O."
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="unidade"
        label="Unidade"
        margin="normal"
        className={classes.textField}
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