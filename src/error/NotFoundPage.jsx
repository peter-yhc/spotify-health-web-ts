import React from 'react';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  content: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const NotFoundPage = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <main className={classes.content}>
        <span>404 not found</span>
      </main>
    </React.Fragment>
  );
};

export default NotFoundPage;
