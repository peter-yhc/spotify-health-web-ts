import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { LandingPage } from './landing';
import { SessionsPage } from './sessions';
import { NotFoundPage } from './error';
import App from './App';

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
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(SessionsPage)).toHaveLength(1);
});

test('defaults to not found page', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/abc-not-a-real-page']}>
      <App />
    </MemoryRouter>,
  );
  expect(wrapper.find(LandingPage)).toHaveLength(0);
  expect(wrapper.find(SessionsPage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});
