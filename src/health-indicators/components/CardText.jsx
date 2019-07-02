import React from 'react';
import { Grid, Icon, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = makeStyles({
  container: {
    textAlign: 'left',
    padding: '0 0.5em',
    marginBottom: '0.5em',
  },
  iconContainer: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    marginLeft: '-5px !important',
  },
});

const CardText = (props) => {
  const { text, variant } = props;
  const classes = styles();

  const coloriseIcon = () => {
    if (variant === 'good') {
      return (<Icon>arrow_upward</Icon>);
    }
    return (<Icon>arrow_downward</Icon>);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.container}>
        <Grid item xs={2} className={classes.iconContainer}>
          {coloriseIcon()}
        </Grid>
        <Grid item xs={10}>
          <p>{text}</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

CardText.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['good', 'bad']).isRequired,
};

export default CardText;
