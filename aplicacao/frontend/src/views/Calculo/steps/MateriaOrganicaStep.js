import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const MateriaOrganicaStep = ({mo, unidades, dispatch}) => {

  const classes = useStyles();
  
  function handleInputChange(e) {
    dispatch({
      type: 'PREENCHER_MO',
      value: { [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <TextField
        className={classes.textField}
        id="materia_organica"
        label="M.O."
        margin="normal"
        name="materia_organica"
        onChange={handleInputChange}
        value={mo.materia_organica}
      />
      <TextField
        className={classes.textField}
        id="unidade"
        label="Unidade"
        margin="normal"
        name="unidade"
        onChange={handleInputChange}
        select
        value={mo.unidade}
      >
        {
          unidades.map((unidade, key) => {
            return (
              <MenuItem
                key={key}
                value={unidade.id}
              >
                {
                  unidade.name
                }
              </MenuItem>
            )
          })
        }
      </TextField>
    </>
  );
}

export default connect(state => ({mo: state.mo, unidades: state.unidades}))(MateriaOrganicaStep);