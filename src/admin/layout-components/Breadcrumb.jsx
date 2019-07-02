import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon/index';
import Theme from '../../Theme';

const styles = makeStyles({
  container: {
    height: '36px',
    backgroundColor: Theme.BLACK,
    color: Theme.WHITE,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '1vw',
  },
  breadCrumbs: {
    display: 'inline-block',
    fontWeight: 500,
  },
  active: {
    color: Theme.BLUE,
  },
});

export const Breadcrumb = (props) => {
  const classes = styles();
  const { location } = props;

  const isActive = (name) => {
    if (location.includes(name)) {
      return [classes.breadCrumbs, classes.active].join(' ');
    }
    return classes.breadCrumbs;
  };

  return (
    <React.Fragment>
      <section className={classes.container}>
        <span className={classes.breadCrumbs}>
          Facilitator
        </span>
        <Icon>chevron_right</Icon>
        <span className={isActive('instructions')}>
          Instructions
        </span>
        <Icon>chevron_right</Icon>
        <span className={isActive('voting')}>
          Voting
        </span>
        <Icon>chevron_right</Icon>
        <span className={isActive('summary')}>
          Summary
        </span>
      </section>
    </React.Fragment>
  );
};

Breadcrumb.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Breadcrumb;
