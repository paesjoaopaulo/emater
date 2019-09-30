import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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

const ResultadoStep = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Registrar cálculo de correção do solo.</Typography>
      <Typography>Baixar o PDF.</Typography>
      <Typography>Baixar o Excel.</Typography>
    </div>
  );
}

export default ResultadoStep;