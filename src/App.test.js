import React from 'react';
import App from './App';
import {mount} from 'enzyme';

test('render title', () => {
  const title = mount(<App/>).find('h2');
  expect(title).toHaveLength(1);
});

test('render link', () => {
  const link = mount(<App/>).find('a');
  expect(link).toHaveLength(1);
});