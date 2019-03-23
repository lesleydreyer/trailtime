import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import TrailDashboard from './TrailDashboard';

let wrap;

describe('TrailDashboard', () => {
    /*beforeEach(()=>{
        props = {
            jwt: 'fakejwtfortesting',
            getTrails: (jwt) => {}
        }
    })*/
    //test('exists', () => {
    //   wrap = shallow(<TrailDashboard />);
    // expect(wrap.exists()).toBe(true);
    //});

    test('it calls componentdidmount', () => {
        //const callback = jest.fn;
        //const spy = jest.spy
        //const wrapper = mount(<TrailDashboard />);
        sinon.spy(TrailDashboard.prototype, 'componentDidMount');
        const wrapper = mount(<TrailDashboard />);
        expect(TrailDashboard.prototype.componentDidMount).to.have.property('callCount', 1);
    })
});