/* eslint-disable max-len */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button/index';
import { Link } from 'react-router-dom';
import stubData from '../../heath-indicators/health-indicators-stub';
import { MiniHealthIndicatorCard } from '../../heath-indicators';
import Theme from '../../Theme';

const styles = {
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
  },
  heading: {
    marginTop: '4vh',
    marginBottom: '2vh',
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  text: {
    lineHeight: '28px',
  },
  startButton: {
    backgroundColor: Theme.GREEN_OVERRIDE,
    color: Theme.WHITE_OVERRIDE,
    marginTop: '3vh !important',
  },
};

export const InstructionPage = (props) => {
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
      <div className={classes.container}>
        <section className={classes.instructions}>
          <h4 className={classes.heading}>How does this work?</h4>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec metus eget enim sollicitudin finibus
            quis ut ligula. Nullam lacinia eu elit sit amet fringilla. In hac habitasse platea dictumst. Etiam euismod,
            quam ac rhoncus feugiat, tortor est consectetur mauris, ac pharetra nisi nisl ac arcu. Sed rutrum risus
            iaculis ipsum condimentum, ac molestie massa imperdiet. Ut molestie varius enim a porta. Quisque mi magna,
            posuere vitae fringilla vel, feugiat ut libero. Phasellus feugiat augue vitae lacinia aliquet. Sed viverra
            finibus nibh in tincidunt. Nulla eu aliquam mauris.
          </p>
          <h4 className={classes.heading}>OK, but do models like this really work?</h4>
          <p className={classes.text}>
            Nullam gravida magna quis tellus auctor tincidunt. Aliquam erat volutpat. Donec vel sapien fringilla,
            egestas leo sit amet, dictum ligula. Morbi nec elit vitae ligula interdum posuere a in ante. Aliquam nec
            nunc eget ligula sollicitudin posuere sed ac nisl. Fusce rhoncus accumsan turpis vitae mollis. Nam urna
            felis, pellentesque sit amet iaculis id, auctor eget velit. Suspendisse lectus magna, vestibulum ac sapien
            eget, consequat posuere justo. Cras elementum viverra convallis. Sed fringilla vestibulum tortor id commodo.
            Nulla elementum mi eget feugiat convallis. Morbi cursus augue eu diam pellentesque, eget hendrerit libero
            tincidunt. Suspendisse porttitor arcu sit amet congue viverra. Morbi vel felis aliquam, euismod nisi at,
            sollicitudin nisi. Duis tincidunt dui eu nunc posuere, at vehicula mi egestas.
          </p>
          <h4 className={classes.heading}>Who the health check model is for</h4>
          <p className={classes.text}>
            Fusce sapien est, malesuada eget scelerisque sit amet, mollis id turpis. Mauris luctus a nulla eget
            lobortis. Ut non lacus nisl. Etiam lacinia lobortis justo, eu sollicitudin nisl vulputate at. Nam justo
            tellus, malesuada facilisis mollis a, mattis ac magna. Phasellus velit quam, mattis commodo vulputate a,
            ultricies eu nisi. Aenean ullamcorper metus arcu, id congue massa vulputate non.
          </p>
          <h4 className={classes.heading}>How we do this</h4>
          <p className={classes.text}>
            Donec a erat vulputate, bibendum nunc at, commodo orci. Mauris finibus interdum risus. Duis efficitur tellus
            sed dui mattis iaculis ut eget orci. Morbi eu sem nisi. Fusce ac turpis et metus dignissim facilisis.
            Praesent faucibus nisi at vehicula iaculis. Phasellus vel erat eget mi maximus molestie vel et magna.
            Maecenas sagittis dui eu lectus mollis rutrum.
          </p>
          <Link to="/admin/voting">
            <Button className={classes.startButton} variant="contained">Lets get started</Button>
          </Link>
        </section>
        <section className={classes.cardContainer}>
          {showCards()}
        </section>
      </div>
    </React.Fragment>
  );
};

InstructionPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructionPage);
