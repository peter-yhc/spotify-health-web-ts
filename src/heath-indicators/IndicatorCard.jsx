import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  paper: {
    width: 'calc(90%)',
    height: '225px',
    padding: '1em',
  },
};

const IndicatorCard = (props) => {
  const { area, textAwesome, textCrappy, classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography variant="headline"> {area} </Typography>
        <Typography variant="subtitle1"> {textAwesome} </Typography>
        <Typography variant="subtitle1"> {textCrappy} </Typography>
      </Paper>
    </React.Fragment>
  );
};

IndicatorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  area: PropTypes.string.isRequired,
  textAwesome: PropTypes.string.isRequired,
  textCrappy: PropTypes.string.isRequired,
};

export default withStyles(styles)(IndicatorCard);
