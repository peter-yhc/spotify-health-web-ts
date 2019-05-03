import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import CardDescription from './CardDescription';
import HealthIndicatorVotingOptions from './HealthIndicatorVotingOptions';
import HealthIndicatorActions from '../store/actions/health-indicator-actions';

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
  const { area, textAwesome, textCrappy, classes, dispatch } = props;

  const onSubmit = (value) => {
    dispatch(HealthIndicatorActions.voteSubmitted(area, value));
  };

  return (
    <React.Fragment>
      <Paper className={classes.indicatorCard}>
        <header className={classes.areaTitle}>
          <Typography variant="h5"> {area} </Typography>
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
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(withStyles(styles)(HealthIndicatorCard));
