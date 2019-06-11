import React from 'react';
import { shallow } from 'enzyme/build';
import { VotingPage } from './VotingPage';

const classes = {
  container: '',
};

describe('voting page tests', () => {
  test('shows live voting table', () => {
    const wrapper = shallow(
      <VotingPage classes={classes} />,
    );
    expect(wrapper.find('Connect(LiveVotingTable)').length).toBe(1);
  });
});
