import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CreateDiscount from '../container/CreateDiscount';
import Footer from '../container/Footer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  content: {
    minHeight: '82vh',
  },
  footer: {
    minHeight: '18vh',
    background: '#191f4b',
  },
});

const CreateDiscountLayout = () => {
  const stepNumber = useSelector((state) => state.stepper.step);
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item className={classes.content}>
        <CreateDiscount />
      </Grid>
      {stepNumber !== 3 && (
        <Grid item className={classes.footer}>
          <Footer />
        </Grid>
      )}
    </Grid>
  );
};

export default CreateDiscountLayout;
