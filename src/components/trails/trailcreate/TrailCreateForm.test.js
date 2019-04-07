import React from 'react';
import { shallow, mount } from 'enzyme';
import { TrailCreateForm } from './TrailCreateForm';


describe('TrailCreateForm', () => {
    let wrap;
    beforeEach(() => {
        const callback = jest.fn();
        wrap = shallow(<TrailCreateForm onSubmit={callback} />);
    });
    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });
    test('form renders', () => {
        expect(wrap.find('#trail-create-form').length).toEqual(1);
        expect(wrap.find('#trail-create-form').length).not.toEqual(2);
        expect(wrap.find('#trail-edit-form').length).not.toEqual(1);
    });
    test('labels render', () => {
        expect(wrap.find('label').length).toEqual(5);
        expect(wrap.find('label').length).not.toEqual(3);
    });
    test('fields render', () => {
        expect(wrap.find('Field').length).toEqual(5);
        expect(wrap.find('Field').length).not.toEqual(3);
    });
    test('button renders', () => {
        expect(wrap.find('button').length).toEqual(1);
        expect(wrap.find('button').length).not.toEqual(5);
    });

    /*
    test('onTrailFormSubmit works', () => {
        const trail = {
            id: "testid",
            trailName: "testname",
            trailRating: "testrating",
            trailLocation: "testlocation",
            trailDescripion: "testdescription",
            trailImage: "testimage"
        }
        const jwt = 'abc';


        const callback = jest.fn();
        const wrap = mount((reduxForm)(<TrailCreateForm onSubmit={callback} trail={trail} jwt={jwt} />));
        wrap.simulate('submit');
        expect(callback).
            console.log(wrap.debug())
        expect(wrap.createTrail.toHaveBeenCalled());
        //expect(wrap.props.handleSubmit//)
    })*/
    /*
        it('should fire submit callback', () => {
            const callback = jest.fn();
            const wrapper = mount(<TrailCreateForm onSubmit={callback} />, { context: { _reduxForm: {} } });
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


    //test('form works', () => {
    //    wrap.find('#trailNameField').simulate('change', { target: { name: 'trailName', value: 'blahblah' } });
    //    expect(wrap.state(form.createtrail.values.trailName).toEqual('blahblah'))  //trailImage//trailDescription//trailLocation))
    //})
})