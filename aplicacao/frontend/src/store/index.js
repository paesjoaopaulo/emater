import { createStore } from 'redux';

const INITIAL_STATE = {
  texturas: [
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
  ],
  tipos_plantio: [
    {
      id: 0,
      name: 'Direto',
    },
    {
      id: 1,
      name: 'Convencional',
    }
  ],
  cities: [
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
  ],
  propriedade: {
    nome_do_proprietario: '',
    municipio: '',
    lote: '',
    area_total: 0,
    talhao: '',
    area_do_talhao: 0,
    matricula_do_lote: '',
    textura_do_solo: '',
    sistema_de_cultivo: '',
    nome_do_responsavel_tecnico: '',
    profundidade_da_amostra: '',
  },
  analise: {
    numero_do_resultado_da_analise_do_solo: '',
    atualmente_fosforo: '',
    atualmente_potassio: '',
    atualmente_calcio: '',
    atualmente_magnesio: '',
    atualmente_enxofre: '',
    atualmente_aluminio: '',
    atualmente_hidrogenio_aluminio: '',
    materia_organica: ''
  },
  fosforo: {
    teor_desejado: '',
    fonte: '',
    eficiencia: '',
    custo_tonelada: ''
  },
  potassio: {
    teor_desejado: '',
    fonte: '',
    custo_tonelada: ''
  },
  calcio_magnesio: {
    teor_desejado: '',
    fonte: '',
    prnt: '',
    teor_cao: '',
    custo_tonelada: ''
  },
};

function reducer(state = INITIAL_STATE) {
  return state;
}

const store = createStore(reducer);

export default store;