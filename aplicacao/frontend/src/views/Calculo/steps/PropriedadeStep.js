import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


/*function updateField(field, value) {
    return {
        type: 'UPDATE_FIELD',
        field,
        value
    }
}*/

const PropriedadeStep = ({ tudo, dispatch }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography
        gutterBottom
        variant="h2"
      >
                Dados da Propriedade
      </Typography>

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="nome_do_proprietario"
        label="Nome do Proprietário"
        //value={tudo.propriedade.nome_do_proprietario}
        //onChange={dispatch(updateField('nome_do_proprietario'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="municipio"
        label="Nome do Município"
        //value={tudo.propriedade.municipio}
        //onChange={dispatch(updateField('municipio'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="lote"
        label="Lote"
        //value={tudo.propriedade.lote}
        //onChange={dispatch(updateField('lote'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="area_total"
        label="Área Total"
        //value={tudo.propriedade.area_total}
        //onChange={dispatch(updateField('area_total'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="talhao"
        label="Talhão"
        //value={tudo.propriedade.talhao}
        //onChange={dispatch(updateField('talhao'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="area_do_talhao"
        label="Área do Talhão"
        //value={tudo.propriedade.area_do_talhao}
        //onChange={dispatch(updateField('area_do_talhao'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="matricula_do_lote"
        label="Matrícula do Lote"
        //value={tudo.propriedade.matricula_do_lote}
        //onChange={dispatch(updateField('matricula_do_lote'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="textura_do_solo"
        label="Textura do Solo"
        //value={tudo.propriedade.textura_do_solo}
        //onChange={dispatch(updateField('textura_do_solo'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="sistema_de_cultivo"
        label="Sistema de Cultivo"
        //value={tudo.propriedade.sistema_de_cultivo}
        //onChange={dispatch(updateField('sistema_de_cultivo'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="nome_do_responsavel_tecnico"
        label="Responsável Técnico"
        //value={tudo.propriedade.nome_do_responsavel_tecnico}
        //onChange={dispatch(updateField('nome_do_responsavel_tecnico'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="profundidade_da_amostra"
        label="Profundidade da Amostra"
        //value={tudo.propriedade.profundidade_da_amostra}
        //onChange={dispatch(updateField('profundidade_da_amostra'))}
        margin="normal"
      />

      <TextField
        className={classes.textField}
        helperText="knsknslnskl"
        id="numero_do_resultado_da_analise_do_solo"
        label="Nº da Análise do Solo"
        //value={tudo.propriedade.numero_do_resultado_da_analise_do_solo}
        //onChange={dispatch(updateField('numero_do_resultado_da_analise_do_solo'))}
        margin="normal"
      />

    </div>
  );
}

export default connect(state => ({ tudo: state }))(PropriedadeStep);
