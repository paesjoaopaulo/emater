import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepButton from '@material-ui/core/StepButton';

import { connect } from 'react-redux';

import { PropriedadeStep, AnaliseStep } from './steps';
import { StepContent, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    <PropriedadeStep />,
    <AnaliseStep />,
    'Fósforo',
    'Potássio',
    'Cálcio e Magnésio',
    'Finalizar'
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PropriedadeStep />;
    case 1:
      return <AnaliseStep />;
    case 2:
    default:
  }
}

const Calculo = ({ tudo }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 10;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error('You can\'t skip a step that isn\'t optional.');
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              completed={completed[index]}
              onClick={handleStep(index)}
            >
              {label}
            </StepButton>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    className={classes.button}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  <Button
                    className={classes.button}
                    color="primary"
                    onClick={handleNext}
                    variant="contained"
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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

export default connect(state => ({ tudo: state }))(Calculo);