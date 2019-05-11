import React from 'react';
import { shallow } from 'enzyme/build';
import configureStore from 'redux-mock-store';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/index';
import { LiveVotingTable } from './LiveVotingTable';

const mockStore = configureStore();
const store = mockStore();

const indicatorVotesStub = [{
  indicator: 'Are you enjoying this app?',
  unhappyVotes: 6,
  neutralVotes: 9,
  happyVotes: 11,
}];

describe('LiveVotingTable tests', () => {
  test('can render table with correct headers', () => {
    const wrapper = shallow(<LiveVotingTable store={store} indicatorVotes={indicatorVotesStub} />);

    const cells = wrapper.find(TableHead).find(TableRow).find(TableCell);
    expect(cells.at(0).text()).toBe('Indicators');
    expect(cells.at(1).text()).toBe('Unhappy');
    expect(cells.at(2).text()).toBe('Neutral');
    expect(cells.at(3).text()).toBe('Happy');
  });

  test('can render table with indicators', () => {
    const wrapper = shallow(<LiveVotingTable store={store} indicatorVotes={indicatorVotesStub} />);

    const cells = wrapper.find(TableBody).find(TableRow).find(TableCell);
    expect(cells.at(0).text()).toBe('Are you enjoying this app?');
    expect(cells.at(1).text()).toBe('6');
    expect(cells.at(2).text()).toBe('9');
    expect(cells.at(3).text()).toBe('11');
  });
});
