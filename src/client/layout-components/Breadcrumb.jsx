import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon/index';
import Theme from '../../Theme';

const styles = {
  container: {
    width: '100%',
    height: '2em',
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
};

export const Breadcrumb = (props) => {
  const { classes, location } = props;

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
          Member
        </span>
        <Icon>chevron_right</Icon>
        <span className={isActive('welcome')}>
          Welcome
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
  classes: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
};

export default withStyles(styles)(Breadcrumb);
