import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AdminSessionsPage from './AdminSessionsPage';
import HealthIndicatorCard from '../heath-indicators/HealthIndicatorCard';

const mockStore = configureStore();
const store = mockStore();

jest.mock('../heath-indicators/health-indicators-stub', () => {
  return [{
    area: 'area1',
    textAwesome: 'textAwesome',
    textCrappy: 'textCrappy',
  }, {
    area: 'area2',
    textAwesome: 'textAwesome',
    textCrappy: 'textCrappy',
  }];
});

describe('SessionsPage component', () => {
  test('render page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AdminSessionsPage />
      </Provider>,
    );
    expect(wrapper.html()).toContain('Sessions Admin');
  });

  test('render indicators', () => {
    const wrapper = mount(
      <Provider store={store}>
        <AdminSessionsPage store={store} />
      </Provider>,
    );

    expect(wrapper.find(HealthIndicatorCard)).toHaveLength(2);
  });
});
