import React from 'react';
import { shallow } from 'enzyme';
import { TrailCreatePage } from './TrailCreatePage';

let wrap;

describe('TrailCreatePage', () => {
    test('exists', () => {
        wrap = shallow(<TrailCreatePage />);
        expect(wrap.exists()).toBe(true);
    })
})