import React from 'react';
import { TextField, MenuItem, InputAdornment, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  calcParticipacaoIdealPotassio,
  calcParticipacaoPotassioApos,
  calcParticipacaoPotassioAtualmente, calcQuantidadePotassioAplicar, calcValorHAAplicacaoPotassio
} from '../../../helpers';
import Typography from '@material-ui/core/Typography';
import { sortByNameAsc } from '../../../helpers/arrayHandler';

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

const PotassioStep = ({ fontes, potassio, propriedade, analise, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_K',
      value: { [e.target.name]: e.target.value }
    });
  }

  return (
    <>
      <TextField
        className={classes.textField}
        id="teor_desejado"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>
        }}
        label="Teor desejado"
        margin="normal"
        name="teor_desejado"
        onChange={handleInputChange}
        required
        type="number"
        value={potassio.teor_desejado}
      />
      <TextField
        className={classes.textField}
        id="fonte_potassio"
        label="Fonte de potássio"
        margin="normal"
        name="fonte_potassio"
        onChange={handleInputChange}
        required
        select
        value={potassio.fonte_potassio}
      >
        {
          fontes
            .filter((fonte) => {
              return fonte.steps.includes(2);
            })
            .sort(sortByNameAsc)
            .map((fonte, key) => {
              return (
                <MenuItem
                  key={key}
                  value={fonte}
                >
                  {
                    fonte.name
                  }
                </MenuItem>
              );
            })
        }
      </TextField>
      <TextField
        className={classes.textField}
        id="custo_fonte_potassio"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>
        }}
        label="Custo"
        margin="normal"
        name="custo_fonte_potassio"
        onChange={handleInputChange}
        required
        type="number"
        value={potassio.custo_fonte_potassio}
      />

      <Typography>Participação do Potássio atualmente: {calcParticipacaoPotassioAtualmente(analise)}</Typography>
      <Typography>Participação ideal do Potássio: {calcParticipacaoIdealPotassio(propriedade)}</Typography>
      <Typography>Participação do Potássio após as correções: {calcParticipacaoPotassioApos(potassio)}</Typography>

      <Typography>Quantidade de fonte de corretivo a ser aplicada: {calcQuantidadePotassioAplicar(analise, potassio)}</Typography>
      <Typography>Custo da aplicação R$ {calcValorHAAplicacaoPotassio(analise, potassio)}/ha</Typography>
    </>
  );
};

export default connect(state => ({
  potassio: state.potassio,
  fontes: state.fontes,
  analise: state.analise,
  propriedade: state.propriedade
}))(PotassioStep);
