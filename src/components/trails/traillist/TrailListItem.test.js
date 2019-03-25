import React from 'react';
import { shallow } from 'enzyme';
import TrailListItem from './TrailListItem';


const trail = {
    id: "testid",
    trailName: "testname",
    trailRating: "testrating",
    trailLocation: "testlocation",
    trailDescripion: "testdescription",
    trailImage: "testimage"
}
const divStyle = {
    WebkitTransition: 'all',
    msTransition: 'all',
    backgroundImage: 'url(' + trail.trailImage + ')',
};

function setup() {
    const props = {
        trail,
        imageUrl: trail.trailImage,
        divStyle
    }
    const enzymeWrapper = shallow(<TrailListItem {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('TrailListItem', () => {
    test('renders outer div', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.closest('div').hasClass('col-6')).toBe(true);
    })
    test('renders inner', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('div').length).toEqual(2);
        expect(enzymeWrapper.find('span').length).toEqual(4);
        expect(enzymeWrapper.find('div.trailListItem')).toHaveLength(1);
        expect(enzymeWrapper.find('span.text')).toHaveLength(1);
        expect(enzymeWrapper.find('span.trailName')).toHaveLength(1);
        expect(enzymeWrapper.find('span.locationRating')).toHaveLength(1);
        expect(enzymeWrapper.find('span.linkInfo')).toHaveLength(1);
        expect(enzymeWrapper.find('span.linkInfo').text()).toEqual('More Info >');
    })
})

/*let wrap;

describe('TrailListItem', () => {
    //const trailName = 'testname';
    //const trailRating = 'testrating';
    //const trailLocation = 'testlocation';
    //const trailDescripion = 'testdescription';
    //const trailImage = 'testimageurl';
    const trail = {
        id: "testid",
        trailName: "testname",
        trailRating: "testrating",
        trailLocation: "testlocation",
        trailDescripion: "testdescription",
        trailImage: "testimage"
    }
    const imageUrl = "test";
    test('exists', () => {
        wrap = shallow(<TrailListItem includedProp={trail} trailImage={imageUrl} />);
        //expect(wrap.exists()).toBe(true);
        const instance = wrapper.instance();
        expect(instance).to.equal(null);
        //expect(wrapper.props().includedProp).to.equal(trail);
    })
})
*/
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