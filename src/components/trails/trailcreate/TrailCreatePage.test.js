import React from 'react';
import { shallow } from 'enzyme';
import { TrailCreatePage } from './TrailCreatePage';


function setup() {
    const props = {
        onCreateTrailFormSubmit: jest.fn()
    }

    const enzymeWrapper = shallow(<TrailCreatePage {...props} />);

    return {
        props,
        enzymeWrapper
    }
}


let wrap;

describe('TrailCreatePage', () => {
    test('exists', () => {
        wrap = shallow(<TrailCreatePage />);
        expect(wrap.exists()).toBe(true);
    })
})