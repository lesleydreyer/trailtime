import React from 'react';
import { shallow } from 'enzyme';
import { TrailCreatePage } from './TrailCreatePage';
import * as actions from '../trailActions'

const trail = {
    id: "testid",
    trailName: "testname",
    trailRating: "testrating",
    trailLocation: "testlocation",
    trailDescripion: "testdescription",
    trailImage: "testimage"
}

const jwt = 'abc';
//const createTrail = () => { };
//const createTrail = jest.fn();


describe('TrailCreatePage', () => {
    test('exists', () => {
        const wrap = shallow(<TrailCreatePage />);
        expect(wrap.exists()).toBe(true);
    });

    it('createTrail dispatch works', () => {
        const dispatch = jest.fn();
        dispatch.mockClear();
        actions.createTrail({ trail, jwt })(dispatch);
        expect(dispatch.mock.calls.length).toBe(1);
        dispatch.mockClear();
    });    
});
    /*
        const mockCreateTrailAction = {
        type: 'CREATE_TRAIL'
    }
    jest.mock('../trailActions.js', () => {
        require.requireActual('../trailActions.js'),
        {
            createTrail: jest.fn().mockImplementation(() => {
                return mockCreateTrailAction
            })
        }
    });
    it('dispatches', () => {
       const dispatch = jest.fn();
        dispatch.mockClear();
        const wrap = shallow(<TrailCreatePage dispatch={dispatch} />);
        const instance = wrap.instance();
        instance.actions.createTrail({ trail, jwt })(dispatch);
        expect(dispatch).toHaveBeenCalledWith(createTrail({trail,jwt}))
        expect(dispatch.mock.calls.length).toBe(1);
        dispatch.mockClear();
    })*/
