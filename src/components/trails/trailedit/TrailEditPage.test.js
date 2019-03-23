import React from 'react';
import { shallow } from 'enzyme';
import { TrailEditPage } from './TrailEditPage';


let wrap;

describe('TrailEditPage', () => {
    test('exists', () => {
        wrap = shallow(<TrailEditPage />);
        expect(wrap.exists()).toBe(true);
    })
})
