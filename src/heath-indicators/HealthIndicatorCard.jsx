import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CardDescription from './CardDescription';

const styles = {
  paper: {
    width: 'calc(90%)',
    height: '250px',
    padding: '1em',
  },
  areaTitle: {
    marginBottom: '0.75em',
  },
  descriptionText: {
    textAlign: 'left',
    padding: '0 0.5em',
    marginBottom: '0.5em',
  },
};

const HealthIndicatorCard = (props) => {
  const { area, textAwesome, textCrappy, classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <div className={classes.areaTitle}>
          <Typography variant="headline"> {area} </Typography>
        </div>
        <CardDescription text={textAwesome} variant="good" />
        <CardDescription text={textCrappy} variant="bad" />
      </Paper>
    </React.Fragment>
  );
};

HealthIndicatorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  area: PropTypes.string.isRequired,
  textAwesome: PropTypes.string.isRequired,
  textCrappy: PropTypes.string.isRequired,
};

export default withStyles(styles)(HealthIndicatorCard);
