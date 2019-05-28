import { mount, shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ConnectedClientSessionPage, { ClientSessionPage } from './ClientSessionPage';
import HealthIndicatorCard from '../heath-indicators/HealthIndicatorCard';
import { clientStoreActions } from '../store/client';
import { initialState as clientInitialState } from '../store/client/client-store-reducer';
import { initialState as adminInitialState } from '../store/admin';
import { initialState as debugPanelInitialState } from '../store/debug/debug-panel-reducer';

jest.mock('../store/client');

const mockClasses = { header: '', main: '', location: '' };
const mockStore = configureStore([thunk]);
const store = mockStore({
  clientStoreReducer: clientInitialState,
  adminStoreReducer: adminInitialState,
  debugPanelReducer: debugPanelInitialState,
});

describe('SessionsPage component', () => {
  test('render page', () => {
    const wrapper = shallow(
      <ClientSessionPage
        classes={mockClasses}
        cards={[]}
        location={{}}
        dispatch={jest.fn()}
      />,
    );
    expect(wrapper.find('header').text()).toContain('Client Session');
    expect(wrapper.find(HealthIndicatorCard).length).toBe(0);
  });

  test('can render indicators if card present', () => {
    const wrapper = shallow(
      <ClientSessionPage
        classes={mockClasses}
        cards={[{ indicator: 'a', textAwesome: 'awesome', textCrappy: 'crappy' }]}
        location={{}}
        dispatch={jest.fn()}
      />,
    );

    expect(wrapper.find(HealthIndicatorCard).length).toBe(1);
  });

  test('retrieves health indicators', (done) => {
    store.dispatch = () => {
      expect(clientStoreActions.retrieveHealthIndicators).toBeCalled();
      done();
    };

    mount(
      <Provider store={store}>
        <ConnectedClientSessionPage
          classes={mockClasses}
          cards={[]}
          location={{}}
        />
      </Provider>,
    );
  });
});
