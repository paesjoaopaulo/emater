import React from 'react';
import { TextField, InputAdornment, makeStyles, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import {
  calcAtualmenteCTCcmol,
  calcAtualmenteScmol,
  calcAtualmenteVPercent
} from '../../../helpers/formulas';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const AnaliseStep = ({ analise, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    let value = e.target.type === 'number' ? parseFloat(e.target.value) : e.target.value;
    dispatch({
      type: 'PREENCHER_ANALISE',
      value: { [e.target.name]: value }
    });
  }

  return (
    <>
      <TextField
        className={classes.textField}
        error={analise.ideais.fosforo > analise.atualmente_fosforo}
        helperText={`IDEAL (${analise.ideais.fosforo})`}
        id="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
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
        error={analise.ideais.potassio > analise.atualmente_potassio}
        helperText={`IDEAL (${analise.ideais.potassio})`}
        id="atualmente_potassio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
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
        error={analise.ideais.calcio > analise.atualmente_calcio}
        helperText={`IDEAL (${analise.ideais.calcio})`}
        id="atualmente_calcio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
        }}
        label="Ca"
        margin="normal"
        name="atualmente_calcio"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_calcio}
      />
      <TextField
        className={classes.textField}
        error={analise.ideais.magnesio > analise.atualmente_magnesio}
        helperText={`IDEAL (${analise.ideais.magnesio})`}
        id="atualmente_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
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
        error={analise.ideais.enxofre > analise.atualmente_enxofre}
        helperText={`IDEAL (${analise.ideais.enxofre})`}
        id="atualmente_enxofre"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
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
        error={analise.ideais.aluminio > analise.atualmente_aluminio}
        helperText={`IDEAL (${analise.ideais.aluminio})`}
        id="atualmente_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmol/dm³</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
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
        error={analise.ideais.h_al > analise.atualmente_h_al}
        helperText={`IDEAL (${analise.ideais.h_al})`}
        id="atualmente_hidrogenio_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmol/dm³</InputAdornment>,
          inputProps: { min: 0, step: 0.01 }
        }}
        label="H + Al"
        margin="normal"
        name="atualmente_hidrogenio_aluminio"
        onChange={handleInputChange}
        required
        type="number"
        value={analise.atualmente_hidrogenio_aluminio}
      />

      <Typography>S cmol {calcAtualmenteScmol(analise)}</Typography>
      <Typography>CTC cmol {calcAtualmenteCTCcmol(analise)}</Typography>
      <Typography>V% {calcAtualmenteVPercent(analise)}</Typography>

    </>
  );
};

export default connect(state => (
  {
    analise: state.analise
  }
))(AnaliseStep);
