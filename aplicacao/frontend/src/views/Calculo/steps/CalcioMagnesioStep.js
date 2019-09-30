import React from 'react';
import { TextField, makeStyles, InputAdornment, MenuItem } from '@material-ui/core';
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

const CalcioMagnesioStep = ({ fontes, calcio_magnesio, dispatch }) => {
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
        id="fonte_calcio_magnesio"
        label="Fonte de Cálcio"
        margin="normal"
        name="fonte_calcio_magnesio"
        onChange={handleInputChange}
        required
        select
        value={calcio_magnesio.fonte_calcio_magnesio}
        fullWidth={true}
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
        id="atualmente_calcio_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        label="Teor desejado"
        margin="normal"
        type="number"
        name="atualmente_calcio_magnesio"
        onChange={handleInputChange}
        value={calcio_magnesio.atualmente_calcio_magnesio}
      />
      <TextField
        className={classes.textField}
        id="prnt_calcio_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        label="PRNT"
        margin="normal"
        type="number"
        name="prnt_calcio_magnesio"
        onChange={handleInputChange}
        value={calcio_magnesio.prnt_calcio_magnesio}
      />
      <TextField
        className={classes.textField}
        id="cao_calcio_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        label="Teor de CaO"
        margin="normal"
        type="number"
        name="cao_calcio_magnesio"
        onChange={handleInputChange}
        value={calcio_magnesio.cao_calcio_magnesio}
      />
      <TextField
        className={classes.textField}
        id="custo_fonte_calcio_magnesio"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>,
        }}
        label="Custo"
        margin="normal"
        name="custo_fonte_calcio_magnesio"
        onChange={handleInputChange}
        required
        type="number"
        value={calcio_magnesio.custo_fonte_calcio_magnesio}
      />
    </>
  );
}

export default connect(state => ({ calcio_magnesio: state.calcio_magnesio, fontes: state.fontes }))(CalcioMagnesioStep);
