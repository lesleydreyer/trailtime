import React from 'react';
import { shallow } from 'enzyme';
import { TrailDetailInfo } from './TrailDetailInfo';

describe('TrailDetailInfo', () => {
    const getTrail = () => { };
    const onTrailDelete = () => { };
    //this.props.trail.user._id === this.props.user)
    const _id = { trail: { user: { _id: '123' } } };
    const trail = {
        id: "testid",
        trailName: "testname",
        trailRating: "testrating",
        trailLocation: "testlocation",
        trailDescription: "testdescription",
        trailImage: "testimage",
        user: {
            id: '123',
            username: 'testname',
            email: 'test@gmail.com'
        }
    }
    const wrap = shallow(<TrailDetailInfo
        getTrail={getTrail}
        onTrailDelete={onTrailDelete}
        _id={_id}
        user={trail.user}
        trail={trail} />);


    const _id2 = { trail: { user: { _id: '456' } } }
    const loggedInWrap = shallow(<TrailDetailInfo
        getTrail={getTrail}
        onTrailDelete={onTrailDelete}
        _id={_id2}
        user={trail.user}
        trail={trail} />);


    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });
    console.log(wrap.debug())
    test('renders passed in prop values', () => {
        expect(wrap.find('img').prop('src')).toBe('testimage');
        expect(wrap.find('h1').text()).toBe('testname');
        expect(wrap.find('#description').text()).toBe('testdescription');
        expect(wrap.find('#location').text()).toBe('testlocation');
        expect(wrap.find('#rating').text()).toBe('testrating');
    });
    test('renders correct buttons if logged out', () => {
        expect(wrap.find('button').text()).toBe('Email Trail Creator Your Suggested Updates');
        expect(wrap.find('button').text()).not.toBe('Delete Trail');
        expect(wrap.find('button').text()).not.toBe('Edit Trail');
    });
    test('renders correct buttons if logged in', () => {
        console.log(loggedInWrap.debug())
        //console.log('STATE', loggedInWrap.state)
        //loggedInWrap.setState({ auth: { isLoggedIn: true } })
        expect(loggedInWrap.find('button').text()).not.toBe('Email Trail Creator Your Suggested Updates');
        expect(loggedInWrap.find('button').text()).toBe('Delete Trail');
        expect(loggedInWrap.find('button').text()).toBe('Edit Trail');
    })
})