import { shallow } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { AdminSessionsPage } from './AdminSessionsPage';

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
  test('render page', () => {
    const wrapper = shallow(
      <AdminSessionsPage store={store} classes={classes} />,
    );
    expect(wrapper.find('header').text()).toContain('Sessions Admin');
  });

  // test('render indicators', () => {
  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <AdminSessionsPage store={store} />
  //     </Provider>,
  //   );
  //
  //   expect(wrapper.find(HealthIndicatorCard)).toHaveLength(2);
  // });
});
