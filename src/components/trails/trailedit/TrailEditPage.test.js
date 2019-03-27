import React from 'react';
import { shallow } from 'enzyme';
import { TrailEditPage } from './TrailEditPage';


function setup() {
    const props = {
        onEditTrailFormSubmit: jest.fn(),
        getTrail: jest.fn()
    }

    const enzymeWrapper = shallow(<TrailEditPage {...props} />);

    return {
        props,
        enzymeWrapper
    }
}


let wrap;

describe('TrailEditPage', () => {
    test('exists', () => {
        wrap = shallow(<TrailEditPage />);
        expect(wrap.exists()).toBe(true);
    })
})
