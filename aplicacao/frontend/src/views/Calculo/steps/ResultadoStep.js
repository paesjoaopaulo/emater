import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { calcIdealVPercent, calcVPercentAposCorrecoes } from '../../../helpers';
import { connect } from 'react-redux';

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

const ResultadoStep = ({ propriedade, analise, fosforo, potassio, calcio_magnesio, dispatch }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Typography>Mostrar valores após as correções.</Typography>

      <Typography>Registrar cálculo de correção do solo.</Typography>

      <Typography>Exportar PDF.</Typography>

      <Typography>Exportar Excel (Própria planilha preenchida).</Typography>


      <Typography>V% ideal {calcIdealVPercent(propriedade)}</Typography>
      <Typography>
        V% após correções {calcVPercentAposCorrecoes(analise, fosforo, potassio, calcio_magnesio)}
      </Typography>

    </div>
  );
};

export default connect(state => ({
  propriedade: state.propriedade,
  analise: state.analise,
  fosforo: state.fosforo,
  potassio: state.potassio,
  calcio_magnesio: state.calcio_magnesio
}))(ResultadoStep);
