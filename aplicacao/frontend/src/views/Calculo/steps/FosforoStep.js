import React from 'react';
import { TextField, InputAdornment, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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

const FosforoStep = ({ fosforo, fontes, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_P',
      value: { [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <TextField
        className={classes.textField}
        id="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
        label="Teor desejado"
        margin="normal"
        name="atualmente_fosforo"
        onChange={handleInputChange}
        value={fosforo.atualmente_fosforo}
      />
      <TextField
        className={classes.textField}
        id="fonte_fosforo"
        label="Fonte de fósforo"
        margin="normal"
        name="fonte_fosforo"
        onChange={handleInputChange}
        select
        value={fosforo.fonte_fosforo}
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
        id="custo_fonte_fosforo"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>,
        }}
        label="Custo"
        margin="normal"
        name="custo_fonte_fosforo"
        onChange={handleInputChange}
        type="number"
        value={fosforo.custo_fonte_fosforo}
      />
    </>
  );
}

export default connect(state => (
  {
    fosforo: state.fosforo,
    fontes: state.fontes,
  }
))(FosforoStep);