import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import WelcomeDescription from './components/WelcomeDescription';
import WelcomeForm from './components/WelcomeForm';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto 700px auto',
    gridTemplateRows: 'auto 400px auto',
    height: '100vh',
  },
  frame: {
    gridColumn: '2 /3',
    gridRow: '2 / 3',
    display: 'flex',
    flexDirection: 'row',
  },
});

const WelcomePage = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Paper className={classes.frame}>
        <WelcomeDescription />
        <WelcomeForm />
      </Paper>
    </div>
  );
};

export default WelcomePage;
