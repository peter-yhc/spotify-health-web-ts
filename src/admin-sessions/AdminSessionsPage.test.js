import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { AdminSessionsPage } from './AdminSessionsPage';
import { LiveVotingTable, ProgressSelector, SelectionMenu, ResultSummary } from './components';
import { Provider } from 'react-redux'

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

const mockMatch = {
  isExact: false,
};

describe('SessionsPage component', () => {
  test('can show progress selector', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AdminSessionsPage store={store} classes={classes} match={mockMatch} />
      </MemoryRouter>,
    );

    expect(wrapper.find(ProgressSelector)).toHaveLength(1);
  });

  test('can show instructions page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/admin-sessions/instructions']}>
        <AdminSessionsPage store={store} classes={classes} match={mockMatch} />,
      </MemoryRouter>,
    );

    expect(wrapper.find(SelectionMenu)).toHaveLength(1);
    expect(wrapper.find(LiveVotingTable)).toHaveLength(0);
    expect(wrapper.find(ResultSummary)).toHaveLength(0);
  });

  test('can show voting page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/admin-sessions/voting']}>
        <Provider store={store}>
          <AdminSessionsPage classes={classes} match={mockMatch} />,
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find(SelectionMenu)).toHaveLength(0);
    expect(wrapper.find(LiveVotingTable)).toHaveLength(1);
    expect(wrapper.find(ResultSummary)).toHaveLength(0);
  });

  test('can show summary page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/admin-sessions/results']}>
        <AdminSessionsPage store={store} classes={classes} match={mockMatch} />,
      </MemoryRouter>,
    );

    expect(wrapper.find(SelectionMenu)).toHaveLength(0);
    expect(wrapper.find(LiveVotingTable)).toHaveLength(0);
    expect(wrapper.find(ResultSummary)).toHaveLength(1);
  });
});
