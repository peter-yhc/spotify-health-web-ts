import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '@material-ui/core';
import HealthIndicatorVotingOptions from './HealthIndicatorVotingOptions';

test('shows icons', () => {
  const wrapper = shallow(<HealthIndicatorVotingOptions />);
  const icons = wrapper.find(Icon);

  expect(icons.length).toBe(3);
  expect(icons.get(0).props.children).toBe('sentiment_very_dissatisfied');
  expect(icons.get(1).props.children).toBe('sentiment_neutral');
  expect(icons.get(2).props.children).toBe('sentiment_very_satisfied');
});
