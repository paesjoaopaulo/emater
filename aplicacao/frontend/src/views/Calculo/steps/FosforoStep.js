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
    if (e.target.name === 'fonte_fosforo') {
      const fonte = fontes.filter((fonte) => fonte.id === e.target.value)
      dispatch({
        type: 'PREENCHER_P',
        value: {
          custo_fonte_fosforo: fonte.custo_fonte_fosforo,
          eficiencia_fonte_fosforo: fonte.eficiencia_fonte_fosforo,
        }
      })
    }
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
          inputProps: { min: 0 }
        }}
        label="Teor desejado"
        margin="normal"
        name="atualmente_fosforo"
        onChange={handleInputChange}
        required
        type="number"
        value={fosforo.atualmente_fosforo}
      />
      <TextField
        className={classes.textField}
        id="fonte_fosforo"
        label="Fonte de fósforo"
        margin="normal"
        name="fonte_fosforo"
        onChange={handleInputChange}
        required
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
        id="eficiencia_fonte_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end"></InputAdornment>,
          inputProps: { min: 0 }
        }}
        label="Eficiência"
        margin="normal"
        name="eficiencia_fonte_fosforo"
        onChange={handleInputChange}
        required
        type="number"
        value={fosforo.eficiencia_fonte_fosforo}
      />
      <TextField
        className={classes.textField}
        id="custo_fonte_fosforo"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>,
          inputProps: { min: 0 }
        }}
        label="Custo"
        margin="normal"
        name="custo_fonte_fosforo"
        onChange={handleInputChange}
        required
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