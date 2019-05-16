import React from 'react';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import SelectionMenu from './InstructionPage';
import { MiniHealthIndicatorCard } from '../../heath-indicators';

describe('InstructionPage tests', () => {
  test('can show mini cards', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SelectionMenu />
      </MemoryRouter>,
    );

    expect(wrapper.find(MiniHealthIndicatorCard).length).toBe(10);
  });

  test('can show getting started button with link', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SelectionMenu />
      </MemoryRouter>,
    );

    const link = wrapper.find(Link);
    expect(link.props().to).toBe('/admin-sessions/voting');
    const button = link.find(Button);
    expect(button.text()).toBe('Lets get started');
  });
});
