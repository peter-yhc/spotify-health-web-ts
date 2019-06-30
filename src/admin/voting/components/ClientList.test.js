import React from 'react';
import { mount, shallow } from 'enzyme/build';
import configureStore from 'redux-mock-store';
import ConnectedClientList, { ClientList } from './ClientList';
import { SocketApi } from '../../../api';
import { adminStoreActions } from '../../../store/admin';

jest.mock('../../../api');
jest.mock('../../../store/admin');

describe('client test renders', () => {
  test('displays message when there are zero clients', () => {
    const wrapper = shallow(<ClientList sessionId="88888" dispatch={jest.fn()} clients={[]} />);

    expect(wrapper.find('span').at(0).text()).toBe('Participants:');
    expect(wrapper.find('span').at(1).text()).toBe('No one has joined this session yet...');
  });

  test('displays client names', () => {
    const wrapper = shallow(
      <ClientList
        sessionId="88888"
        dispatch={jest.fn()}
        clients={[{ id: 1, name: 'Ren' }, { id: 2, name: 'Stimpy' }]}
      />,
    );

    const names = wrapper.find('span');
    expect(names.length).toBe(3);
    expect(names.at(0).text()).toBe('Participants:');
    expect(names.at(1).text()).toBe('Ren');
    expect(names.at(2).text()).toBe('Stimpy');
  });
});

describe('client list test interactions', () => {
  const mockStore = configureStore();
  const store = mockStore({
    adminStoreReducer: {
      session: { id: '12312' },
      clients: {},
    },
  });

  beforeEach(() => {
    store.dispatch = jest.fn();
  });

  test('registers hook on socket', (done) => {
    SocketApi.registerHook = jest.fn((actionCapture, callbackCapture) => {
      expect(actionCapture).toBe('participant joined');
      expect(typeof callbackCapture).toBe('function');
      done();
    });

    mount(<ConnectedClientList store={store} />);
    expect(SocketApi.registerHook).toBeCalled();
  });

  test('registered hook dispatches a client joined event', (done) => {
    SocketApi.registerHook = jest.fn((_, callbackCapture) => {
      callbackCapture({ participant: { id: 777, name: 'bond' } });
    });

    store.dispatch.mockImplementation(() => {
      expect(adminStoreActions.clientJoined).toBeCalledWith({
        id: 777,
        name: 'bond',
      });
      done();
    });

    mount(<ConnectedClientList store={store} />);
    expect(SocketApi.registerHook).toBeCalled();
  });
});
