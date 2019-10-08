import { createStore } from 'redux';

import {
  analise,
  calcio_magnesio,
  cidades,
  fontes,
  fosforo,
  mo,
  potassio,
  propriedade,
  texturas,
  tipos_plantio,
  unidades
} from './mock';

const INITIAL_STATE = {
  propriedade,
  texturas,
  fontes,
  unidades,
  tipos_plantio,
  cidades,
  analise,
  mo,
  fosforo,
  potassio,
  calcio_magnesio
};


function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'PREENCHER_PROPRIEDADE') {
    state.propriedade = { ...state.propriedade, ...action.value };
  }
  if (action.type === 'PREENCHER_ANALISE') {
    state.analise = { ...state.analise, ...action.value };
  }
  if (action.type === 'PREENCHER_MO') {
    state.mo = { ...state.mo, ...action.value };
  }
  if (action.type === 'PREENCHER_P') {
    state.fosforo = { ...state.fosforo, ...action.value };
  }
  if (action.type === 'PREENCHER_K') {
    state.potassio = { ...state.potassio, ...action.value };
  }
  if (action.type === 'PREENCHER_CMg') {
    state.calcio_magnesio = { ...state.calcio_magnesio, ...action.value };
  }
  if (action.type === 'CHANGE_TEXTURE') {
    state.analise = { ...state.analise, ...action.value };
  }

  return { ...state };
}

const store = createStore(reducer);

export default store;
