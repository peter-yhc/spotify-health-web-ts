import React, { useState } from 'react';
import { Button, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  buttonContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  activeUnhappy: {
    color: 'red !important',
  },
  activeNeutral: {
    color: 'orange !important',
  },
  activeHappy: {
    color: 'green !important',
  },
};

const VotingOptions = (props) => {
  const { onSubmit, classes } = props;
  const [activeButton, setActiveButton] = useState(-1);

  const handleClick = (value, button) => () => {
    setActiveButton(button);
    onSubmit(value);
  };

  const renderButtons = () => {
    return (
      <React.Fragment>
        <Button className={activeButton === 0 ? classes.activeUnhappy : ''} onClick={handleClick(0, 0)}>
          <Icon>sentiment_very_dissatisfied</Icon>
        </Button>
        <Button className={activeButton === 1 ? classes.activeNeutral : ''} onClick={handleClick(3, 1)}>
          <Icon>sentiment_neutral</Icon>
        </Button>
        <Button className={activeButton === 2 ? classes.activeHappy : ''} onClick={handleClick(5, 2)}>
          <Icon>sentiment_very_satisfied</Icon>
        </Button>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <section className={classes.buttonContainer}>
        {renderButtons()}
      </section>
    </React.Fragment>
  );
};

VotingOptions.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VotingOptions);
