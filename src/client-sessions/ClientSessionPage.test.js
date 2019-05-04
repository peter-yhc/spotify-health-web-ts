import { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ClientSessionPage } from './ClientSessionPage';
import HealthIndicatorCard from '../heath-indicators/HealthIndicatorCard';

const mockStore = configureStore();
const store = mockStore({ clientSessionReducer: { cards: [] } });

describe('SessionsPage component', () => {
  test('render page', () => {
    const wrapper = mount(
      <ClientSessionPage classes={{ header: '', main: '' }} cards={[]} />,
    );
    expect(wrapper.html()).toContain('Client Session');
    expect(wrapper.find(HealthIndicatorCard).length).toBe(0);
  });

  test('can render indicators if card present', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ClientSessionPage
          classes={{ header: '', main: '' }}
          cards={[{ area: 'a', textAwesome: 'awesome', textCrappy: 'crappy' }]}
        />
      </Provider>,
    );

    expect(wrapper.find(HealthIndicatorCard).length).toBe(1);
  });
});
