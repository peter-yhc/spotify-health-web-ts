import React from 'react';
import { shallow } from 'enzyme';
import { Typography } from '@material-ui/core';
import { ProgressSelector } from './ProgressSelector';
import State from './State';

const mockStyles = { container: '', breadCrumbs: '' };

describe('ProgressSelector test', () => {
  test('shows breadcrumbs', () => {
    const wrapper = shallow(
      <ProgressSelector
        classes={mockStyles}
        onStateChange={jest.fn()}
      />,
    );

    const texts = wrapper.find('span');
    expect(texts.at(0).text()).toBe('Admin Panel');
    expect(texts.at(1).text()).toBe('Selection');
    expect(texts.at(2).text()).toBe('Voting');
    expect(texts.at(3).text()).toBe('Summary');
  });

  test('calls onStateChange function when text clicked', () => {
    const mockOnStateChange = jest.fn();
    const wrapper = shallow(
      <ProgressSelector classes={mockStyles} onStateChange={mockOnStateChange} />,
    );

    wrapper.find('span').at(1).simulate('click');
    expect(mockOnStateChange).toBeCalledWith(State.menu);

    wrapper.find('span').at(2).simulate('click');
    expect(mockOnStateChange).toBeCalledWith(State.voting);

    wrapper.find('span').at(3).simulate('click');
    expect(mockOnStateChange).toBeCalledWith(State.summary);
  });
});
