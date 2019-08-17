import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { PropriedadeStep, AnaliseStep, FosforoStep, PotassioStep, ResultadoStep } from './steps';

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
  }
}));

const steps = [
  {
    title: 'Dados da Propriedade',
    completed: false,
    component: <PropriedadeStep />
  },
  {
    title: 'Dados da Análise do Solo',
    completed: false,
    component: <AnaliseStep />
  },
  {
    title: 'Correção do Fósforo',
    completed: false,
    component: <FosforoStep />
  },
  {
    title: 'Correção do Potássio',
    completed: false,
    component: <PotassioStep />
  },
  {
    title: 'Finalizar',
    completed: false,
    component: <ResultadoStep />
  },
];

export default function CalculoCreate() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
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
              <Typography>{step.component}</Typography>
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
