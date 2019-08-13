import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4)
    },
    button: {
        marginRight: theme.spacing(1)
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function updateField(field, value) {
    return {
        type: 'UPDATE_FIELD',
        field,
        value
    }
}

const AnaliseStep = ({ tudo, dispatch }) => {
    const classes = useStyles();

    const handleChange = name => event => {
        updateField(name, event.target.value);
    };

    return (
        <div className={classes.root}>
            <TextField
                id="atualmente_fosforo"
                label="P"
                helperText="Fósforo"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_fosforo}
                //onChange={dispatch(handleChange('atualmente_fosforo'))}
                margin="normal"
            />
            <TextField
                id="atualmente_potassio"
                label="K"
                helperText="Potássio"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_potassio}
                //onChange={dispatch(handleChange('atualmente_potassio'))}
                margin="normal"
            />
            <TextField
                id="atualmente_calcio"
                label="Ca"
                helperText="Cálcio"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_calcio}
                //onChange={dispatch(handleChange('atualmente_calcio'))}
                margin="normal"
            />
            <TextField
                id="atualmente_magnesio"
                label="Mg"
                helperText="Magnésio"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_magnesio}
                //onChange={dispatch(handleChange('atualmente_magnesio'))}
                margin="normal"
            />
            <TextField
                id="atualmente_enxofre"
                label="S"
                helperText="Enxofre"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_enxofre}
                //onChange={dispatch(handleChange('atualmente_enxofre'))}
                margin="normal"
            />
            <TextField
                id="atualmente_aluminio"
                label="Al"
                helperText="Alumínio"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_aluminio}
                //onChange={dispatch(handleChange('atualmente_aluminio'))}
                margin="normal"
            />
            <TextField
                id="atualmente_hidrogenio_aluminio"
                label="H + Al"
                helperText="Hidrogênio e Alumínio"
                className={classes.textField}
                //value={tudo.propriedade.atualmente_hidrogenio_aluminio}
                //onChange={dispatch(handleChange('atualmente_hidrogenio_aluminio'))}
                margin="normal"
            />
        </div>
    );
}

export default connect(state => ({ tudo: state }))(AnaliseStep);