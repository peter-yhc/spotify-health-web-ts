import React from 'react';
import { Grid, Icon, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  container: {
    textAlign: 'left',
    padding: '0 0.5em',
    marginBottom: '0.5em',
  },
  iconContainer: {
    display: 'inline-flex',
    verticalAlign: 'middle',
  },
  good: {
    color: 'green',
  },
  bad: {
    color: 'red',
  },
};

const CardDescription = (props) => {
  const { text, variant, classes } = props;

  const coloriseIcon = () => {
    if (variant === 'good') {
      return (<Icon className={classes.good}>wb_sunny</Icon>);
    }
    return (<Icon className={classes.bad}>wb_sunny</Icon>);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.container}>
        <Grid item xs={2} className={classes.iconContainer}>
          {coloriseIcon()}
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1"> {text} </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

CardDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['good', 'bad']).isRequired,
};

export default withStyles(styles)(CardDescription);
