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
  fontes: [
    {
      id: 0,
      name: 'Superfosfato Simples',
      eficiencia: 70
    },
    {
      id: 1,
      name: 'Superfosfato Triplo',
      eficiencia: 70
    },
    {
      id: 2,
      name: 'MAP',
      eficiencia: 70
    },
    {
      id: 3,
      name: 'DAP',
      eficiencia: 70
    },
    {
      id: 4,
      name: 'Yoorin',
      eficiencia: 70
    },
    {
      id: 5,
      name: 'Fosfato  Arad',
      eficiencia: 70
    },
    {
      id: 6,
      name: 'Fosfato  Gafsa',
      eficiencia: 70
    },
    {
      id: 7,
      name: 'Fosfato  Daoui',
      eficiencia: 70
    },
    {
      id: 8,
      name: 'Fosf.  Patos Minas',
      eficiencia: 70
    },
    {
      id: 9,
      name: 'Escória de Thomas',
      eficiencia: 70
    },
    {
      id: 10,
      name: 'Ácido Fosfórico',
      eficiencia: 70
    },
    {
      id: 11,
      name: 'Multif. Magnesiano',
      eficiencia: 70
    },
    {
      id: 30,
      name: 'Cloreto de Potássio'
    },
    {
      id: 31,
      name: 'Sulfato de Potássio'
    },
    {
      id: 32,
      name: 'Sulf.Potássio/Mag.'
    },
  ],
  unidades: [
    {
      id: 0,
      name: 'Carbono',
    },
    {
      id: 1,
      name: '%',
    },
    {
      id: 2,
      name: 'g/dm³',
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
  cidades: [
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
  mo: {
    materia_organica: '',
    unidade: ''
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


function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'PREENCHER_PROPRIEDADE') {
    state.propriedade = { ...state.propriedade, ...action.value }
    return { ...state }
  }
  if (action.type === 'PREENCHER_ANALISE') {
    state.analise = { ...state.analise, ...action.value }
    return { ...state }
  }
  if (action.type === 'PREENCHER_MO') {
    state.mo = { ...state.mo, ...action.value }
    return { ...state }
  }
  if (action.type === 'PREENCHER_P') {
    state.fosforo = { ...state.fosforo, ...action.value }
    return { ...state }
  }
  if (action.type === 'PREENCHER_K') {
    state.potassio = { ...state.potassio, ...action.value }
    return { ...state }
  }
  if (action.type === 'PREENCHER_CMg') {
    state.calcio_magnesio = { ...state.calcio_magnesio, ...action.value }
    return { ...state }
  }
  return state;
}

const store = createStore(reducer);

export default store;