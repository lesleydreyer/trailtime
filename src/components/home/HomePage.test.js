import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';


describe('Home Page', () => {
    let wrap;
    beforeEach(() => wrap = shallow(<HomePage />));

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });

    test('renders info', () => {
        expect(wrap.find('div.homeBody').length).toEqual(1);
        expect(wrap.find('img#trailTimeLogoHomePage').length).toEqual(1);
        expect(wrap.find('div.infoText').length).toEqual(1);
        expect(wrap.find('button.logInBtn').length).toEqual(1);
    })
})
