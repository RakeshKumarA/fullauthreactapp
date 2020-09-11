import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: '16.66vh',
  },
  mr20: {
    marginRight: '20px',
  },
});

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const onSignUpClickHandler = () => {
    location.pathname === '/signup'
      ? history.push('/')
      : history.push('/signup');
  };

  const signupFooter = (
    <>
      <p className={classes.mr20}>Already have an account yet?</p>
      <Button
        variant="contained"
        color="primary"
        onClick={onSignUpClickHandler}
      >
        Sign in
      </Button>
    </>
  );

  const signinFooter = (
    <>
      <p className={classes.mr20}>Don't have an account yet?</p>
      <Button
        variant="contained"
        color="primary"
        onClick={onSignUpClickHandler}
      >
        Sign up
      </Button>
    </>
  );

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {location.pathname === '/signup' ? signupFooter : signinFooter}
    </Grid>
  );
};

export default Footer;
