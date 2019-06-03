import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import CardText from './components/CardText';

const styles = {
  indicatorCard: {
    height: '250px',
    padding: '1vw 0',
    display: 'grid',
    gridTemplateRows: '20% auto',
    boxSizing: 'border-box',
  },
  indicatorTitle: {
    marginBottom: '32px',
  },
  descriptionText: {
    textAlign: 'left',
    padding: '0 0.5em',
    marginBottom: '0.5em',
  },
};

export const MiniHealthIndicatorCard = (props) => {
  const { indicator, textAwesome, textCrap, classes } = props;

  return (
    <Paper className={classes.indicatorCard}>
      <header className={classes.indicatorTitle}>
        <h5> {indicator} </h5>
      </header>
      <section>
        <CardText text={textAwesome} variant="good" />
        <CardText text={textCrap} variant="bad" />
      </section>
    </Paper>
  );
};

MiniHealthIndicatorCard.propTypes = {
  classes: PropTypes.object.isRequired,
  indicator: PropTypes.string.isRequired,
  textAwesome: PropTypes.string.isRequired,
  textCrap: PropTypes.string.isRequired,
};

export default withStyles(styles)(MiniHealthIndicatorCard);
