import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import { useAuth0 } from '@auth0/auth0-react';

import auth0 from 'auth0-js';
import params from '../auth0-params.json';

const useStyles = makeStyles({
  root: {
    minHeight: '500px',
  },
  loginform: {
    maxWidth: '400px',
  },
  inputfield: {
    width: '100%',
    marginBottom: '20px',
    backgroundColor: '#0f1436',
  },
  width100: {
    width: '100%',
  },
  mgbtm: {
    marginBottom: '20px',
  },
  forgotpwd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    color: '#AEB0BF',
    textDecoration: 'none',
  },
});

const Login = () => {
  let auth0Client = new auth0.WebAuth({
    domain: params.domain,
    clientID: params.clientId,
    audience: params.apiAudience,
    redirectUri: params.callbackUrl,
    scope: params.scope,
    responseType: 'token id_token',
  });

  const { loginWithRedirect } = useAuth0();

  const classes = useStyles();
  const [state, setState] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ email, password }) => {
    setState({
      email,
      password,
    });
    login(email, password);
    loginWithRedirect();
  };

  const login = (username, password) => {
    auth0Client.client.login(
      {
        realm: 'reactauthdb',
        username,
        password,
      },
      (err, authResult) => {
        if (err) {
          alert('Error', err.description);
          return;
        }
        if (authResult) {
          window.origin = window.location.origin;
        }
      }
    );
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
      direction="column"
    >
      {errors.email && (
        <Grid item className={classes.mgbtm}>
          <Alert severity="error">{errors.email.message}</Alert>
        </Grid>
      )}
      {!errors.email && errors.password && (
        <Grid item className={classes.mgbtm}>
          <Alert severity="error">{errors.password.message}</Alert>
        </Grid>
      )}
      <Grid item className={classes.mgbtm}>
        <LockOpenIcon fontSize="large" color="primary" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="initial" className={classes.mgbtm}>
          Sign in
        </Typography>
      </Grid>
      <Grid item container className={classes.loginform} xs={12}>
        <Grid item>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              inputRef={register({ required: 'email is a required' })}
              type="email"
              label="email"
              name="email"
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
              label="password"
              type="password"
              name="password"
              variant="outlined"
              className={classes.inputfield}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.width100}
              type="submit"
            >
              Login
            </Button>
            <div className={classes.forgotpwd}>
              <Link to="/forgotpwd" className={classes.link}>
                <h5>Forgot Password?</h5>
              </Link>
            </div>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
