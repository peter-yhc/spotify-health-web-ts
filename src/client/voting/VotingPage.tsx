import React, { useEffect } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import VotingHealthIndicatorCard from './components/VotingHealthIndicatorCard';
import { clientStoreActions } from '../../store/client';
import Theme from '../../Theme';
import { HealthIndicator } from '../../api/server-api';

const styles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
        gridAutoRows: '420px',
        gridRowGap: Theme.SPACING,
        justifyItems: 'center',
        alignItems: 'center',
        marginBottom: 'auto',
    },
    progress: {
        color: Theme.BLUE,
    },
});

interface VotingPageProps {
    dispatch: Function;
    cards: HealthIndicator[];
    session: {
        id: string;
        passkey: string;
    };
}

export const VotingPage: React.FunctionComponent<VotingPageProps> = ({
    dispatch,
    cards,
    session,
}) => {
    const classes = styles();

    useEffect(() => {
        dispatch(clientStoreActions.retrieveHealthIndicators(session.id, session.passkey));
    }, [dispatch, session]);

    const showCards = () => {
        return cards.map(card => (
            <VotingHealthIndicatorCard
                key={card.name}
                indicator={card.name}
                textAwesome={card.textAwesome}
                textCrap={card.textCrappy}
            />
        ));
    };

    return (
        <article className={classes.container}>
            {(() => {
                if (!cards || cards.length === 0) {
                    return <CircularProgress className={classes.progress} />;
                }
                return showCards();
            })()}
        </article>
    );
};

const mapStateToProps = (state: any) => {
    return {
        cards: state.clientStoreReducer.cards,
        session: state.clientStoreReducer.session,
    };
};

export default connect(mapStateToProps)(VotingPage);
