import React from 'react';
import { shallow } from 'enzyme';
import { ProgressBreadcrumb } from './ProgressBreadcrumb';

const mockStyles = { container: '', breadCrumbs: '' };

describe('ProgressBreadcrumb test', () => {
  test('shows breadcrumbs', () => {
    const wrapper = shallow(
      <ProgressBreadcrumb
        classes={mockStyles}
        onStateChange={jest.fn()}
      />,
    );

    const texts = wrapper.find('span');
    expect(texts.at(0).text()).toBe('Admin Panel');
    expect(texts.at(1).text()).toBe('Selection');
    expect(texts.at(2).text()).toBe('Voting');
    expect(texts.at(3).text()).toBe('Summary');
  });
});
