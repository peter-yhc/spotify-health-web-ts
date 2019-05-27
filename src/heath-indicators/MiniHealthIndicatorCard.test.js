import React from 'react';
import { mount } from 'enzyme';
import { MiniHealthIndicatorCard } from './MiniHealthIndicatorCard';
import CardText from './components/CardText';

jest.mock('../store/client/client-store-actions');

describe('indicator cards', () => {
  test('can show card texts', () => {
    const wrapper = mount(
      <MiniHealthIndicatorCard
        classes={{ indicatorCard: '', indicatorTitle: '' }}
        indicator="my indicator"
        textAwesome="I am awesome"
        textCrappy="I am crappy"
      />,
    );

    expect(wrapper.find('header').text()).toContain('my indicator');

    const descriptions = wrapper.find(CardText);
    expect(descriptions.at(0).text()).toContain('I am awesome');
    expect(descriptions.at(1).text()).toContain('I am crappy');
  });
});
