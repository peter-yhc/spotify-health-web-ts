import { mount, shallow } from 'enzyme';
import React from 'react';
import SessionsPage from './SessionsPage';
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
    const wrapper = shallow(<SessionsPage />);
    expect(wrapper.html()).toContain('Sessions Admin');
  });

  test('render indicators', () => {
    const wrapper = mount(<SessionsPage />);

    expect(wrapper.find(HealthIndicatorCard)).toHaveLength(2);
  });
});
