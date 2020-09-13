import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { addBasicDetail } from './basicDetailSlice';
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

const BasicDetails = () => {
  const classes = useStyles();
  const [state, setState] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ displayName, description, reason }) => {
    setState({
      displayName,
      description,
      reason,
    });
    dispatch(updateStep(1));
  };

  useEffect(() => {
    dispatch(addBasicDetail(state));
    // eslint-disable-next-line
  }, [state]);

  const displayNameError = errors.displayName && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.displayName.message}</Alert>
    </Grid>
  );

  const descriptionError = !errors.displayName && errors.description && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.description.message}</Alert>
    </Grid>
  );

  const reasonError = !errors.displayName &&
    !errors.description &&
    errors.reason && (
      <Grid item className={classes.mgbtm}>
        <Alert severity="error">{errors.reason.message}</Alert>
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
      {displayNameError}
      {descriptionError}
      {reasonError}

      <Grid item xs={12}>
        <Typography variant="h4" color="initial" className={classes.mgbtm}>
          Basic Details
        </Typography>
      </Grid>
      <Grid item container className={classes.loginform} xs={12}>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register({ required: 'Display name is a required' })}
              name="displayName"
              label="Display Name"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({ required: 'Description is a required' })}
              name="description"
              label="Description"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({ required: 'Reason is a required' })}
              name="reason"
              label="Reason"
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

export default BasicDetails;
