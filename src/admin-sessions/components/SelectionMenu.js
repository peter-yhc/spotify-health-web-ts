import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import stubData from '../../heath-indicators/health-indicators-stub';
import { MiniHealthIndicatorCard } from '../../heath-indicators';

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    marginBottom: '1em',
  },
};

export const SelectionMenu = (props) => {
  const { classes } = props;

  const showCards = () => {
    return stubData.map(data => (
      <div className={classes.card} key={data.indicator}>
        <MiniHealthIndicatorCard
          indicator={data.indicator}
          textAwesome={data.textAwesome}
          textCrappy={data.textCrappy}
        />
      </div>
    ));
  };

  return (
    <React.Fragment>
      <section className={classes.container}>
        <div className={classes.cardContainer}>
          {showCards()}
        </div>
      </section>
    </React.Fragment>
  );
};

SelectionMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionMenu);
