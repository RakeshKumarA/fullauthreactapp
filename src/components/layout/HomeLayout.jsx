import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { CircularProgress, Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../features/userProfile/Header';
import CreateIcon from '@material-ui/icons/Create';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
  },
  content: {
    minHeight: '85vh',
  },
});

const HomeLayout = () => {
  const classes = useStyles();
  const { isLoading, isAuthenticated } = useAuth0();
  const history = useHistory();
  const createDiscHandler = () => {
    history.push('/createDiscount');
  };
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Header />
      </Grid>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        direction="column"
        className={classes.content}
      >
        {isLoading ? (
          <Grid item>
            {' '}
            <CircularProgress />
          </Grid>
        ) : (
          isAuthenticated && (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={createDiscHandler}
              >
                Create Discount
                <CreateIcon fontSize="small" />
              </Button>
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default HomeLayout;
