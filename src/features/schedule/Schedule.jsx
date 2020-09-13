import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { addSchedule } from './scheduleSlice';
import { updateStep } from '../stepper/stepperSlice';

const useStyles = makeStyles({
  root: {
    minHeight: '400px',
  },
  loginform: {
    maxWidth: '400px',
  },
  inputfield: {
    width: '100%',
    marginBottom: '15px',
    backgroundColor: '#0f1436',
  },
  width100: {
    width: '100%',
  },
  mgbtm: {
    marginBottom: '10px',
  },
  iconstyle: {
    marginTop: '20px',
  },
});

const Schedule = () => {
  const classes = useStyles();
  const [state, setState] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ startDate, endDate }) => {
    setState({
      startDate,
      endDate,
    });
    dispatch(updateStep(2));
  };

  useEffect(() => {
    dispatch(addSchedule(state));
    // eslint-disable-next-line
  }, [state]);

  const displaySDError = errors.startDate && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.startDate.message}</Alert>
    </Grid>
  );

  const displayEDError = !errors.startDate && errors.endDate && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.endDate.message}</Alert>
    </Grid>
  );

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      direction="column"
    >
      {displaySDError}
      {displayEDError}
      <Grid item xs={12}>
        <Typography variant="h4" color="initial" className={classes.mgbtm}>
          Schedule
        </Typography>
      </Grid>
      <Grid item container className={classes.loginform} xs={12}>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register({ required: 'Start Date is a required' })}
              name="startDate"
              label="Start Date"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({ required: 'End Date is a required' })}
              name="endDate"
              label="End Date"
              variant="outlined"
              className={classes.inputfield}
            />
            <Button variant="contained" color="primary" type="submit">
              Continue
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Schedule;
