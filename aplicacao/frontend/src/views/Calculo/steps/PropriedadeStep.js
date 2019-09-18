import React from 'react';
import { TextField, MenuItem, InputAdornment, makeStyles } from '@material-ui/core';
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


const PropriedadeStep = ({ cidades, tipos_plantio, texturas, propriedade, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_PROPRIEDADE',
      value: { [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <TextField
        className={classes.textField}
        id="nome_do_proprietario"
        label="Nome do Proprietário"
        margin="normal"
        name="nome_do_proprietario"
        onChange={handleInputChange}
        value={propriedade.nome_do_proprietario}
      />

      <TextField
        className={classes.textField}
        id="municipio"
        label="Município"
        margin="normal"
        name="municipio"
        onChange={handleInputChange}
        select
        value={propriedade.municipio}
      >
        {
          cidades.map((city, key) => {
            return (
              <MenuItem
                key={key}
                value={city.id}
              >
                {city.name}
              </MenuItem>
            )
          })
        }
      </TextField>

      <TextField
        className={classes.textField}
        id="lote"
        label="Lote"
        margin="normal"
        name="lote"
        onChange={handleInputChange}
        value={propriedade.lote}
      />

      <TextField
        className={classes.textField}
        id="area_total"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
        }}
        label="Área Total"
        margin="normal"
        name="area_total"
        onChange={handleInputChange}
        prefix="R$"
        type="number"
        value={propriedade.area_total}
      />

      <TextField
        className={classes.textField}
        id="talhao"
        label="Talhão"
        margin="normal"
        name="talhao"
        onChange={handleInputChange}
        value={propriedade.talhao}
      />

      <TextField
        className={classes.textField}
        id="area_do_talhao"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
        }}
        label="Área do Talhão"
        margin="normal"
        name="area_do_talhao"
        onChange={handleInputChange}
        value={propriedade.area_do_talhao}
      />

      <TextField
        className={classes.textField}
        id="matricula_do_lote"
        label="Matrícula do Lote"
        margin="normal"
        name="matricula_do_lote"
        onChange={handleInputChange}
        value={propriedade.matricula_do_lote}
      />

      <TextField
        className={classes.textField}
        id="textura_do_solo"
        label="Textura do Solo"
        margin="normal"
        name="textura_do_solo"
        onChange={handleInputChange}
        select
        value={propriedade.textura_do_solo}
      >
        {
          texturas.map((textura, key) => {
            return (
              <MenuItem
                key={key}
                value={textura.id}
              >
                {textura.name}
              </MenuItem>
            )
          })
        }
      </TextField>

      <TextField
        className={classes.textField}
        id="sistema_de_cultivo"
        label="Sistema de Cultivo"
        margin="normal"
        name="sistema_de_cultivo"
        onChange={handleInputChange}
        select
        value={propriedade.sistema_de_cultivo}
      >
        {
          tipos_plantio.map((tipo, key) => {
            return (
              <MenuItem
                key={key}
                value={tipo.id}
              >
                {tipo.name}
              </MenuItem>
            )
          })
        }
      </TextField>

      <TextField
        className={classes.textField}
        id="nome_do_responsavel_tecnico"
        label="Responsável Técnico"
        margin="normal"
        name="nome_do_responsavel_tecnico"
        onChange={handleInputChange}
        value={propriedade.nome_do_responsavel_tecnico}
      />

      <TextField
        className={classes.textField}
        id="profundidade_da_amostra"
        InputProps={{
          endAdornment: <InputAdornment position="end">cm</InputAdornment>,
        }}
        label="Profundidade da Amostra"
        margin="normal"
        name="profundidade_da_amostra"
        onChange={handleInputChange}
        value={propriedade.profundidade_da_amostra}
      />

      <TextField
        className={classes.textField}
        id="numero_do_resultado_da_analise_do_solo"
        label="Nº da Análise do Solo"
        margin="normal"
        name="numero_do_resultado_da_analise_do_solo"
        onChange={handleInputChange}
        value={propriedade.numero_do_resultado_da_analise_do_solo}
      />
    </>
  );
}

export default connect(state => (
  {
    cidades: state.cidades,
    texturas: state.texturas,
    tipos_plantio: state.tipos_plantio,
    propriedade: state.propriedade
  }
))(PropriedadeStep);
