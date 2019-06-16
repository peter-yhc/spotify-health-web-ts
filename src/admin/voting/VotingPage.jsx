import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LiveVotingTable from './LiveVotingTable';
import SessionGenerator from './SessionGenerator';
import ClientList from './ClientList';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 100px) 3fr 50px 2fr minmax(auto, 100px)',
    gridTemplateRows: '75px 75px auto 75px',
  },
  main: {
    gridColumn: '2 / 3',
    gridRow: '1 / 4',
  },
  sessionGenerator: {
    gridColumn: '4 / 5',
    gridRow: '1 / 2',
  },
  clientList: {
    gridColumn: '4 / 5',
    gridRow: '2 / 3',
  },
  '@media screen and (max-width:760px)': {
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(3, auto)',
      gridRowGap: '0.75em',
    },
    main: {
      gridColumn: '1 / 2',
      gridRow: '3 / 4',
    },
    sessionGenerator: {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    },
    clientList: {
      gridColumn: '1 / 2',
      gridRow: '2 / 3',
    },
  },
});

export const VotingPage = () => {
  const classes = styles();

  return (
    <React.Fragment>
      <section className={classes.container}>
        <div className={classes.main}>
          <LiveVotingTable />
        </div>
        <div className={classes.sessionGenerator}>
          <SessionGenerator />
        </div>
        <div className={classes.clientList}>
          <ClientList />
        </div>
      </section>
    </React.Fragment>
  );
};

export default VotingPage;
