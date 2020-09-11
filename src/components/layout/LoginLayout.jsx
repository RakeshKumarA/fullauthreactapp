import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../Login';
import Footer from '../Footer';

const useStyles = makeStyles({
  content: {
    minHeight: '83.33vh',
  },
  footer: {
    minHeight: '16.66vh',
    background: '#191f4b',
  },
});

const LoginLayout = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.content}>
        <Login />
      </Grid>
      <Grid item className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default LoginLayout;
