import React from 'react';
import { TextField, makeStyles, InputAdornment, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { sortByNameAsc } from '../../../helpers/arrayHandler';
import {
  calcParticipacaoCalcioAposCorrecoes,
  calcParticipacaoCalcioAtualmente,
  calcParticipacaoIdealCalcio,
  calcParticipacaoIdealMagnesio, calcParticipacaoMagnesioAposCorrecoes,
  calcParticipacaoMagnesioAtualmente,
  calcQuantidadeCalcioAplicar
} from '../../../helpers';
import Typography from '@material-ui/core/Typography';

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

const CalcioMagnesioStep = ({ fontes, calcio_magnesio, propriedade, analise, fosforo, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_CMg',
      value: { [e.target.name]: e.target.value }
    });
  }

  return (
    <>
      <TextField
        className={classes.textField}
        id="fonte_calcio_magnesio"
        label="Fonte de Cálcio"
        margin="normal"
        name="fonte_calcio_magnesio"
        onChange={handleInputChange}
        required
        select
        value={calcio_magnesio.fonte_calcio_magnesio}
        fullWidth={true}
      >
        {
          fontes
            .filter((fonte) => {
              return fonte.steps.includes(3);
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
        id="teor_desejado"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>
        }}
        label="Teor desejado"
        margin="normal"
        type="number"
        name="teor_desejado"
        onChange={handleInputChange}
        value={calcio_magnesio.teor_desejado}
      />
      <TextField
        className={classes.textField}
        id="prnt"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>
        }}
        label="PRNT"
        margin="normal"
        type="number"
        name="prnt"
        onChange={handleInputChange}
        value={calcio_magnesio.prnt}
      />
      <TextField
        className={classes.textField}
        id="teor_cao"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>
        }}
        label="Teor de CaO"
        margin="normal"
        type="number"
        name="teor_cao"
        onChange={handleInputChange}
        value={calcio_magnesio.teor_cao}
      />
      <TextField
        className={classes.textField}
        id="custo_fonte_calcio_magnesio"
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: <InputAdornment position="end">/tonelada</InputAdornment>
        }}
        label="Custo"
        margin="normal"
        name="custo_fonte_calcio_magnesio"
        onChange={handleInputChange}
        required
        type="number"
        value={calcio_magnesio.custo_fonte_calcio_magnesio}
      />

      <Typography>Participação do cálcio atualmente {calcParticipacaoCalcioAtualmente(analise)}</Typography>
      <Typography>Participação ideal do cálcio {calcParticipacaoIdealCalcio(analise, propriedade)}</Typography>
      <Typography>Participação do cálcio após as correções {calcParticipacaoCalcioAposCorrecoes(analise, fosforo, calcio_magnesio)}</Typography>
      <Typography>Quantidade de corretivo a ser aplicada {calcQuantidadeCalcioAplicar(analise, fosforo, calcio_magnesio)}</Typography>

      <Typography>Participação do magnésio atualmente {calcParticipacaoMagnesioAtualmente(analise)}</Typography>
      <Typography>Participação ideal de magnésio {calcParticipacaoIdealMagnesio(propriedade)}</Typography>
      <Typography>Participação de magnésio após as correções {calcParticipacaoMagnesioAposCorrecoes(propriedade)}</Typography>

    </>
  );
};

export default connect(state => ({
  calcio_magnesio: state.calcio_magnesio,
  fontes: state.fontes,
  analise: state.analise,
  fosforo: state.fosforo,
  propriedade: state.propriedade
}))(CalcioMagnesioStep);
