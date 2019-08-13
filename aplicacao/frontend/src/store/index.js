import { createStore } from 'redux';

const INITIAL_STATE = {
  activeStep: null,
  steps: [],
  propriedade: {
    nome_do_proprietario: '',
    municipio: '',
    lote: '',
    area_total: '',
    talhao: '',
    area_do_talhao: '',
    matricula_do_lote: '',
    textura_do_solo: '',
    sistema_de_cultivo: '',
    nome_do_responsavel_tecnico: '',
    profundidade_da_amostra: '',
    numero_do_resultado_da_analise_do_solo: ''
  },
  analise: {
    atualmente_fosforo: '',
    atualmente_potassio: '',
    atualmente_calcio: '',
    atualmente_magnesio: '',
    atualmente_enxofre: '',
    atualmente_aluminio: '',
    atualmente_hidrogenio_aluminio: ''
  }
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'UPDATE_FIELD') {
    console.log('nknsknskn')
  }
  return {}
}

const store = createStore(reducer);

export default store;