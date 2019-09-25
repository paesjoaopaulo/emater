import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { PropriedadeStep, AnaliseStep, FosforoStep, PotassioStep, ResultadoStep, CalcioMagnesioStep } from './steps';
import MateriaOrganicaStep from './steps/MateriaOrganicaStep';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
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
  instructions: {
    marginTop: 15
  }
}));

const steps = [
  {
    title: 'Propriedade',
    description: "Dados da propriedade",
    completed: false,
    component: <PropriedadeStep />
  },
  {
    title: 'Análise do Solo',
    description: "Análise do solo",
    completed: false,
    component: <AnaliseStep useStyles={useStyles} />
  },
  {
    title: 'Matéria Orgânica',
    description: "Matéria orgânica presente no solo",
    completed: false,
    component: <MateriaOrganicaStep />
  },
  {
    title: 'Correção do Fósforo',
    description: "Teores de fósforo presentes no solo",
    completed: false,
    component: <FosforoStep />
  },
  {
    title: 'Correção do Potássio',
    description: "Teores de potássio contidos no solo",
    completed: false,
    component: <PotassioStep />
  },
  {
    title: 'Correção do Cálcio e Magnésio',
    description: "Teste de cálcio",
    completed: false,
    component: <CalcioMagnesioStep />
  },
  {
    title: 'Finalizar',
    description: "Dados obtidos por meio de cálculos",
    completed: false,
    component: <ResultadoStep />
  },
];

function CalculoCreate({ state, dispatch }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    apiCall();
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    apiCall();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function apiCall() {
    dispatch({
      type: 'API_CALL',
      value: state
    })
  }

  function handleReset() {
    setActiveStep(0);
  }

  function prevStepButton() {
    if (activeStep === 0) {
      return 'Inicio';
    } else {
      return steps[activeStep - 1].title;
    }
  }

  function nextStepButton() {
    if (activeStep === steps.length - 1) {
      return 'Fim';
    } else {
      return steps[activeStep + 1].title;
    }
  }

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step key={index}>

            <StepLabel>{step.title}</StepLabel>


            <StepContent timeout={1000}>
              <Typography className={classes.instructions}>
                {step.description}
              </Typography>
              {step.component}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    {prevStepButton()}
                  </Button>
                  <Button
                    className={classes.button}
                    color="primary"
                    disabled={activeStep === steps.length - 1}
                    onClick={handleNext}
                    variant="contained"
                  >
                    {nextStepButton()}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          className={classes.resetContainer}
          elevation={0}
          square
        >
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button
            className={classes.button}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default connect(
  state => ({ state })
)(CalculoCreate);