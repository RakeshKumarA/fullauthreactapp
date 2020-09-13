import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { useDispatch } from 'react-redux';
import { addAudience } from './audienceSlice';
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

const Audience = () => {
  const classes = useStyles();
  const [state, setState] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = ({ country, channel }) => {
    setState({
      country,
      channel,
    });
    dispatch(updateStep(3));
  };

  useEffect(() => {
    dispatch(addAudience(state));
    // eslint-disable-next-line
  }, [state]);

  const displayCountryError = errors.country && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.country.message}</Alert>
    </Grid>
  );

  const displayChannelError = !errors.country && errors.channel && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.channel.message}</Alert>
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
      {displayCountryError}
      {displayChannelError}
      <Grid item xs={12}>
        <Typography variant="h4" color="initial" className={classes.mgbtm}>
          Audience
        </Typography>
      </Grid>
      <Grid item container className={classes.loginform} xs={12}>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register({ required: 'Country is a required' })}
              name="country"
              label="Country"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({ required: 'Channel is a required' })}
              name="channel"
              label="Channel"
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

export default Audience;
