import React from 'react';
import { TextField, MenuItem, InputAdornment, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';

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

const PotassioStep = ({ fontes, potassio, dispatch }) => {
  const classes = useStyles();
  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_K',
      value: { [e.target.name]: e.target.value }
    })
  }
  return (
    <>
      <TextField
        className={classes.textField}
        id="atualmente_potassio"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        label="Teor desejado"
        margin="normal"
        name="atualmente_potassio"
        onChange={handleInputChange}
        required
        type="number"
        value={potassio.atualmente_potassio}
      />
      <TextField
        className={classes.textField}
        id="fonte_potassio"
        label="Fonte de potássio"
        margin="normal"
        name="fonte_potassio"
        onChange={handleInputChange}
        required
        select
        value={potassio.fonte_potassio}
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
        className={classes.textField}
        id="custo_fonte_potassio"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>,
        }}
        label="Custo"
        margin="normal"
        name="custo_fonte_potassio"
        onChange={handleInputChange}
        required
        type="number"
        value={potassio.custo_fonte_potassio}
      />
    </>
  );
}

export default connect(state => ({ potassio: state.potassio, fontes: state.fontes }))(PotassioStep);