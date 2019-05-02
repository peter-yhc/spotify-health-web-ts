import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CardDescription from './CardDescription';
import HealthIndicatorVotingOptions from './HealthIndicatorVotingOptions';

const styles = {
  indicatorCard: {
    width: '250px',
    height: '375px',
    padding: '1em',
    display: 'grid',
    gridTemplateRows: '15% 75% 15%',
  },
  areaTitle: {
    marginBottom: '0.75em',
  },
  descriptionText: {
    textAlign: 'left',
    padding: '0 0.5em',
    marginBottom: '0.5em',
  },
  gridContainer: {
    height: '100%',
  },
  gridTop: {
    height: '90%',
  },
  gridBottom: {
    height: '10%',
  },
};

const HealthIndicatorCard = (props) => {
  const onSubmit = () => {
    // empty function
  };

  const { area, textAwesome, textCrappy, classes } = props;
  return (
    <React.Fragment>
      <Paper className={classes.indicatorCard}>
        <header className={classes.areaTitle}>
          <Typography variant="headline"> {area} </Typography>
        </header>
        <section>
          <CardDescription text={textAwesome} variant="good" />
          <CardDescription text={textCrappy} variant="bad" />
        </section>
        <HealthIndicatorVotingOptions onSubmit={onSubmit} />
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
