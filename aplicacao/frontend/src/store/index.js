import { createStore } from 'redux';

const INITIAL_STATE = {
  activeStep: null,
  steps: [],
  municipios: [],
  sistemas_cultivo: [],
  fontes_corretivo: [],
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

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'UPDATE_FIELD') {}
  return {}
}

const store = createStore(reducer);

export default store;