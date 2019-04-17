import { mount, shallow } from 'enzyme';
import React from 'react';
import AdminSessionsPage from './AdminSessionsPage';
import HealthIndicatorCard from '../heath-indicators/HealthIndicatorCard';

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
    const wrapper = shallow(<AdminSessionsPage />);
    expect(wrapper.html()).toContain('Sessions Admin');
  });

  test('render indicators', () => {
    const wrapper = mount(<AdminSessionsPage />);

    expect(wrapper.find(HealthIndicatorCard)).toHaveLength(2);
  });
});
