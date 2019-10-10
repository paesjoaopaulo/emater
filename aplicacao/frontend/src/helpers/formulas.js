export const calcFosforoCorretivoAplicar = (analise, fosforo) => {
  let numero_corretivo = fosforo.fonte_fosforo.const_fator;
  let fosforo_desejado = fosforo.teor_desejado;
  let fosforo_atualmente = analise.atualmente_fosforo;
  let fosforo_eficiencia = fosforo.eficiencia_fonte_fosforo;
  let valor = (((fosforo_desejado - fosforo_atualmente) * 2.00) * 2.29) * 100.00 / fosforo_eficiencia / 100.00 * 100.00 / numero_corretivo;
  return valor ? valor.toFixed(2) : 0;
};

export const calcFosforoCorretivoCustoHA = (analise, fosforo) => {
  let valor = calcFosforoCorretivoAplicar(analise, fosforo) * 2.42 * fosforo.custo_fonte_fosforo / 1000 / 2.42;
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcAtualmenteVPercent = (analise) => {
  let potassio = analise.atualmente_potassio;
  let calcio = analise.atualmente_calcio;
  let magnesio = analise.atualmente_magnesio;
  let h_al = analise.atualmente_hidrogenio_aluminio;
  let bases = parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
  let valor = 100 * (bases / (bases + parseFloat(h_al)));
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcAtualmenteCTCcmol = (analise) => {
  let potassio = analise.atualmente_potassio;
  let calcio = analise.atualmente_calcio;
  let magnesio = analise.atualmente_magnesio;
  let h_al = analise.atualmente_hidrogenio_aluminio;
  let bases = parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
  let valor = parseFloat(bases) + parseFloat(h_al);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcAtualmenteScmol = (analise) => {
  let potassio = analise.atualmente_potassio;
  let calcio = analise.atualmente_calcio;
  let magnesio = analise.atualmente_magnesio;
  let valor = parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcAtualmenteMO = (mo) => {
  let valor = 0;
  if (mo.unidade === 'PERCENT') {
    valor = parseFloat(mo.materia_organica);
  } else if (mo.unidade === 'GDM') {
    valor = parseFloat(mo.materia_organica / 10);
  } else if (mo.unidade === 'C') {
    valor = parseFloat(mo.materia_organica * 1.72 / 10);
  }
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};


export const calcFosforoAdicaoS = (analise, fosforo) => {
  let valor = calcFosforoCorretivoAplicar(analise, fosforo) * parseFloat(fosforo.fonte_fosforo.const_enxofre);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};
export const calcFosforoAdicaoCa = (analise, fosforo) => {
  let valor = calcFosforoCorretivoAplicar(analise, fosforo) * parseFloat(fosforo.fonte_fosforo.const_calcio);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};
export const calcFosforoAdicaoN = (analise, fosforo) => {
  let valor = calcFosforoCorretivoAplicar(analise, fosforo) * parseFloat(fosforo.fonte_fosforo.const_nitrogenio);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};
export const calcFosforoAdicaoMa = (analise, fosforo) => {
  let valor = calcFosforoCorretivoAplicar(analise, fosforo) * parseFloat(fosforo.fonte_fosforo.const_magnesio);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};


export const calcParticipacaoPotassioAtualmente = (analise) => {
  let valor = analise.atualmente_potassio / (analise.atualmente_potassio + analise.atualmente_calcio + analise.atualmente_magnesio + analise.atualmente_hidrogenio_aluminio) * 100;
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcParticipacaoIdealPotassio = (propriedade) => {
  let valor = propriedade.textura_do_solo === 'ARGILOSO' ? 3 : 3;
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcParticipacaoPotassioApos = (potassio) => {
  let valor = potassio.teor_desejado;
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};
