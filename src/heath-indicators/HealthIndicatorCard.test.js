import React from 'react';
import { mount } from 'enzyme';
import HealthIndicatorCard from './HealthIndicatorCard';
import CardDescription from './CardDescription';

describe('indicator cards', () => {
  test('can show card texts', () => {
    const wrapper = mount(
      <HealthIndicatorCard
        area="my area"
        textAwesome="I am awesome"
        textCrappy="I am crappy"
      />,
    );

    expect(wrapper.find('header').text()).toContain('my area');

    const descriptions = wrapper.find(CardDescription);
    expect(descriptions.at(0).text()).toContain('I am awesome');
    expect(descriptions.at(1).text()).toContain('I am crappy');
  });
});
