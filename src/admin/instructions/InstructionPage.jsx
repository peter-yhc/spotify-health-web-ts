/* eslint-disable max-len */
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Theme from '../../Theme';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '100px 3fr 2fr 100px',
  },
  startButton: {
    backgroundColor: Theme.GREEN,
    color: Theme.WHITE,
    marginTop: '3vh !important',
    '& span': {
      fontWeight: 500,
    },
    '&:hover': {
      backgroundColor: Theme.GREEN_DARKER,
    },
  },
});

const InstructionPage = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <article className={classes.container}>
        <span>remaking</span>
        <Link to="/admin/voting">
          <Button className={classes.startButton} variant="contained" href="#">Get started</Button>
        </Link>
      </article>
    </React.Fragment>
  );
};

export default InstructionPage;
