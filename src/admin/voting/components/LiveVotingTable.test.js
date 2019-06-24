import React from 'react';
import { mount, shallow } from 'enzyme/build';
import configureStore from 'redux-mock-store';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/index';
import ConnectedLiveVotingTable, { LiveVotingTable } from './LiveVotingTable';
import { SocketApi } from '../../../api';
import { adminStoreActions } from '../../../store/admin';

const mockStore = configureStore();
const store = mockStore();

jest.mock('../../../api');
jest.mock('../../../store/admin');

const indicatorVotesStub = [{
  indicator: 'Are you enjoying this app?',
  unhappyVotes: 6,
  neutralVotes: 9,
  happyVotes: 11,
}];

describe('VotingPage tests', () => {
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

  test('registers hook to accept votes', () => {
    const testStore = mockStore({
      adminStoreReducer: {
        voteTally: indicatorVotesStub,
        session: { id: '12312' },
      },
    });
    testStore.dispatch = jest.fn();

    mount(<ConnectedLiveVotingTable store={testStore} />);

    // test name of hook
    const callSpy = SocketApi.registerHook.mock.calls[0];
    expect(callSpy[0]).toBe('vote accepted');

    // test function used to register hook
    callSpy[1]({ indicator: '', vote: '', client: '' });
    expect(adminStoreActions.voteSubmitted).toBeCalled();
  });
});
