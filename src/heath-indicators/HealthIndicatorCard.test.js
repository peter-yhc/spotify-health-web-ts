import React from 'react';
import { mount } from 'enzyme';
import { Button } from '@material-ui/core';
import { HealthIndicatorCard } from './HealthIndicatorCard';
import CardText from './components/CardText';
import { clientStoreActions } from '../store/client';

jest.mock('../store/client/client-store-actions');

describe('indicator cards', () => {
  test('can show card texts', () => {
    const wrapper = mount(
      <HealthIndicatorCard
        classes={{ indicatorCard: '', indicatorTitle: '' }}
        dispatch={jest.fn()}
        indicator="my indicator"
        textAwesome="I am awesome"
        textCrappy="I am crappy"
        sessionId=""
      />,
    );

    expect(wrapper.find('header').text()).toContain('my indicator');

    const descriptions = wrapper.find(CardText);
    expect(descriptions.at(0).text()).toContain('I am awesome');
    expect(descriptions.at(1).text()).toContain('I am crappy');
  });

  test('can dispatch on click', (done) => {
    const mockDispatch = () => {
      expect(clientStoreActions.submitVote).toBeCalled();
      done();
    };
    const wrapper = mount(
      <HealthIndicatorCard
        classes={{ indicatorCard: '', indicatorTitle: '' }}
        dispatch={mockDispatch}
        indicator="my indicator"
        textAwesome="I am awesome"
        textCrappy="I am crappy"
        sessionId=""
      />,
    );
    wrapper.find(Button).at(0).simulate('click');
  });
});
