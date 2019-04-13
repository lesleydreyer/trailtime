import React from 'react';
import { shallow } from 'enzyme';
import { TrailEditPage } from './TrailEditPage';
import * as actions from '../trailActions';


describe('TrailEditPage', () => {
    const trail = {
        id: "testid",
        trailName: "testname",
        trailRating: "testrating",
        trailLocation: "testlocation",
        trailDescripion: "testdescription",
        trailImage: "testimage"
    }
    const jwt = 'abc';
    const match = { params: { id: 'abc' } };
    const getTrail = () => { };
    const updateTrail = () => { };
    const wrap = shallow(<TrailEditPage
        getTrail={getTrail}
        jwt={jwt}
        match={match}
        updateTrail={updateTrail}
    />);

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });

    test('Component did mount dispatches getTrail', () => {
        const getTrail = jest.fn();//not dispatch since did mapdispatch in this component  
        const wrap = shallow(<TrailEditPage
            getTrail={getTrail}
            jwt={jwt}
            match={match}
            updateTrail={updateTrail}
        />);
        expect(getTrail).toHaveBeenCalled();
    });

    test('getTrail dispatch works', () => {
        const dispatch = jest.fn();
        dispatch.mockClear();
        actions.getTrail({ trailId: trail.id, jwt: jwt })(dispatch);
        expect(dispatch.mock.calls.length).toEqual(1);
        dispatch.mockClear();
    });

    test('updateTrail dispatch works', () => {
        const dispatch = jest.fn();
        dispatch.mockClear();
        actions.updateTrail({ trailId: trail.id, trail: trail, jwt: jwt })(dispatch);
        expect(dispatch.mock.calls.length).toEqual(1);
        dispatch.mockClear();
    });
});
