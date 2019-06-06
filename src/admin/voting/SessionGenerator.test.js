import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import SessionGenerator from './SessionGenerator';
import { adminStoreActions } from '../../store/admin';

jest.mock('../../store/admin');
const mockStore = configureStore();
const store = mockStore({
  adminStoreReducer: {
    session: { id: '', link: '' },
  },
});
store.dispatch = jest.fn();

describe('SessionGenerator test', () => {
  test('calls server api to get session link', () => {
    mount(<SessionGenerator store={store} />);

    expect(adminStoreActions.registerSession).toHaveBeenCalled();
  });
});
