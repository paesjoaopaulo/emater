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
        helperText={analise.ideais_fosforo}
        id="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="P"
        margin="normal"
        name="atualmente_fosforo"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_fosforo}
      />
      <TextField
        className={classes.textField}
        error={true}
        helperText={"Ideal: " + 10.2}
        id="atualmente_potassio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="K"
        margin="normal"
        name="atualmente_potassio"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_potassio}
      />
      <TextField
        className={classes.textField}
        helperText={"Ideal: " + 0.5}
        id="atualmente_calcio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="Ca"
        margin="normal"
        name="atualmente_calcio"
        onChange={handleInputChange}
        required
        style={{ border: 'thin solid #0f0' }}
        type="number"
        value={analise.atualmente_calcio}
      />
      <TextField
        className={classes.textField}
        helperText={analise.ideais_magnesio}
        id="atualmente_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="Mg"
        margin="normal"
        name="atualmente_magnesio"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_magnesio}
      />
      <TextField
        className={classes.textField}
        helperText={analise.ideais_enxofre}
        id="atualmente_enxofre"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="S"
        margin="normal"
        name="atualmente_enxofre"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_enxofre}
      />
      <TextField
        className={classes.textField}
        helperText={analise.ideais_aluminio}
        id="atualmente_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmol/dm³</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="Al"
        margin="normal"
        name="atualmente_aluminio"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_aluminio}
      />
      <TextField
        className={classes.textField}
        helperText={analise.ideais_hidrogenio_aluminio}
        id="atualmente_hidrogenio_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmol/dm³</InputAdornment>,
          inputProps: { min: 0 },
        }}
        label="H + Al"
        margin="normal"
        name="atualmente_hidrogenio_aluminio"
        onChange={handleInputChange}
        required
        type="number"
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