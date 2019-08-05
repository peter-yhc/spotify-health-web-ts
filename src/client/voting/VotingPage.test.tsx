import { mount, shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { CircularProgress } from '@material-ui/core/index';
import ConnectedVotingPage, { VotingPage } from './VotingPage';
import HealthIndicatorCard from './components/VotingHealthIndicatorCard';
import { clientStoreActions } from '../../store/client';
import { HealthIndicator } from '../../api/server-api';

jest.mock('../../store/client');

const mockStore = configureStore([thunk]);
const store = mockStore({
    clientStoreReducer: { session: { id: '1', passkey: '2' } },
});

const mockSession = { id: 'anything', passkey: 'also anything' };

describe('SessionsPage component', () => {
    test('render page', () => {
        const wrapper = shallow(
            <VotingPage cards={[]} dispatch={jest.fn()} session={mockSession} />,
        );

        expect(wrapper.find(HealthIndicatorCard).length).toBe(0);
    });

    test('can render progress if cards not present', () => {
        const wrapper = shallow(
            <VotingPage cards={[]} dispatch={jest.fn()} session={mockSession} />,
        );

        expect(wrapper.find(CircularProgress).length).toBe(1);
    });

    test('can render indicators if card present', () => {
        const wrapper = shallow(
            <VotingPage
                cards={[{ name: 'a', textAwesome: 'awesome', textCrappy: 'crappy' }]}
                dispatch={jest.fn()}
                session={mockSession}
            />,
        );

        expect(wrapper.find(HealthIndicatorCard).length).toBe(1);
    });

    test('retrieves health indicators if session is valid', done => {
        store.dispatch = jest.fn().mockImplementationOnce(() => {
            expect(clientStoreActions.retrieveHealthIndicators).toBeCalledWith('1', '2');
            done();
        });

        const cards: HealthIndicator[] = [];

        mount(
            <Provider store={store}>
                <ConnectedVotingPage cards={cards} session={mockSession} />
            </Provider>,
        );
    });
});
