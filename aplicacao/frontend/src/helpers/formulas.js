export const calcFosforoCorretivoAplicar = (analise, fosforo) => {
  let numero_corretivo = fosforo.fonte_fosforo.const_fator;
  let fosforo_desejado = fosforo.teor_desejado;
  let fosforo_atualmente = analise.atualmente_fosforo;
  let fosforo_eficiencia = fosforo.eficiencia_fonte_fosforo;
  let valor = (((fosforo_desejado - fosforo_atualmente) * 2.00) * 2.29) * 100.00 / fosforo_eficiencia / 100.00 * 100.00 / numero_corretivo;
  return valor ? valor.toFixed(4) : 0;
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

export const calcIdealVPercent = (analise, propriedade) => {
  let valor = propriedade.textura_do_solo === 'ARGILOSO' ? '60 a 70' : '50';
  return valor;
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
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcParticipacaoIdealPotassio = (propriedade) => {
  let valor = propriedade.textura_do_solo === 'ARGILOSO' ? 3 : 3;
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcParticipacaoPotassioApos = (potassio) => {
  let valor = potassio.teor_desejado;
  return valor && !isNaN(valor) ? valor : 0;
};

export const calcQuantidadePotassioAplicar = (analise, potassio) => {
  let fator = potassio && potassio.fonte_potassio ? potassio.fonte_potassio.const_fator : 0;
  let valor = (((((((analise.atualmente_potassio * potassio.teor_desejado / calcParticipacaoPotassioAtualmente(analise) - analise.atualmente_potassio) * 39.1 * 10) * 2) * 1.2) * 100 / 0.85 / 100) * 100) / fator);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcValorHAAplicacaoPotassio = (analise, potassio) => {
  let fator = potassio && potassio.fonte_potassio ? potassio.fonte_potassio.const_fator : 0;
  if (fator > 0) {
    let valor = (potassio.custo_fonte_potassio * (((((((analise.atualmente_potassio * potassio.teor_desejado / calcParticipacaoPotassioAtualmente(analise)) - analise.atualmente_potassio) * 39.1 * 10) * 2) * 1.2) * 100 / 85 / 100) * 100 / fator * 2.42) / 1000) / 2.42;
    valor = valor * 100;
    return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
  } else {
    return 0.00.toFixed(2);
  }
};

export const calcPotassioForneceraEnxofre = (analise, potassio) => {
  let fator = potassio && potassio.fonte_potassio ? potassio.fonte_potassio.const_enxofre : 0;
  if (fator > 0) {
    let valor = fator * calcQuantidadePotassioAplicar(analise, potassio);
    return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
  } else {
    return 0.00.toFixed(2);
  }
};

export const calcPotassioForneceraMagnesio = (analise, potassio) => {
  let fator = potassio && potassio.fonte_potassio ? potassio.fonte_potassio.const_magnesio : 0;
  if (fator > 0) {
    let valor = fator * calcQuantidadePotassioAplicar(analise, potassio);
    return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
  } else {
    return 0.00.toFixed(2);
  }
};

export const calcParticipacaoCalcioAtualmente = (analise) => {
  let valor = analise.atualmente_calcio / (analise.atualmente_potassio + analise.atualmente_calcio + analise.atualmente_magnesio + analise.atualmente_hidrogenio_aluminio) * 100;
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcParticipacaoIdealCalcio = (analise, propriedade) => {
  let valor = propriedade.textura_do_solo === 'ARGILOSO' ? '45 a 55' : '35 a 40';
  return valor;
};

export const calcParticipacaoCalcioAposCorrecoes = (analise, fosforo, calcio_magnesio) => {
  let valor = 0.0;
  if (calcio_magnesio.fonte_calcio_magnesio) {
    valor = (analise.atualmente_calcio + ((((calcio_magnesio.fonte_calcio_magnesio.const_fator * 0.01783) + ((fosforo.fonte_fosforo.const_calcio / 2.42) * fosforo.fonte_fosforo.def_teor_cao / 1000)) * (((analise.atualmente_calcio * calcio_magnesio.teor_desejado / calcParticipacaoCalcioAtualmente(analise)) - analise.atualmente_calcio - ((fosforo.fonte_fosforo.const_calcio * calcFosforoCorretivoAplicar(analise, fosforo) / 2.42) * (fosforo.fonte_fosforo.def_teor_cao) / 1000)) / (((calcio_magnesio.fonte_calcio_magnesio.const_fator) * 0.01783) + ((fosforo.fonte_fosforo.const_calcio * calcFosforoCorretivoAplicar(analise, fosforo) / 2.42) * (fosforo.fonte_fosforo.def_teor_cao) / 1000)))) + ((fosforo.fonte_fosforo.const_calcio / 2.42) * fosforo.fonte_fosforo.def_teor_cao / 1000))) / calcAtualmenteCTCcmol(analise) * 100;
  }
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcQuantidadeCalcioAplicar = (analise, fosforo, calcio_magnesio) => {
  let valor = 0.0;
  if (calcio_magnesio.fonte_calcio_magnesio) {
    let I105 = (((calcFosforoCorretivoAplicar(analise, fosforo) * 2.42) * fosforo.fonte_fosforo.const_calcio) / 2.42) * fosforo.fonte_fosforo.def_teor_cao / 1000;
    let F96 = (analise.atualmente_calcio * calcio_magnesio.teor_desejado / calcParticipacaoCalcioAtualmente(analise)) - analise.atualmente_calcio - I105;
    let G109 = (calcio_magnesio.teor_cao * 0.01783);
    valor = (F96 / (G109 + I105)) * 100 / calcio_magnesio.prnt;
  }
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcCalcioForneceraEnxofre = (analise, fosforo, calcio_magnesio) => {
  let fonte = calcio_magnesio.fonte_calcio_magnesio;
  let valor;
  if (fonte && fonte.id !== '19') {
    valor = 0;
  } else {
    valor = calcQuantidadeCalcioAplicar(analise, fosforo, calcio_magnesio) * 150;
  }
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcCalcioEnxofreSuficiente = (analise, fosforo, calcio_magnesio) => {
  let fonte = calcio_magnesio.fonte_calcio_magnesio;
  let valor;
  if (fonte && fonte.id !== '19') {
    valor = 0;
  } else {
    valor = 80;
  }
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcValorHAAplicacaoCalcio = (analise, fosforo, calcio_magnesio) => {
  let valor = calcio_magnesio.custo_fonte_calcio_magnesio * calcQuantidadeCalcioAplicar(analise, fosforo, calcio_magnesio);
  return valor && !isNaN(valor) ? valor.toFixed(2) : 0;
};

export const calcParticipacaoMagnesioAtualmente = (analise) => {
  let valor = analise.atualmente_magnesio / (analise.atualmente_potassio + analise.atualmente_calcio + analise.atualmente_magnesio + analise.atualmente_hidrogenio_aluminio) * 100;
  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcParticipacaoIdealMagnesio = (propriedade) => {
  let valor = propriedade.textura_do_solo === 'ARGILOSO' ? '10 a 15' : '8 a 12';
  return valor;
};

export const calcParticipacaoMagnesioAposCorrecoes = (analise, fosforo, potassio, calcio_magnesio) => {
  let valor = 0.0;
  if (calcio_magnesio.fonte_calcio_magnesio) {
    let I105 = (((calcFosforoCorretivoAplicar(analise, fosforo) * 2.42) * fosforo.fonte_fosforo.const_calcio) / 2.42) * fosforo.fonte_fosforo.def_teor_cao / 1000;
    let F96 = (analise.atualmente_calcio * calcio_magnesio.teor_desejado / calcParticipacaoCalcioAtualmente(analise)) - analise.atualmente_calcio - I105;
    let G109 = (calcio_magnesio.teor_cao * 0.01783);
    valor = (analise.atualmente_magnesio + (calcio_magnesio.fonte_calcio_magnesio.percentual_mgo * 0.0248 * (F96 / G109)) + ((18 * 0.0248 * (((((((analise.atualmente_potassio * potassio.teor_desejado / calcParticipacaoPotassioAtualmente(analise)) - analise.atualmente_potassio) * 39.1 * 10) * 2) * 1.2) * 100 / (potassio.fonte_potassio.def_eficiencia) / 100) * 100 / potassio.fonte_potassio.const_fator) / 1000) * 0.6) + (0.0248 * potassio.fonte_potassio.percentual_mgo * 0.6)) / calcAtualmenteCTCcmol(analise) * 100;
  }

  return valor && !isNaN(valor) ? valor.toFixed(4) : 0;
};

export const calcVPercentAposCorrecoes = (analise, fosforo, potassio, calcio_magnesio) => {
  return calcParticipacaoPotassioApos(potassio) + calcParticipacaoMagnesioAposCorrecoes(analise, fosforo, potassio, calcio_magnesio) + calcParticipacaoCalcioAposCorrecoes(analise, fosforo, calcio_magnesio);
};
