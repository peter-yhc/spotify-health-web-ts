import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { LandingPage } from './landing';
import { AdminPage } from './admin';
import { ClientSessionPage } from './client-sessions';
import { initialState as adminInitialState } from './store/admin/admin-store-reducer';
import { initialState as clientInitialState } from './store/client/client-store-reducer';
import { NotFoundPage } from './error';
import App from './App';

const mockStore = configureStore([thunk]);
const store = mockStore({
  clientStoreReducer: clientInitialState,
  adminStoreReducer: adminInitialState,
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
      <MemoryRouter initialEntries={['/admin']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    expect(wrapper.find(AdminPage)).toHaveLength(1);
  });

  test('has route to client session page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/clients']}>
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
    expect(wrapper.find(AdminPage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
});
