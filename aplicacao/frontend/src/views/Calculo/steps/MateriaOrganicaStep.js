import React from 'react';
import { TextField, MenuItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { calcAtualmenteMO } from '../../../helpers/formulas';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const MateriaOrganicaStep = ({ mo, unidades, dispatch }) => {

  const classes = useStyles();

  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_MO',
      value: { [e.target.name]: e.target.value }
    });
  }

  return (
    <>
      <TextField
        className={classes.textField}
        error={mo.ideal_min > mo.materia_organica || mo.materia_organica > mo.ideal_max}
        helperText={`IDEAL (entre ${mo.ideal_min}% e ${mo.ideal_max}%)`}
        id="materia_organica"
        label="M.O."
        margin="normal"
        name="materia_organica"
        onChange={handleInputChange}
        required
        type="number"
        value={mo.materia_organica}
      />
      <TextField
        className={classes.textField}
        id="unidade"
        label="Unidade"
        margin="normal"
        name="unidade"
        onChange={handleInputChange}
        required
        select
        value={mo.unidade}
      >
        {
          unidades.map((unidade, key) => {
            return (
              <MenuItem
                key={key}
                value={unidade.constant}
              >
                {
                  unidade.name
                }
              </MenuItem>
            );
          })
        }
      </TextField>

      {/*Aplicar classe de cores dependendo da faixa que ficou a taxa de MO..*/}
      <Typography>M.O. {calcAtualmenteMO(mo)}%</Typography>

    </>
  );
};

export default connect(state => ({ mo: state.mo, unidades: state.unidades }))(MateriaOrganicaStep);
