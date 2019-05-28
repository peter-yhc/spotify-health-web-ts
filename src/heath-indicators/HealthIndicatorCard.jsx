import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import CardText from './components/CardText';
import VotingOptions from './components/VotingOptions';
import { clientStoreActions } from '../store/client';

const styles = {
  indicatorCard: {
    width: '300px',
    height: '400px',
    padding: '1em',
    display: 'grid',
    gridTemplateRows: '15% 75% 15%',
    boxSizing: 'border-box',
  },
  indicatorTitle: {
    marginBottom: '0.75em',
  },
  descriptionText: {
    textAlign: 'left',
    padding: '0 0.5em',
    marginBottom: '0.5em',
  },
};

export const HealthIndicatorCard = (props) => {
  const { sessionId, indicator, textAwesome, textCrappy, classes, dispatch } = props;

  const onSubmit = (vote) => {
    dispatch(clientStoreActions.submitVote(sessionId, { indicator, vote }));
  };

  return (
    <React.Fragment>
      <Paper className={classes.indicatorCard}>
        <header className={classes.indicatorTitle}>
          <Typography variant="h5"> {indicator} </Typography>
        </header>
        <section>
          <CardText text={textAwesome} variant="good" />
          <CardText text={textCrappy} variant="bad" />
        </section>
        <footer>
          <VotingOptions onSubmit={onSubmit} />
        </footer>
      </Paper>
    </React.Fragment>
  );
};

HealthIndicatorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  sessionId: PropTypes.string.isRequired,
  indicator: PropTypes.string.isRequired,
  textAwesome: PropTypes.string.isRequired,
  textCrappy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  sessionId: state.session,
});

export default connect(mapStateToProps)(withStyles(styles)(HealthIndicatorCard));
