import React from 'react';
import { makeStyles } from '@material-ui/core';
import Theme from '../../../Theme';

const styles = makeStyles({
  section: {
    width: '50%',
    boxSizing: 'border-box',
    padding: '30px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '2fr 7fr 1fr',
    backgroundColor: Theme.BLACK,
    borderRadius: '4px 0 0 4px',
    color: Theme.WHITE,
    '& p': {
      textAlign: 'left',
      fontWeight: 300,
      marginBottom: '1em',
    },
  },
  title: {
    fontFamily: '"Montserrat", "OpenSans", sans-serif',
    textTransform: 'uppercase',
    marginTop: '0.7em',
  },
  sectionText: {
    gridRow: '2 / 3',
  },
});
const WelcomeDescription = () => {
  const classes = styles();

  return (
    <section className={classes.section}>
      <h6 className={classes.title}>Spotify Health Checks</h6>
      <div className={classes.sectionText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  );
};

export default WelcomeDescription;
