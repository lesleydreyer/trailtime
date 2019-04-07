import React from 'react';
import { shallow, mount } from 'enzyme';
import { TrailCreatePage } from './TrailCreatePage';
import { connect } from 'react-redux';
import AuthProtectedComponent from '../../auth/authProtectedComponent';

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
//const createTrail = jest.fn({ trail });

describe('TrailCreatePage', () => {
    test('exists', () => {
        const wrap = shallow(<TrailCreatePage />);
        expect(wrap.exists()).toBe(true);
    });

    /*
    test('', () => {
        const wrap = shallow(<TrailCreatePage />);
        wrap.instance().onCreateTrailFormSubmit(true);
        wrap.simulate('submit');//update();
        expect(wrap.toHave)
    });*/
    /*
        it('should fire submit callback', () => {
            const callback = jest.fn();
            const wrapper = mount(<TrailCreatePage onSubmit={callback} />);
            const trailName = 'testname';
            const trailRating = 'testrating';
            const trailLocation = 'testlocation';
            const trailDescripion = 'testdescription';
            const trailImage = 'testimageurl';
            wrapper.find('input[name="trailName"]').instance().value = trailName;//.simulate('change', {target: {value: trailName}});
            wrapper.find('input[name="trailRating"]').instance().value = trailRating;
            wrapper.find('input[name="trailLocation"]').instance().value = trailLocation;
            wrapper.find('input[name="trailDescripion"]').instance().value = trailDescripion;
            wrapper.find('input[name="trailImage"]').instance().value = trailImage;
            wrapper.simulate('submit');
            expect(callback).toHaveBeenCalled({ trailName: trailName, trailRating: trailRating, trailDescripion: trailDescripion, trailImage: trailImage });
        })*/

    //mount and props.handlesubmit
    //something like instance of
    //call function and make sure state updates
    //in form simulate submit and make sure it calls a function
    /* test('onTrailFormSubmit works', () => {
         const callback = jest.fn();
         const wrap = mount(<TrailCreatePage onCreateTrailFormSubmit={callback} trail={trail} jwt={jwt} />);
         wrap.simulate('submit');
         expect(callback).
         console.log(wrap.debug())
         expect(wrap.createTrail.toHaveBeenCalled());
         //expect(wrap.props.handleSubmit//)
     })*/
})