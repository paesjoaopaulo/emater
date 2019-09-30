import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { PropriedadeStep, AnaliseStep, FosforoStep, PotassioStep, ResultadoStep, CalcioMagnesioStep } from './steps';
import MateriaOrganicaStep from './steps/MateriaOrganicaStep';
import { connect } from 'react-redux';


import MaterialUIForm from 'material-ui-form';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: '20px auto'
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
    marginTop: 10,
    marginLeft: 32
  },
  label: {
    textTransform: 'uppercase'
  },
  hide: {
    display: 'none'
  }
}));

const steps = [
  {
    id: 1,
    title: 'Propriedade',
    description: 'Neste passo você deverá preencher as informações de identificação da propriedade.',
    completed: false,
    component: <PropriedadeStep />,
    group: 'Propriedade'
  },
  {
    id: 2,
    title: 'Análise do Solo',
    description: 'Com base no laudo técnico do solo, preencha os campos abaixo com os teores de cada nutriente presentes atualmente no solo.',
    completed: false,
    component: <AnaliseStep useStyles={useStyles} />,
    group: 'Analise'
  },
  {
    id: 3,
    title: 'Matéria Orgânica',
    description: 'Informe o teor de materia orgânica presente no solo. Fique atento à unidade de medida informada.',
    completed: false,
    component: <MateriaOrganicaStep />,
    group: 'MateriaOrganica'
  },
  {
    id: 4,
    title: 'Correção do Fósforo',
    description: 'Nesta etapa você deverá informar os dados referentes à correção e equilíbrio do fósforo',
    completed: false,
    component: <FosforoStep />,
    group: 'Fosforo'
  },
  {
    id: 5,
    title: 'Correção do Potássio',
    description: 'Nesta etapa você deverá informar os dados referentes à correção e equilíbrio do potássio',
    completed: false,
    component: <PotassioStep />,
    group: 'Potassio'
  },
  {
    id: 6,
    title: 'Correção do Cálcio e Magnésio',
    description: 'Nesta etapa você deverá informar os dados referentes à correção e equilíbrio de cálcio e magnésio',
    completed: false,
    component: <CalcioMagnesioStep />,
    group: 'CalcioMagnesio'
  },
  {
    id: 7,
    title: 'Finalizar',
    description: 'O processo de cálculo foi realizado. Caso todos os campos estejam válidos, o cálculo será salvo na base de dados.',
    completed: false,
    component: <ResultadoStep />,
    group: 'Resultado'
  },
];

function CalculoCreate({ state, dispatch }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errorSteps] = React.useState([]);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
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

  function submit(values, pristineValues) {
    // get all values and pristineValues on form submission
  }

  function updateErrorSteps(field, errorSteps) {
  }

  return (
    <div className={classes.root}>
      <MaterialUIForm
        activeStep={activeStep}
        onFieldValidation={updateErrorSteps}
        onSubmit={submit}
      >
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((step, index) => (
            <Step key={index}>

              <StepLabel className={classes.label} error={errorSteps.includes(step.id)}>{step.title}</StepLabel>

              <div className={(activeStep !== index) ? classes.hide : ''}>
                <Typography className={classes.instructions}>
                  {step.description}
                </Typography>
              </div>

              <StepContent timeout={1000}>

                <React.Fragment>{step.component}</React.Fragment>

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
                      type="submit"
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
      </MaterialUIForm>
    </div>
  );
}

export default connect(
  state => ({ state })
)(CalculoCreate);