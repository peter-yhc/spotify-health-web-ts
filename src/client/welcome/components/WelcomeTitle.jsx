import React from 'react';
import { makeStyles } from '@material-ui/core';
import Theme from '../../../Theme';

const styles = makeStyles({
  title: {
    fontFamily: '"Montserrat", "Open Sans", sans-serif',
    textTransform: 'uppercase',
    backgroundColor: Theme.BLACK,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Theme.WHITE,
    '& h6': {
      margin: 0,
    },
  },
});
const WelcomeTitle = () => {
  const classes = styles();

  return (
    <div className={classes.title}>
      <h6>Spotify Health Checks</h6>
    </div>
  );
};

export default WelcomeTitle;
