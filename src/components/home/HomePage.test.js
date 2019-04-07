import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

let wrap;

describe('Home Page', () => {
    let wrap;
    beforeEach(() => wrap = shallow(<HomePage />));

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });

    test('', () => {
        //expect(wrap.find('div.bg')).toHaveLength(1);
        expect(wrap.find('div.bg').length).toEqual(1);
        expect(wrap.find('header.banner').length).toEqual(1);
    })
})
