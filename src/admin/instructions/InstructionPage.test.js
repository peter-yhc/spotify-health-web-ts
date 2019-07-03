import React from 'react';

xdescribe('InstructionPage tests', () => {
  test('can show mini cards', () => {
    const wrapper = shallow(
      <InstructionPage />,
    );

    expect(wrapper.find(MiniHealthIndicatorCard).length).toBe(10);
  });

  test('can show getting started button with link', () => {
    const wrapper = shallow(
      <InstructionPage />,
    );

    const link = wrapper.find(Link);
    expect(link.props().to).toBe('/admin/voting');
    const button = link.find(Button);
    expect(button.containsMatchingElement('Get started')).toBeTruthy();
  });
});
