import React from 'react';
import { mount } from 'enzyme';
import { Button, Icon } from '@material-ui/core';
import HealthIndicatorVotingOptions from './VotingOptions';

const onSubmitMock = jest.fn();

describe('health indicator voting', () => {
  test('shows icons', () => {
    const wrapper = mount(<HealthIndicatorVotingOptions onSubmit={onSubmitMock} />);
    const icons = wrapper.find(Icon);

    expect(icons.length).toBe(3);
    expect(icons.get(0).props.children).toBe('sentiment_very_unhappy');
    expect(icons.get(1).props.children).toBe('sentiment_neutral');
    expect(icons.get(2).props.children).toBe('sentiment_very_happy');
  });

  test('submits vote with correct value when button clicked - unhappy', () => {
    const wrapper = mount(<HealthIndicatorVotingOptions onSubmit={onSubmitMock} />);

    const unhappy = wrapper.find(Button).at(0);
    unhappy.simulate('click');

    expect(onSubmitMock).toBeCalledWith(0);
  });

  test('submits vote with correct value when button clicked - neutral', () => {
    const wrapper = mount(<HealthIndicatorVotingOptions onSubmit={onSubmitMock} />);

    const neutral = wrapper.find(Button).at(1);
    neutral.simulate('click');

    expect(onSubmitMock).toBeCalledWith(3);
  });

  test('submits vote with correct value when button clicked - happy', () => {
    const wrapper = mount(<HealthIndicatorVotingOptions onSubmit={onSubmitMock} />);

    const happy = wrapper.find(Button).at(2);
    happy.simulate('click');

    expect(onSubmitMock).toBeCalledWith(5);
  });

  test('toggles class when button clicked', () => {
    const wrapper = mount(<HealthIndicatorVotingOptions onSubmit={onSubmitMock} />);

    const happy = wrapper.find(Button).at(2);
    happy.simulate('click');

    expect(wrapper.find(Button).at(0).html()).not.toContain('activeunhappy');
    expect(wrapper.find(Button).at(1).html()).not.toContain('activeNeutral');
    expect(wrapper.find(Button).at(2).html()).toContain('activehappy');
  });
});
