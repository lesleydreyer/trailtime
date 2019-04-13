import React from 'react';
import { shallow } from 'enzyme';
import { TrailEditForm } from './TrailEditForm';


describe('TrailEditForm', () => {
    let wrap;
    beforeEach(() => wrap = shallow(<TrailEditForm />));

    test('exists', () => {
        expect(wrap.exists()).toBe(true);
    });
    test('form renders', () => {
        expect(wrap.find('#trail-edit-form').length).toEqual(1);
        expect(wrap.find('#trail-edit-form').length).not.toEqual(2);
        expect(wrap.find('#trail-create-form').length).not.toEqual(1);
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
});

/*test('submits', () => {
    const callback = jest.fn();
    const wrapper = mount(<TrailEditForm onSubmit={callback} />);
    const values = { trailName: trail.trailName, trailRating: trail.trailRating, trailLocation: trail.trailLocation, trailDescripion: trail.trailLocation };
    console.log(wrapper.debug());
    wrapper.instance().values = values;
    wrapper.instance().jwt = match.jwt;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalled();
    wrapper.unmount();
})*/

/*describe('TrailEditForm inputs', () => {
    test('renders trailName input correct', () => {
        const wrap = mount(<input name="trailName" placeholder="name of trail" />);
        const input = wrap.find('input');
        expect(input).toHaveLength(1);
        expect(input).not.toHaveLength(2);
        expect(input.prop('name')).toEqual('trailName');
        expect(input.prop('name')).not.toEqual('aaa');
        expect(input.prop('placeholder')).toEqual('name of trail');
        expect(input.prop('placeholder')).not.toEqual('aaa');
        wrap.unmount();
    });
});*/