import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: '15vh',
  },
  stepper: {
    background: 'none',
  },
}));

function getSteps() {
  return ['Basic Details', 'Schedule', 'Audience'];
}

const Footer = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const stepNumber = useSelector((state) => state.stepper.step);
  const steps = getSteps();

  useEffect(() => {
    setActiveStep(stepNumber);
  }, [stepNumber]);

  return (
    <Grid container className={classes.root} direction="column">
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
  );
};

export default Footer;
