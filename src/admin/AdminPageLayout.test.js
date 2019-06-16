import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Route } from 'react-router';
import { AdminPageLayout } from './AdminPageLayout';
import { Breadcrumb } from './layout-components';

const mockStore = configureStore();
const store = mockStore({
  adminSessionReducer: {
    voteTally: {},
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
      <AdminPageLayout store={store} classes={classes} match={mockMatch} location={{ pathName: '' }} />,
    );

    expect(wrapper.find(Breadcrumb)).toHaveLength(1);
  });

  test('has correct routes', () => {
    const wrapper = shallow(
      <AdminPageLayout store={store} classes={classes} match={mockMatch} location={{ pathName: '' }} />,
    );

    const routes = wrapper.find(Route);
    expect(routes.length).toBe(3);
    expect(routes.at(0).props().path).toBe('/admin/instructions');
    expect(routes.at(1).props().path).toBe('/admin/voting');
    expect(routes.at(2).props().path).toBe('/admin/results');
  });
});
