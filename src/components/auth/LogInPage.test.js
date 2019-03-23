import React from 'react';
import { shallow } from 'enzyme';
import { LogInPage } from './LogInPage';

let wrap;

describe('LogInPage', () => {
    test('exists', () => {
        wrap = shallow(<LogInPage />);
        expect(wrap.exists()).toBe(true);
    })
})