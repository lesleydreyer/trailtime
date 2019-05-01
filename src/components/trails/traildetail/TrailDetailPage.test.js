import React from 'react';
import { shallow } from 'enzyme';
import { TrailDetailPage } from './TrailDetailPage';
import { getTrail, deleteTrail } from '../trailActions';

const trail = {
    id: "testid",
    trailName: "testname",
    trailRating: "testrating",
    trailLocation: "testlocation",
    trailDescripion: "testdescription",
    trailImage: "testimage"
};

const auth = { jwt: 'abc' };
const match = { params: { id: '123' } };
const dispatch = jest.fn();
const wrap = shallow(<TrailDetailPage dispatch={dispatch} auth={auth} match={match} trail={trail} />);


describe('TrailDetailPage', () => {

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });

    test('Shows Loading if no trail', () => {
        const initialwrap = shallow(
            <TrailDetailPage
                dispatch={dispatch}
                auth={auth}
                match={match} />
        );
        expect(initialwrap.find('p').length).toBe(1);
        expect(initialwrap.find('p').text()).toBe('Loading...');
    });

    test('getTrail dispatch works', () => {
        dispatch.mockClear();
        getTrail({ trail: trail, auth: auth })(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls.length).toBe(1);
        dispatch.mockClear();
    });

    it('deleteTrail dispatch works', () => {
        dispatch.mockClear();
        deleteTrail({ trailId: trail.id, auth: auth })(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls.length).toBe(1);
        dispatch.mockClear();
    });
});