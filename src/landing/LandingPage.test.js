import { mount } from 'enzyme';
import React from 'react';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  test('render title', () => {
    const title = mount(<LandingPage />).find('h2');
    expect(title).toHaveLength(1);
  });

  test('render link', () => {
    const link = mount(<LandingPage />).find('a');
    expect(link).toHaveLength(1);
    expect(link.text()).toBe('New Session');
  });
});
