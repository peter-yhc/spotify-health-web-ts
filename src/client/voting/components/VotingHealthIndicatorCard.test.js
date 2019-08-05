import React from 'react';
import { mount, shallow } from 'enzyme/build';
import { Button } from '@material-ui/core/index';
import { VotingHealthIndicatorCard } from './VotingHealthIndicatorCard';
import CardText from './CardText';
import { SocketApi } from '../../../api';

jest.mock('../../../api');

describe('indicator cards', () => {
  test('can show card texts', () => {
    const wrapper = shallow(
      <VotingHealthIndicatorCard
        classes={{ indicatorCard: '', indicatorTitle: '' }}
        indicator="my indicator"
        textAwesome="I am awesome"
        textCrap="I am crappy"
        sessionId=""
        clientId=""
      />,
    );

    expect(wrapper.find('header').text()).toContain('my indicator');
    const descriptions = wrapper.find('section').find(CardText);
    expect(descriptions.at(0).props().text).toBe('I am awesome');
    expect(descriptions.at(1).props().text).toBe('I am crappy');
  });

  test('can submit vote to socket on click', () => {
    const wrapper = mount(
      <VotingHealthIndicatorCard
        classes={{ indicatorCard: '', indicatorTitle: '' }}
        indicator=""
        textAwesome=""
        textCrap=""
        sessionId=""
        clientId=""
      />,
    );
    wrapper.find(Button).at(0).simulate('click');

    expect(SocketApi.submitVote).toBeCalled();
  });
});
