import React from 'react';
import { makeStyles } from '@material-ui/core';
import Theme from 'Theme';
import LiveVotingTable from './components/LiveVotingTable';
import SessionGenerator from './components/SessionGenerator';
import ClientList from './components/ClientList';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    gridTemplateRows: '75px 75px auto',
    gridRowGap: Theme.SPACING,
    gridColumnGap: Theme.SPACING,
    gridTemplateAreas: `
      'results link'
      'results participants'
      'results empty'
    `,
  },
  voting: {
    gridArea: 'results',
  },
  sessionGenerator: {
    gridArea: 'link',
  },
  clientList: {
    gridArea: 'participants',
  },
  '@media screen and (max-width:760px)': {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(3, auto)',
      gridRowGap: Theme.SPACING,
      gridTemplateAreas: `
        'link'
        'participants'
        'results'
      `,
    },
  },
});

export const VotingPage = () => {
  const classes = styles();

  return (
    <article className={classes.container}>
      <div className={classes.voting}>
        <LiveVotingTable />
      </div>
      <div className={classes.sessionGenerator}>
        <SessionGenerator />
      </div>
      <div className={classes.clientList}>
        <ClientList />
      </div>
    </article>
  );
};

export default VotingPage;
