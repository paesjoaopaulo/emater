export const calcFosforoCorretivoAplicar = (analise, fosforo) => {
  let numero_corretivo = fosforo.fonte_fosforo.const_fator;
  let qtd_aplicar = (((fosforo.teor_desejado - analise.atualmente_fosforo) * 2) * 2.29) * 100 / fosforo.eficiencia_fonte_fosforo / 100 * 100 / numero_corretivo;
  return qtd_aplicar * 100;
};

export const calcFosforoCorretivoCustoHA = (analise, fosforo) => {
  let custo_heactare = calcFosforoCorretivoAplicar(analise, fosforo) * 2.42 * fosforo.custo_fonte_fosforo / 1000 / 2.42;
  return custo_heactare * 100;
};

export const calcAtualmenteVPercent = (analise) => {
  let potassio = analise.atualmente_potassio;
  let calcio = analise.atualmente_calcio;
  let magnesio = analise.atualmente_magnesio;
  let h_al = analise.atualmente_hidrogenio_aluminio;
  let bases = parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
  return (100 * (bases / (bases + parseFloat(h_al)))).toFixed(2);
};

export const calcAtualmenteCTCcmol = (analise) => {
  let potassio = analise.atualmente_potassio;
  let calcio = analise.atualmente_calcio;
  let magnesio = analise.atualmente_magnesio;
  let h_al = analise.atualmente_hidrogenio_aluminio;
  let bases = parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
  let ctcmol = parseFloat(bases) + parseFloat(h_al);
  return ctcmol;
};

export const calcAtualmenteScmol = (analise) => {
  let potassio = analise.atualmente_potassio;
  let calcio = analise.atualmente_calcio;
  let magnesio = analise.atualmente_magnesio;
  let bases = parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
  return bases;
};

export const calcAtualmenteMO = (mo) => {
  let retorno = 0;
  if (mo.unidade === 'PERCENT') {
    retorno = parseFloat(mo.materia_organica);
  } else if (mo.unidade === 'GDM') {
    retorno = parseFloat(mo.materia_organica / 10);
  } else if (mo.unidade === 'C') {
    retorno = parseFloat(mo.materia_organica * 1.72 / 10);
  }
  return retorno.toFixed(2);
};


export const calcFosforoAdicaoS = (analise, fosforo) => {
  return calcFosforoCorretivoAplicar(analise, fosforo) * fosforo.fonte_fosforo.const_enxofre;
};
export const calcFosforoAdicaoCa = (analise, fosforo) => {
  return calcFosforoCorretivoAplicar(analise, fosforo) * fosforo.fonte_fosforo.const_calcio;
};
export const calcFosforoAdicaoN = (analise, fosforo) => {
  return calcFosforoCorretivoAplicar(analise, fosforo) * fosforo.fonte_fosforo.const_nitrogenio;
};
export const calcFosforoAdicaoMa = (analise, fosforo) => {
  return calcFosforoCorretivoAplicar(analise, fosforo) * fosforo.fonte_fosforo.const_magnesio;
};
