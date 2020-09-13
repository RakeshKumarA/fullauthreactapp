import { Grid } from '@material-ui/core';
import React from 'react';
import asset from '../../asset/404page.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '50vh',
  },
  img: {
    width: '300px',
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <h1>404 Page Not Found</h1>
      </Grid>
      <Grid item>
        <img src={asset} alt="Not Found" className={classes.img} />
      </Grid>
    </Grid>
  );
};

export default NotFound;
