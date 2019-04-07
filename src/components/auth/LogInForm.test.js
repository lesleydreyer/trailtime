import React from 'react';
import { shallow } from 'enzyme';
import { LogInForm } from './LogInForm';

let wrap;

describe('LogInForm', () => {
    test('exists', () => {
        wrap = shallow(<LogInForm />);
        expect(wrap.exists()).toBe(true);
    });
});