import React from 'react';
import { shallow } from 'enzyme';
//import sinon from 'sinon';
import { TrailDashboard } from './TrailDashboard';
import TrailList from '../traillist/TrailList';

let wrap;

describe('TrailDashboard', () => {
    beforeEach(() => {
        const getTrails = () => { };
        const jwt = 'abc';
        const trails = [
            {
                trailName: 'test1',
                trailRating: 'easy',
                trailLocation: 'Arizona',
                trailDescription: 'lorem 1 ipsum',
                trailImageUrl: 'test1'
            },
            {
                trailName: 'test2',
                trailRating: 'hard',
                trailLocation: 'Colorado',
                trailDescription: 'loren 2 ipsum',
                trailImageUrl: 'test2'
            },
            {
                trailName: 'test3',
                trailRating: 'medium',
                trailLocation: 'California',
                trailDescription: 'lorem 3 ipsum',
                trailImageUrl: 'test3'
            }
        ]
        wrap = shallow(<TrailDashboard getTrails={getTrails} jwt={jwt} trails={trails} />);
    });
    test('exists', () => {
        console.log(wrap.debug())
        expect(wrap.exists()).toBe(true);
    });
    test('renders TrailList', () => {
        expect(wrap.find('TrailList').length).toEqual(1);
    });

    //expect(wrap.containsMatchingElement(<div className="gallery"></div>)).toEqual(true);//to.equal(true)
    //test('it calls componentdidmount', () => {
    //const callback = jest.fn;
    //const spy = jest.spy
    //const wrapper = mount(<TrailDashboard />);
    // sinon.spy(TrailDashboard.prototype, 'componentDidMount');
    // const wrapper = mount(<TrailDashboard />);
    // expect(TrailDashboard.prototype.componentDidMount).to.have.property('callCount', 1);
    //})
});

//https://airbnb.io/enzyme/docs/api/mount.html