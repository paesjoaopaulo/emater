import React from 'react';
import { TextField, InputAdornment, makeStyles } from '@material-ui/core';
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


const AnaliseStep = ({ analise, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_ANALISE',
      value: { [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <TextField
        className={classes.textField}
        id="atualmente_fosforo"
        name="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="P"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_fosforo}
      />
      <TextField
        className={classes.textField}
        id="atualmente_potassio"
        name="atualmente_potassio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="K"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_potassio}
      />
      <TextField
        className={classes.textField}
        id="atualmente_calcio"
        name="atualmente_calcio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="Ca"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_calcio}
      />
      <TextField
        className={classes.textField}
        id="atualmente_magnesio"
        name="atualmente_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="Mg"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_magnesio}
      />
      <TextField
        className={classes.textField}
        id="atualmente_enxofre"
        name="atualmente_enxofre"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="S"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_enxofre}
      />
      <TextField
        className={classes.textField}
        id="atualmente_aluminio"
        name="atualmente_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmol/dm³</InputAdornment>,
        }}
        label="Al"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_aluminio}
      />
      <TextField
        className={classes.textField}
        id="atualmente_hidrogenio_aluminio"
        name="atualmente_hidrogenio_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmol/dm³</InputAdornment>,
        }}
        label="H + Al"
        margin="normal"
        type="number"
        onChange={handleInputChange}
        value={analise.atualmente_hidrogenio_aluminio}
      />
    </>
  );
}

export default connect(state => (
  {
    analise: state.analise
  }
))(AnaliseStep);