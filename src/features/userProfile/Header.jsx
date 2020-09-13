import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: '15vh',
  },
  mr20: {
    marginRight: '20px',
  },
  logo: {
    marginLeft: '20px',
  },
  company: {
    flexGrow: '1',
    marginLeft: '20px',
  },
  img: {
    width: '30px',
    marginRight: '20px',
    borderRadius: '20px',
  },
  logoutProf: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyName: {
    textDecoration: 'none',
    color: '#AEB0BF',
  },
});

const Header = () => {
  const classes = useStyles();

  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    isLoading,
    user,
  } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item className={classes.logo}>
        <ShoppingCartIcon fontSize="large" color="primary" />
      </Grid>
      <Grid item className={classes.company}>
        <Link to="/" className={classes.companyName}>
          <Typography variant="h5">Discount System</Typography>
        </Link>
      </Grid>
      {!isLoading && (
        <Grid item>
          {!isAuthenticated ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              className={classes.mr20}
            >
              Login
            </Button>
          ) : (
            <div className={classes.logoutProf}>
              <img
                src={user.picture}
                alt="profile pic"
                className={classes.img}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                className={classes.mr20}
              >
                Logout
              </Button>
            </div>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
