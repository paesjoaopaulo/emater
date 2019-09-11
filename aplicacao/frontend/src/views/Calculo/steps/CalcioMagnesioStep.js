import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

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

const CalcioMagnesioStep = () => {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="atualmente_fosforo"
        label="P"
        margin="normal"
        className={classes.textField}
      />
    </>
  );
}

export default CalcioMagnesioStep;