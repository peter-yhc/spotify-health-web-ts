import { Button, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Theme from '../../../Theme';

const styles = makeStyles({
  section: {
    color: Theme.BLACK,
    width: '50%',
    boxSizing: 'border-box',
    padding: '1.5em',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '2fr 7fr 1fr',
  },
  title: {
    fontFamily: '"Montserrat", "OpenSans", sans-serif',
    textTransform: 'uppercase',
    marginTop: '0.7em',
  },
  sectionForm: {
    gridRow: '2 / 3',
  },
  textField: {
    marginTop: 0,
    marginBottom: '1em',
    width: '75%',
    fontSize: '0.9rem',
  },
});

const WelcomeForm = () => {
  const classes = styles();

  const [firstName, updateFirstName] = useState(undefined);
  const [surname, updateSurname] = useState(undefined);
  const [alias, updateAlias] = useState(undefined);

  const handleChange = update => (event) => {
    update(event.target.value);
  };

  return (
    <section className={classes.section}>
      <h6 className={classes.title}>Profile</h6>
      <form className={classes.sectionForm} noValidate autoComplete="off">
        <TextField
          label="First Name"
          className={classes.textField}
          value={firstName}
          onChange={handleChange(updateFirstName)}
          margin="normal"
        />
        <TextField
          label="Surname"
          className={classes.textField}
          value={surname}
          onChange={handleChange(updateSurname)}
          margin="normal"
        />
        <TextField
          label="Alias (Optional)"
          className={classes.textField}
          value={alias}
          onChange={handleChange(updateAlias)}
          margin="normal"
        />
      </form>
      <Button>Continue</Button>
    </section>
  );
};

export default WelcomeForm;
