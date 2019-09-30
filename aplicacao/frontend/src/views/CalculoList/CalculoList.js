import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { CalculosToolbar, CalculosTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const CalculoList = () => {
  const classes = useStyles();

  const [calculos] = useState(mockData);

  return (
    <div className={classes.root}>
      <CalculosToolbar />
      <div className={classes.content}>
        <CalculosTable calculos={calculos} />
      </div>
    </div>
  );
};

export default CalculoList;
