import React from 'react';
import { TextField, MenuItem, InputAdornment, makeStyles } from '@material-ui/core';

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
  const classes = useStyles();
  return (
    <>
      <TextField
        id="atualmente_potassio"
        label="Teor desejado"
        margin="normal"
        className={classes.textField}
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <TextField
        id="fonte_potassio"
        label="Fonte de potássio"
        margin="normal"
        className={classes.textField}
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
        className={classes.textField}
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