import React from 'react';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';
import SelectionMenu from './SelectionMenu';
import { MiniHealthIndicatorCard } from '../../heath-indicators';

describe('SelectionMenu tests', () => {
  test('can show mini cards', () => {
    const wrapper = mount(<SelectionMenu />);

    expect(wrapper.find(MiniHealthIndicatorCard).length).toBe(10);
  });

  test('can show getting started button', () => {
    const wrapper = mount(<SelectionMenu />);

    const button = wrapper.find(Button);
    expect(button.text()).toBe('Lets get started');
  });
});
