import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from './NavBar';
import { logout } from '../auth/authActions';

let wrap;

describe('NavBar', () => {
    test('exists', () => {
        wrap = shallow(<NavBar />);
        expect(wrap.exists()).toBe(true);
    });

    /*Text('Renders auth links', () => {
        wrap = shallow(<NavBar/>);
        expect(wrap.instance().)
    })*/
})
