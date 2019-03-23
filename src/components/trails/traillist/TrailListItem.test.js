import React from 'react';
import { shallow } from 'enzyme';
import TrailListItem from './TrailListItem';


let wrap;

describe('TrailListItem', () => {
    test('exists', () => {
        wrap = shallow(<TrailListItem />);
        expect(wrap.exists()).toBe(true);
    })
})

//ENZYME API
//static - render component and return plain html
//shallow - render just given component, none of its children
//full dom - render component and all of its children & let us modify 

/*
let wrapped;

beforeEach(() => {
    wrapped = shallow(<TrailListItem />)
})

it('renders a nav bar', () => {
    expect(wrapped.find(TrailListItem).length).toEqual(1);
});*/