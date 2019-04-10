import React from 'react';
import { shallow } from 'enzyme';
import IndicatorCard from './IndicatorCard';

describe('indicator cards', () => {
  test('can show card texts', () => {
    const wrapper = shallow(
      <IndicatorCard
        area="my area"
        textAwesome="I am awesome"
        textCrappy="I am crappy"
      />,
    );

    expect(wrapper.html()).toContain('my area');
    expect(wrapper.html()).toContain('I am awesome');
    expect(wrapper.html()).toContain('I am crappy');
  });
});
