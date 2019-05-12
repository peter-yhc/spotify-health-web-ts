import React from 'react';
import { mount } from 'enzyme';
import SelectionMenu from './SelectionMenu';
import { MiniHealthIndicatorCard } from '../../heath-indicators';

describe('SelectionMenu tests', () => {
  test('can show menu', () => {
    const wrapper = mount(<SelectionMenu />);

    expect(wrapper.find(MiniHealthIndicatorCard).length).toBe(10);
  });
});
