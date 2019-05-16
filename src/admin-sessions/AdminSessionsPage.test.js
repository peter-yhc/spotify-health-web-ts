import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Route } from 'react-router';
import { AdminSessionsPage } from './AdminSessionsPage';
import { ProgressSelector } from './components';

const mockStore = configureStore();
const store = mockStore({
  adminSessionReducer: {
    indicatorVotes: [],
  },
});

const classes = {
  article: '',
  header: '',
  main: '',
};

const mockMatch = {
  isExact: false,
};

describe('SessionsPage component', () => {
  test('can show progress selector', () => {
    const wrapper = shallow(
      <AdminSessionsPage store={store} classes={classes} match={mockMatch} />,
    );

    expect(wrapper.find(ProgressSelector)).toHaveLength(1);
  });

  test('has correct routes', () => {
    const wrapper = shallow(
      <AdminSessionsPage store={store} classes={classes} match={mockMatch} />,
    );

    const routes = wrapper.find(Route);
    expect(routes.length).toBe(3);
    expect(routes.at(0).props().path).toBe('/admin-sessions/instructions');
    expect(routes.at(1).props().path).toBe('/admin-sessions/voting');
    expect(routes.at(2).props().path).toBe('/admin-sessions/results');
  });
});
