import React from 'react';
import { TextField, InputAdornment, makeStyles } from '@material-ui/core';

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


const AnaliseStep = ({props}) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        id="atualmente_fosforo"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="P"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="atualmente_potassio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="K"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="atualmente_calcio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="Ca"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="atualmente_magnesio"
        InputProps={{
          endAdornment: <InputAdornment position="end">cmolc</InputAdornment>,
        }}
        label="Mg"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="atualmente_enxofre"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="S"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="atualmente_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="Al"
        margin="normal"
        className={classes.textField}
      />
      <TextField
        id="atualmente_hidrogenio_aluminio"
        InputProps={{
          endAdornment: <InputAdornment position="end">mg/dm³</InputAdornment>,
        }}
        label="H + Al"
        margin="normal"
        className={classes.textField}
      />
    </>
  );
}

export default AnaliseStep;