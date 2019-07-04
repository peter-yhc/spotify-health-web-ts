import { mount, shallow } from 'enzyme/build';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { CircularProgress } from '@material-ui/core/index';
import ConnectedVotingPage, { VotingPage } from './VotingPage';
import HealthIndicatorCard from './components/VotingHealthIndicatorCard';
import { clientStoreActions } from '../../store/client';

jest.mock('../../store/client');

const mockClasses = { header: '', main: '', location: '' };
const mockStore = configureStore([thunk]);
const store = mockStore({
  clientStoreReducer: { session: { id: '1', passkey: '2' } },
});

describe('SessionsPage component', () => {
  test('render page', () => {
    const wrapper = shallow(
      <VotingPage
        classes={mockClasses}
        cards={[]}
        dispatch={jest.fn()}
      />,
    );

    expect(wrapper.find(HealthIndicatorCard).length).toBe(0);
  });

  test('can render progress if cards not present', () => {
    const wrapper = shallow(
      <VotingPage
        classes={mockClasses}
        cards={[]}
        dispatch={jest.fn()}
      />,
    );

    expect(wrapper.find(CircularProgress).length).toBe(1);
  });

  test('can render indicators if card present', () => {
    const wrapper = shallow(
      <VotingPage
        classes={mockClasses}
        cards={[{ indicator: 'a', textAwesome: 'awesome', textCrap: 'crappy' }]}
        dispatch={jest.fn()}
      />,
    );

    expect(wrapper.find(HealthIndicatorCard).length).toBe(1);
  });

  test('retrieves health indicators if session is valid', (done) => {
    store.dispatch = jest.fn()
      .mockImplementationOnce(() => {
        expect(clientStoreActions.retrieveHealthIndicators).toBeCalledWith({ sessionId: '1', passkey: '2' });
        done();
      });

    mount(
      <Provider store={store}>
        <ConnectedVotingPage
          classes={mockClasses}
          cards={[]}
        />
      </Provider>,
    );
  });
});
