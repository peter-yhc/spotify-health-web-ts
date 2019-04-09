import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import LandingPage from './landing/LandingPage';
import SessionsPage from './sessions/SessionsPage';
import App from './App';

test('default route is LandingPage', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(wrapper.find(LandingPage)).toHaveLength(1);
});

test('has route to Sessions Page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/sessions']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(SessionsPage)).toHaveLength(1);
});
