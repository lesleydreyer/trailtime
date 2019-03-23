import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

let wrap;

describe('Home Page', () => {
    test('exists', () => {
        wrap = shallow(<HomePage />);
        expect(wrap.exists()).toBe(true);
    })
})
