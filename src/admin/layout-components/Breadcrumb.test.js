import React from 'react';
import { shallow } from 'enzyme';
import { Breadcrumb } from './Breadcrumb';

const mockStyles = { container: '', breadCrumbs: '', active: 'active' };

describe('Breadcrumb test', () => {
  test('shows breadcrumbs', () => {
    const wrapper = shallow(
      <Breadcrumb
        classes={mockStyles}
        onStateChange={jest.fn()}
        location=""
      />,
    );

    const texts = wrapper.find('span');
    expect(texts.at(0).text()).toBe('Facilitator');
    expect(texts.at(1).text()).toBe('Instructions');
    expect(texts.at(2).text()).toBe('Voting');
    expect(texts.at(3).text()).toBe('Summary');
  });

  test('crumb should be active if location matches crumb', () => {
    const wrapper = shallow(
      <Breadcrumb
        classes={mockStyles}
        onStateChange={jest.fn()}
        location="voting"
      />,
    );

    const crumbs = wrapper.find('span');
    expect(crumbs.at(0).props().className).toBe('');
    expect(crumbs.at(1).props().className).toBe('');
    expect(crumbs.at(2).props().className).toBe(' active');
    expect(crumbs.at(3).props().className).toBe('');
  });
});
