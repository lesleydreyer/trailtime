import React from 'react';
import { shallow } from 'enzyme';
import { SignUpPage } from './SignUpPage';

let wrap;

describe('SignUpPage', () => {
    test('exists', () => {
        wrap = shallow(<SignUpPage />);
        expect(wrap.exists()).toBe(true);
    })
})