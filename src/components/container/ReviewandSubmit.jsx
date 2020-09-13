import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function createData(feature, values) {
  return { feature, values };
}

const useStyles = makeStyles({
  root: {
    minHeight: '400px',
  },
  header: {
    fontWeight: 'bold',
  },
  mu20: {
    margin: '20px',
  },
});

const ReviewandSubmit = () => {
  const classes = useStyles();
  const history = useHistory();
  const basicDetail = useSelector((state) => state.basicDetail);
  const audience = useSelector((state) => state.audience);
  const schedule = useSelector((state) => state.schedule);
  const discount = { ...basicDetail, ...audience, ...schedule };

  const features = Object.keys(discount);
  const values = Object.values(discount);

  const datarows = features.map((feature, i) => createData(feature, values[i]));

  const handleSubmit = () => {
    history.push('/');
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className={classes.header}>
                <TableCell>Feature</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datarows.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell component="th" scope="row">
                    {row.feature}
                  </TableCell>
                  <TableCell align="right">{row.values}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className={classes.mu20}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReviewandSubmit;
