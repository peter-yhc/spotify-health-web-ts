import { shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPage } from './LandingPage';

describe('LandingPage component', () => {
  test('render title', () => {
    const title = shallow(<LandingPage />).find('h2');
    expect(title).toHaveLength(1);
  });

  test('render link', () => {
    const link = shallow(<LandingPage />).find(Link);
    expect(link).toHaveLength(1);
    expect(link.props().to).toBe('/admin');
    expect(link.props().children).toBe('New Session');
  });
});
