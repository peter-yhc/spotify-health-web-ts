import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CardDescription from './components/CardDescription';

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
};

export const MiniHealthIndicatorCard = (props) => {
  const { indicator, textAwesome, textCrappy, classes } = props;

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
      </Paper>
    </React.Fragment>
  );
};

MiniHealthIndicatorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  indicator: PropTypes.string.isRequired,
  textAwesome: PropTypes.string.isRequired,
  textCrappy: PropTypes.string.isRequired,
};

export default withStyles(styles)(MiniHealthIndicatorCard);
