import React from 'react';
import { TextField, MenuItem, InputAdornment, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
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


const PropriedadeStep = ({ cidades, tipos_plantio, texturas, propriedade, dispatch }) => {
  const classes = useStyles();

  function handleInputChange(e) {
    if (e.target.name === 'textura_do_solo') {
      let ideais = null;
      if (e.target.value === 'ARGILOSO') {
        ideais = {
          fosforo: 9,
          potassio: 0.35,
          calcio: 6,
          magnesio: 1.5,
          enxofre: 9,
          aluminio: 0,
          h_al: 0
        };
      } else {
        ideais = {
          fosforo: 12,
          potassio: 0.25,
          calcio: 4,
          magnesio: 1,
          enxofre: 6,
          aluminio: 0,
          h_al: 0
        };
      }
      dispatch(
        {
          type: 'CHANGE_TEXTURE',
          value: { ideais }
        });
    }
    dispatch(
      {
        type: 'PREENCHER_PROPRIEDADE',
        value: { [e.target.name]: e.target.value }
      }
    );

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
        required
        value={propriedade.nome_do_proprietario}
      />

      <TextField
        className={classes.textField}
        id="municipio"
        label="Município"
        margin="normal"
        name="municipio"
        onChange={handleInputChange}
        required
        select
        value={propriedade.municipio}
      >
        {
          cidades
            .sort(sortByNameAsc)
            .map((city, key) => {
              return (
                <MenuItem
                  key={key}
                  value={city}
                >
                  {city}
                </MenuItem>
              );
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
          inputProps: { min: 0 }
        }}
        label="Área Total"
        margin="normal"
        name="area_total"
        onChange={handleInputChange}
        prefix="R$"
        required
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
        required
        value={propriedade.talhao}
      />

      <TextField
        className={classes.textField}
        id="area_do_talhao"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
          inputProps: { min: 0 }
        }}
        label="Área do Talhão"
        margin="normal"
        name="area_do_talhao"
        onChange={handleInputChange}
        required
        type="number"
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
        required
        select
        value={propriedade.textura_do_solo}
      >
        {
          texturas.map((textura, key) => {
            return (
              <MenuItem
                key={key}
                value={textura.value}
              >
                {textura.name}
              </MenuItem>
            );
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
        required
        select
        value={propriedade.sistema_de_cultivo}
      >
        {
          tipos_plantio.map((tipo, key) => {
            return (
              <MenuItem
                key={key}
                value={tipo.value}
              >
                {tipo.name}
              </MenuItem>
            );
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
        required
        value={propriedade.nome_do_responsavel_tecnico}
      />

      <TextField
        className={classes.textField}
        id="profundidade_da_amostra"
        InputProps={{
          endAdornment: <InputAdornment position="end">cm</InputAdornment>,
          inputProps: { min: 0 }
        }}
        label="Profundidade da Amostra"
        margin="normal"
        name="profundidade_da_amostra"
        onChange={handleInputChange}
        required
        type="number"
        value={propriedade.profundidade_da_amostra}
      />

      <TextField
        className={classes.textField}
        id="numero_do_resultado_da_analise_do_solo"
        label="Nº da Análise do Solo"
        margin="normal"
        name="numero_do_resultado_da_analise_do_solo"
        onChange={handleInputChange}
        required
        value={propriedade.numero_do_resultado_da_analise_do_solo}
      />
    </>
  );
};

export default connect(state => (
  {
    cidades: state.cidades,
    texturas: state.texturas,
    tipos_plantio: state.tipos_plantio,
    propriedade: state.propriedade
  }
))(PropriedadeStep);
