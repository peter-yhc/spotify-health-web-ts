import { mount, shallow } from 'enzyme/build';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { CircularProgress } from '@material-ui/core/index';
import ConnectedVotingPage, { VotingPage } from './VotingPage';
import HealthIndicatorCard from '../../health-indicators/VotingHealthIndicatorCard';
import { clientStoreActions } from '../../store/client';
import { initialState as clientInitialState } from '../../store/client/client-store-reducer';
import { Breadcrumb } from '../../admin/layout-components';

jest.mock('../../store/client');

const mockClasses = { header: '', main: '', location: '' };
const mockStore = configureStore([thunk]);

describe('SessionsPage component', () => {
  test('render page', () => {
    const wrapper = shallow(
      <VotingPage
        classes={mockClasses}
        cards={[]}
        location={{ search: '?session=91567904' }}
        dispatch={jest.fn()}
      />,
    );
    expect(wrapper.find(Breadcrumb).length).toBe(1);
    expect(wrapper.find(HealthIndicatorCard).length).toBe(0);
  });

  test('can render progress if cards not present', () => {
    const wrapper = shallow(
      <VotingPage
        classes={mockClasses}
        cards={[]}
        location={{ search: '?session=91567904' }}
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
        location={{ search: '?session=91567904' }}
        dispatch={jest.fn()}
      />,
    );

    expect(wrapper.find(HealthIndicatorCard).length).toBe(1);
  });

  test('retrieves health indicators if session is valid', (done) => {
    const mockedStore = mockStore({
      clientStoreReducer: Object.assign({}, clientInitialState, { client: { id: 'bleh' } }),
    });

    mockedStore.dispatch = jest.fn()
      .mockImplementationOnce(() => {
        expect(clientStoreActions.registerClientToSession).toBeCalledWith('91567904');
      })
      .mockImplementationOnce(() => {
        expect(clientStoreActions.registerClientToSession).toBeCalledWith('91567904');
        done();
      });

    mount(
      <Provider store={mockedStore}>
        <ConnectedVotingPage
          classes={mockClasses}
          cards={[]}
          location={{ search: '?session=91567904', pathname: '/clients/voting' }}
        />
      </Provider>,
    );
  });

  test('does not retrieve health indicators if session is invalid', (done) => {
    const mockedStore = mockStore({
      clientStoreReducer: Object.assign({}, clientInitialState, { client: { id: undefined } }),
    });

    mockedStore.dispatch = jest.fn()
      .mockImplementationOnce(() => {
        expect(clientStoreActions.registerClientToSession).toBeCalledWith('91567904');
      });

    mount(
      <Provider store={mockedStore}>
        <ConnectedVotingPage
          classes={mockClasses}
          cards={[]}
          location={{ search: '?session=91567904', pathname: '/clients/voting' }}
        />
      </Provider>,
    );

    expect(mockedStore.dispatch).toBeCalledTimes(1);
    done();
  });
});
