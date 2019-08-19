import React from 'react';
import { TextField, MenuItem, InputAdornment } from '@material-ui/core';
import { connect } from 'react-redux';

function handleInputChange(name, teste) {
  return {
    type: 'HANDLE_CALCULO_INPUT_CHANGE',
    input: {
      name,
      //value: this.value
    }
  }
}

const PropriedadeStep = ({ cities, tipos_plantio, texturas, propriedade, dispatch }) => {

  return (
    <>
      <TextField
        id="nome_do_proprietario"
        label="Nome do Proprietário"
        margin="normal"
        name="nome_do_proprietario"
        onChange={() => dispatch(handleInputChange('propriedade.nome_do_proprietario', this.value))}
        value={propriedade.nome_do_proprietario}
      />

      <TextField
        id="municipio"
        label="Município"
        margin="normal"
        name="municipio"
        onChange={() => dispatch(handleInputChange('propriedade.municipio', this.value))}
        select
        value={propriedade.municipio}
        value={0}
      >
        {
          cities.map((city, key) => {
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
        id="lote"
        label="Lote"
        margin="normal"
        name="lote"
        onChange={() => dispatch(handleInputChange('propriedade.lote', this.value))}
        value={propriedade.lote}
      />

      <TextField
        id="area_total"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
        }}
        label="Área Total"
        margin="normal"
        name="area_total"
        onChange={() => dispatch(handleInputChange('propriedade.area_total', this.value))}
        prefix="R$"
        type="number"
        value={propriedade.area_total}
      />

      <TextField
        id="talhao"
        label="Talhão"
        margin="normal"
        name="talhao"
        onChange={() => dispatch(handleInputChange('propriedade.talhao', this.value))}
        value={propriedade.talhao}
      />

      <TextField
        id="area_do_talhao"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
        }}
        label="Área do Talhão"
        margin="normal"
        name="area_do_talhao"
        onChange={() => dispatch(handleInputChange('propriedade.area_do_talhao', this.value))}
        value={propriedade.area_do_talhao}
      />

      <TextField
        id="matricula_do_lote"
        label="Matrícula do Lote"
        margin="normal"
        name="matricula_do_lote"
        onChange={() => dispatch(handleInputChange('propriedade.matricula_do_lote', this.value))}
        value={propriedade.matricula_do_lote}
      />

      <TextField
        id="textura_do_solo"
        label="Textura do Solo"
        margin="normal"
        name="textura_do_solo"
        onChange={() => dispatch(handleInputChange('propriedade.textura_do_solo', this.value))}
        select
        value={propriedade.textura_do_solo}
        value={0}
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
        id="sistema_de_cultivo"
        label="Sistema de Cultivo"
        margin="normal"
        name="sistema_de_cultivo"
        onChange={() => dispatch(handleInputChange('propriedade.sistema_de_cultivo', this.value))}
        select
        value={propriedade.sistema_de_cultivo}
        value={0}
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
        id="nome_do_responsavel_tecnico"
        label="Responsável Técnico"
        margin="normal"
        name="nome_do_responsavel_tecnico"
        onChange={() => dispatch(handleInputChange('propriedade.nome_do_responsavel_tecnico', this.value))}
        value={propriedade.nome_do_responsavel_tecnico}
      />

      <TextField
        id="profundidade_da_amostra"
        label="Profundidade da Amostra"
        margin="normal"
        name="profundidade_da_amostra"
        onChange={() => dispatch(handleInputChange('propriedade.profundidade_da_amostra', this.value))}
        value={propriedade.profundidade_da_amostra}
      />

      <TextField
        id="numero_do_resultado_da_analise_do_solo"
        label="Nº da Análise do Solo"
        margin="normal"
        name="numero_do_resultado_da_analise_do_solo"
        onChange={() => dispatch(handleInputChange('propriedade.numero_do_resultado_da_analise_do_solo', this.value))}
        value={propriedade.numero_do_resultado_da_analise_do_solo}
      />
    </>
  );
}

export default connect(state => (
  {
    cities: state.cities,
    texturas: state.texturas,
    tipos_plantio: state.tipos_plantio,
    propriedade: state.propriedade
  }
))(PropriedadeStep);
