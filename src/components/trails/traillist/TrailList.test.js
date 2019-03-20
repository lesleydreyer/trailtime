import React from 'react';
import { shallow } from 'enzyme';
import TrailList from './TrailList';
import TrailListItem from './TrailListItem';

//ENZYME API
//static - render component and return plain html
//shallow - render just given component, none of its children
//full dom - render component and all of its children & let us modify 

/*
let wrapped;

beforeEach(() => {
    wrapped = shallow(<TrailList />)
})

it('renders a nav bar', () => {
    expect(wrapped.find(TrailListItem).length).toEqual(1);
});*/