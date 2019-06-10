/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button/index';
import { Link } from 'react-router-dom';
import stubData from '../../health-indicators/health-indicators-stub';
import { MiniHealthIndicatorCard } from '../../health-indicators';
import Theme from '../../Theme';

const styles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '100px 3fr 2fr 100px',
  },
  cardContainer: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15vw, 1fr))',
    gridColumn: '3 / 4',
    justifyContent: 'space-evenly',
  },
  card: {
    margin: '0 4px 3vh 4px',
  },
  instructions: {
    gridColumn: '2 / 3',
    padding: '0 2vw',
    textAlign: 'left',
    lineHeight: '28px',
    '& p': {
      marginBottom: '0.8rem',
    },
    '& h4': {
      marginTop: '4vh',
      marginBottom: '2vh',
      '&:first-of-type': {
        marginTop: 0,
      },
    },
  },
  startButton: {
    backgroundColor: Theme.GREEN_OVERRIDE,
    color: Theme.WHITE_OVERRIDE,
    marginTop: '3vh !important',
    fontWeight: 500,
  },
});

const InstructionPage = () => {
  const classes = styles();

  const showCards = () => {
    return stubData.map(data => (
      <div className={classes.card} key={data.indicator}>
        <MiniHealthIndicatorCard
          indicator={data.indicator}
          textAwesome={data.textAwesome}
          textCrap={data.textCrap}
        />
      </div>
    ));
  };

  return (
    <React.Fragment>
      <div className={classes.container}>
        <section className={classes.instructions}>
          <h4>How does this work?</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h4>OK, but do models like this really work?</h4>
          <p className={classes.text}>
            Nullam gravida magna quis tellus auctor tincidunt. Aliquam erat volutpat. Donec vel sapien fringilla,
            egestas leo sit amet, dictum ligula. Morbi nec elit vitae ligula interdum posuere a in ante. Aliquam nec
            nunc eget ligula sollicitudin posuere sed ac nisl.
          </p>
          <p>Fusce rhoncus accumsan turpis vitae mollis. Nam urna
            felis, pellentesque sit amet iaculis id, auctor eget velit. Suspendisse lectus magna, vestibulum ac sapien
            eget, consequat posuere justo. Cras elementum viverra convallis. Sed fringilla vestibulum tortor id commodo.
            Nulla elementum mi eget feugiat convallis. Morbi cursus augue eu diam pellentesque, eget hendrerit libero
            tincidunt. Suspendisse porttitor arcu sit amet congue viverra.
          </p>
          <p>Morbi vel felis aliquam, euismod nisi at,
            sollicitudin nisi. Duis tincidunt dui eu nunc posuere, at vehicula mi egestas.
          </p>
          <h4>Who the health check model is for</h4>
          <p className={classes.text}>
            Fusce sapien est, malesuada eget scelerisque sit amet, mollis id turpis. Mauris luctus a nulla eget
            lobortis. Ut non lacus nisl. Etiam lacinia lobortis justo, eu sollicitudin nisl vulputate at. Nam justo
            tellus, malesuada facilisis mollis a, mattis ac magna.
          </p>
          <p>Phasellus velit quam, mattis commodo vulputate a,
            ultricies eu nisi. Aenean ullamcorper metus arcu, id congue massa vulputate non.
          </p>
          <h4>How we do this</h4>
          <p className={classes.text}>
            Donec a erat vulputate, bibendum nunc at, commodo orci. Mauris finibus interdum risus. Duis efficitur tellus
            sed dui mattis iaculis ut eget orci. Morbi eu sem nisi. Fusce ac turpis et metus dignissim facilisis.
            Praesent faucibus nisi at vehicula iaculis.
          </p>
          <p>Phasellus vel erat eget mi maximus molestie vel et magna.
            Maecenas sagittis dui eu lectus mollis rutrum.
          </p>
          <Link to="/admin/voting">
            <Button className={classes.startButton} variant="contained" href="#">Get started</Button>
          </Link>
        </section>
        <section className={classes.cardContainer}>
          {showCards()}
        </section>
      </div>
    </React.Fragment>
  );
};

export default InstructionPage;
