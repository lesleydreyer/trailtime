import React from 'react';
import { shallow, mount } from 'enzyme';
import { TrailCreateForm } from './TrailCreateForm';

let wrap;

describe('TrailCreateForm', () => {
    test('exists', () => {
        wrap = shallow(<TrailCreateForm />);
        expect(wrap.exists()).toBe(true);
    })

    it('should fire submit callback', () => {
        const callback = jest.fn();
        const wrapper = mount(<TrailCreateForm onSubmit={callback} />);
        const trailName = 'testname';
        const trailRating = 'testrating';
        const trailLocation = 'testlocation';
        const trailDescripion = 'testdescription';
        const trailImage = 'testimageurl';
        wrapper.find('input[name="trailName"]').instance().value = trailName;
        wrapper.find('input[name="trailRating"]').instance().value = trailRating;
        wrapper.find('input[name="trailLocation"]').instance().value = trailLocation;
        wrapper.find('input[name="trailDescripion"]').instance().value = trailDescripion;
        wrapper.find('input[name="trailImage"]').instance().value = trailImage;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    })
})