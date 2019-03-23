import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from './SignUpForm';

let wrap;

describe('SignUpForm', () => {
    test('exists', () => {
        wrap = shallow(<SignUpForm />);
        expect(wrap.exists()).toBe(true);
    })
})