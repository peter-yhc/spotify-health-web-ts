import { mount } from 'enzyme';
import React from 'react';
import App from './App';

describe('App component', () => {
  test('render title', () => {
    const title = mount(<App />).find('h2');
    expect(title).toHaveLength(1);
  });

  test('render link', () => {
    const link = mount(<App />).find('a');
    expect(link).toHaveLength(1);
    expect(link.text()).toBe('New Session');
  });
});
