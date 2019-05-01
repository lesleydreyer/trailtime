import React from 'react';
import { shallow } from 'enzyme';
import { TrailDashboard } from './TrailDashboard';
import { getTrails } from '../trailActions';


let wrap;
let jwt;
let auth;

describe('TrailDashboard', () => {
    beforeEach(() => {
        const getTrails = () => { };
        auth = { jwt: 'abc' };
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
        wrap = shallow(<TrailDashboard getTrails={getTrails} auth={auth} trails={trails} />);
    });

    test('exists', () => {
        console.log(wrap.debug())
        expect(wrap.exists()).toBe(true);
    });

  
    test('getTrails works', () => {
        const dispatch = jest.fn();
        dispatch.mockClear();
        getTrails({ auth })(dispatch);//or * as actions at top and actions.getTrails here
        expect(dispatch.mock.calls.length).toEqual(1);
        dispatch.mockClear();
    });
});