import { shallow } from 'enzyme';
import React from 'react';
import SessionsPage from './SessionsPage';

describe('SessionsPage component', () => {
  test('render page', () => {
    const wrappper = shallow(<SessionsPage />);
    expect(wrappper.text()).toBe('Sessions');
  });
});
