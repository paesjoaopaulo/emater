import React from 'react';
import { TextField, MenuItem, InputAdornment } from '@material-ui/core';

const PropriedadeStep = () => {

  const texturas = [
    {
      id: 0,
      name: 'Argiloso',
      description: '< 35% de argila'
    },
    {
      id: 1,
      name: 'Textura média',
      description: '>= 35% de argila'
    }
  ];

  const tipos_plantio = [
    {
      id: 0,
      name: 'Direto',
    },
    {
      id: 1,
      name: 'Convencional',
    }
  ];

  const cities = [
    {
      id: 0,
      name: 'Palmital',
      region: 'SP'
    },
    {
      id: 1,
      name: 'Assis',
      region: 'SP'
    },
    {
      id: 2,
      name: 'Cornélio Procópio',
      region: 'PR'
    },
    {
      id: 3,
      name: 'Dois Vizinhos',
      region: 'PR'
    },
    {
      id: 4,
      name: 'Bandeirantes',
      region: 'PR'
    },
  ];

  return (
    <>
      <TextField
        id="nome_do_proprietario"
        label="Nome do Proprietário"
        margin="normal"
      />

      <TextField
        id="municipio"
        label="Município"
        margin="normal"
        select
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
      />

      <TextField
        id="area_total"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
        }}
        label="Área Total"
        margin="normal"
        prefix="R$"
      />

      <TextField
        id="talhao"
        label="Talhão"
        margin="normal"
      />

      <TextField
        id="area_do_talhao"
        InputProps={{
          endAdornment: <InputAdornment position="end">m²</InputAdornment>,
        }}
        label="Área do Talhão"
        margin="normal"
      />

      <TextField
        id="matricula_do_lote"
        label="Matrícula do Lote"
        margin="normal"
      />

      <TextField
        id="textura_do_solo"
        label="Textura do Solo"
        margin="normal"
        select
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
        select
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
      />

      <TextField
        id="profundidade_da_amostra"
        label="Profundidade da Amostra"
        margin="normal"
      />

      <TextField
        id="numero_do_resultado_da_analise_do_solo"
        label="Nº da Análise do Solo"
        margin="normal"
      />
    </>
  );

}

export default PropriedadeStep;
