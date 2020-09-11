import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Alert from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    minHeight: '500px',
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

const Signup = () => {
  const classes = useStyles();
  const [state, setState] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ firstName, lastName, email, password }) => {
    setState({
      firstName,
      lastName,
      email,
      password,
    });
  };

  const firstnameError = errors.firstName && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.firstName.message}</Alert>
    </Grid>
  );

  const lastnameError = !errors.firstName && errors.lastName && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.lastName.message}</Alert>
    </Grid>
  );

  const emailError = !errors.firstName && !errors.lastName && errors.email && (
    <Grid item className={classes.mgbtm}>
      <Alert severity="error">{errors.email.message}</Alert>
    </Grid>
  );

  const passwordError = !errors.firstName &&
    !errors.lastName &&
    !errors.email &&
    errors.password && (
      <Grid item className={classes.mgbtm}>
        <Alert severity="error">{errors.password.message}</Alert>
      </Grid>
    );

  const confirmpwdError = !errors.firstName &&
    !errors.lastName &&
    !errors.email &&
    !errors.password &&
    errors.confirmPassword && (
      <Grid item className={classes.mgbtm}>
        <Alert severity="error">{errors.confirmPassword.message}</Alert>
      </Grid>
    );

  console.log({ errors });

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      direction="column"
    >
      {firstnameError}
      {lastnameError}
      {emailError}
      {passwordError}
      {confirmpwdError}
      <Grid className={classes.iconstyle}>
        <LockOpenIcon fontSize="large" color="primary" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="initial" className={classes.mgbtm}>
          Sign up
        </Typography>
      </Grid>
      <Grid item container className={classes.loginform} xs={12}>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register({ required: 'first name is a required' })}
              name="firstName"
              label="first name"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({ required: 'last name is a required' })}
              name="lastName"
              label="last name"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({ required: 'email is a required' })}
              name="email"
              label="email"
              type="email"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({
                required: 'password is a required',
                minLength: {
                  value: 8,
                  message: 'Min length is 8',
                },
              })}
              name="password"
              label="password"
              type="password"
              variant="outlined"
              className={classes.inputfield}
            />
            <TextField
              inputRef={register({
                required: 'Confirm password is a required',
                minLength: {
                  value: 8,
                  message: 'Min length is 8',
                },
              })}
              name="confirmPassword"
              label="confirm password"
              type="password"
              variant="outlined"
              className={classes.inputfield}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.width100}
              type="submit"
            >
              Sign up
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
