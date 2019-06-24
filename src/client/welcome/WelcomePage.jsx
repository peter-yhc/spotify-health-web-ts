import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import WelcomeForm from './components/WelcomeForm';
import WelcomeTitle from './components/WelcomeTitle';

const styles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  frame: {
    width: '450px',
    height: '500px',
    gridColumn: '2 /3',
    gridRow: '2 / 3',
    display: 'grid',
    gridTemplateRows: '60px auto',
    alignItems: 'center',
  },
});

const WelcomePage = ({ location }) => {
  const classes = styles();

  return (
    <main className={classes.container}>
      <Paper className={classes.frame}>
        <WelcomeTitle />
        <WelcomeForm forwardLink={location.search} />
      </Paper>
    </main>
  );
};

WelcomePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default WelcomePage;
