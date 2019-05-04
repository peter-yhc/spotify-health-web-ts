import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { LandingPage } from './landing';
import { AdminSessionsPage } from './admin-sessions';
import { ClientSessionPage } from './client-sessions';
import { initialState as healthInitialState } from './store/reducers/health-indicator-reducer';
import { initialState as clientInitialState } from './store/reducers/client-session-reducer';

import { NotFoundPage } from './error';
import App from './App';

const mockStore = configureStore();
const store = mockStore({
  clientSessionReducer: clientInitialState,
  healthIndicatorReducer: healthInitialState,
});

describe('App router test', () => {
  test('default route is landing page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(LandingPage)).toHaveLength(1);
  });

  test('has route to admin sessions page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/admin-sessions']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(AdminSessionsPage)).toHaveLength(1);
  });

  test('has route to client session page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sessions']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(ClientSessionPage)).toHaveLength(1);
  });

  test('defaults to not found page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/abc-not-a-real-page']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(AdminSessionsPage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
});
