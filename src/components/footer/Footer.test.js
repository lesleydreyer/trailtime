import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';


describe('Footer', () => {

    const wrap = shallow(<Footer />);

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });

    test('renders correct text', () => {
        expect(wrap.text()).toBe('© 2019 Lesley Dreyer');
    });

    test('has correct class name', () => {
        expect(wrap.find('div').hasClass('footer')).toBe(true);
    });

});