import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { AdminSessionsPage } from './AdminSessionsPage';
import { ProgressSelector, SelectionMenu } from './components';

const mockStore = configureStore();
const store = mockStore({
  adminSessionReducer: {
    indicatorVotes: [],
  },
});

const classes = {
  article: '',
  header: '',
  main: '',
};

describe('SessionsPage component', () => {
  test('can show progress selector', () => {
    const wrapper = shallow(<AdminSessionsPage store={store} classes={classes} />);

    expect(wrapper.find(ProgressSelector)).toHaveLength(1);
  });

  test('can show selection menu', () => {
    const wrapper = shallow(<AdminSessionsPage store={store} classes={classes} />);

    expect(wrapper.find(SelectionMenu)).toHaveLength(1);
  });

  // test('can show live voting table', () => {
  //   const wrapper = shallow(<AdminSessionsPage store={store} classes={classes} />);
  //
  //   expect(wrapper.find(LiveVotingTable)).toHaveLength(1);
  // });
});
