import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { LandingPage } from './landing';
import { AdminSessionsPage } from './admin-sessions';
import { NotFoundPage } from './error';
import App from './App';

const mockStore = configureStore();
const store = mockStore();

test('default route is landing page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(wrapper.find(LandingPage)).toHaveLength(1);
});

test('has route to sessions page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/sessions']}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
  expect(wrapper.find(AdminSessionsPage)).toHaveLength(1);
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
