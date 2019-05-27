import React from 'react';
import { mount } from 'enzyme';
import { SessionGenerator } from './SessionGenerator';
import { ServerApi } from '../../api';

jest.mock('../../api');

const mockClasses = { textField: '' };

describe('SessionGenerator test', () => {
  test('calls server api to get session link', (done) => {
    ServerApi.createSession.mockImplementation(() => {
      done();
    });

    mount(<SessionGenerator classes={mockClasses} />);
  });
});
