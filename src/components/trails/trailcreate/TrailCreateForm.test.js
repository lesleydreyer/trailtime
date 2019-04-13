import React from 'react';
import { shallow } from 'enzyme';
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
});