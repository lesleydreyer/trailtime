import React from 'react';
import { shallow } from 'enzyme';
import { TrailEditForm } from './TrailEditForm';

let wrap;

describe('TrailEditForm', () => {
    test('exists', () => {
        wrap = shallow(<TrailEditForm />);
        expect(wrap.equals()).toBe(true);
    })
})