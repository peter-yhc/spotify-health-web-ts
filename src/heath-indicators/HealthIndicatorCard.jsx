import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CardDescription from './components/CardDescription';
import VotingOptions from './components/VotingOptions';
import ClientSessionActions from '../store/actions/client-session-actions';

const styles = {
  indicatorCard: {
    width: '250px',
    height: '375px',
    padding: '1em',
    display: 'grid',
    gridTemplateRows: '15% 75% 15%',
  },
  indicatorTitle: {
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

export const HealthIndicatorCard = (props) => {
  const { indicator, textAwesome, textCrappy, classes, dispatch } = props;

  const onSubmit = (vote) => {
    dispatch(ClientSessionActions.submitVote('some session id to be generated', { indicator, vote }));
  };

  return (
    <React.Fragment>
      <Paper className={classes.indicatorCard}>
        <header className={classes.indicatorTitle}>
          <Typography variant="h5"> {indicator} </Typography>
        </header>
        <section>
          <CardDescription text={textAwesome} variant="good" />
          <CardDescription text={textCrappy} variant="bad" />
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
  indicator: PropTypes.string.isRequired,
  textAwesome: PropTypes.string.isRequired,
  textCrappy: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles)(HealthIndicatorCard);
