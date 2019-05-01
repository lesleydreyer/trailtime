import React from 'react';
import { shallow } from 'enzyme';
import { TrailDetailInfo } from './TrailDetailInfo';
import { deleteTrail } from '../trailActions';

describe('TrailDetailInfo', () => {
    const getTrail = () => { };
    const onTrailDelete = () => { };

    const auth = {user: { id: '123' }}
    const user = { id: '123' };
    const jwt = { jwt: 'abc' };

    const trail = {
        id: "testid",
        trailName: "testname",
        trailRating: "testrating",
        trailLocation: "testlocation",
        trailDescription: "testdescription",
        trailImage: "testimage",
        user: {
            _id: '123',
            username: 'testname',
            email: 'test@gmail.com'
        }
    }

    const wrap = shallow(
        <TrailDetailInfo
            getTrail={getTrail}
            onTrailDelete={onTrailDelete}
            auth={auth}
            trail={trail}
        />
    );

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });

    //console.log(wrap.debug())

    test('renders passed in prop values', () => {
        expect(wrap.find('img').prop('src')).toBe('testimage');
        expect(wrap.find('h1').text()).toBe('testname');
        expect(wrap.find('#description').text()).toBe('testdescription');
        expect(wrap.find('#location').text()).toBe('testlocation');
        expect(wrap.find('#rating').text()).toBe('testrating');
    });


    test('logged out state is correct', () => {
        wrap.instance().setState({ loggedInUserCreatedTrail: false });
        expect(wrap.instance().state.loggedInUserCreatedTrail).toEqual(false);
    });

    test('if user created trail set state', () => {
        if (trail.user._id === user.id) {
            wrap.instance().setState({ loggedInUserCreatedTrail: true });
            expect(wrap.instance().state.loggedInUserCreatedTrail).toEqual(true);
            wrap.instance().setState({ loggedInUserCreatedTrail: false });//reset to default false for other tests
        } else {
            expect(wrap.instance().state.loggedInUserCreatedTrail).toEqual(false);
        }
    });


    test('renders correct buttons if user did not create trail', () => {
        expect(wrap.find('#emailCreatorButton').text()).toBe('Email Trail Creator Your Suggested Updates');
        expect(wrap.find('#emailCreatorButton').length).toBe(1);
        expect(wrap.find('#deleteTrailButton').length).toBe(0);//.text()).not.toBe('Delete Trail');
        expect(wrap.find('#editTrailButton').length).toBe(0);//.text()).not.toBe('Edit Trail');
    });

    test('renders correct buttons if user created trail', () => {
        wrap.setState({ loggedInUserCreatedTrail: true });
        expect(wrap.find('#emailCreatorButton').length).toBe(0);//.text()).not.toBe('Email Trail Creator Your Suggested Updates');
        expect(wrap.find('#deleteTrailButton').text()).toBe('Delete Trail');
        expect(wrap.find('#deleteTrailButton').length).toBe(1);
        expect(wrap.find('#editTrailButton').text()).toBe('Edit Trail Info');
        expect(wrap.find('#editTrailButton').length).toBe(1);
    });


    test('deleteTrail dispatches', () => {
        const dispatch = jest.fn();
        dispatch.mockClear();
        deleteTrail({ trailId: trail.id, jwt: jwt })(dispatch);
        expect(dispatch.mock.calls.length).toEqual(1);
        dispatch.mockClear();
    });
});