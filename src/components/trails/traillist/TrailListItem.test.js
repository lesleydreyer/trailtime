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

const callback = jest.fn();

function setup() {
    const props = {
        trail,
        imageUrl: trail.trailImage,
        divStyle,
        key: trail.id,
        callback: callback
    }
    const wrapper = shallow(<TrailListItem {...props} />)
    return {
        props,
        wrapper
    }
}

describe('TrailListItem', () => {
    test('exists', () => {
        const { wrapper } = setup();
        expect(wrapper.exists()).toBe(true);
    })
    test('renders outer div', () => {
        const { wrapper } = setup();
        expect(wrapper.closest('div').hasClass('col-6')).toBe(true);
    });
    test('renders inner divs and spans', () => {
        const { wrapper } = setup();
        console.log(wrapper.debug())
        expect(wrapper.find('div').length).toEqual(2);
        expect(wrapper.find('span').length).toEqual(4);
        expect(wrapper.find('div.trailListItem')).toHaveLength(1);
        expect(wrapper.find('span.text')).toHaveLength(1);
        expect(wrapper.find('span.trailName')).toHaveLength(1);
        expect(wrapper.find('span.locationRating')).toHaveLength(1);
        expect(wrapper.find('span.linkInfo')).toHaveLength(1);
        expect(wrapper.find('span.linkInfo').text()).toEqual('More Info >');
    });
    test('trail prop values passed through', () => {
        const { wrapper } = setup();
        expect(wrapper.find('span.trailName').text()).toEqual('testname');
        expect(wrapper.find('span.trailName').text()).not.toEqual('aaaa');
        expect(wrapper.find('span.locationRating').text()).toContain('testlocation');
        expect(wrapper.find('span.locationRating').text()).not.toContain('aaaa');
        expect(wrapper.find('span.locationRating').text()).toContain('testrating');
        expect(wrapper.find('span.locationRating').text()).not.toContain('aaaa');
    });
    /*test('more info link works', () => {
        const { wrapper } = setup();
        const link = wrapper.find('Link');
        //expect(wrapper.find('Link')).toHaveLength(1);
        //link.simulate('click', { preventDefault() { } });
        //expect(callback).toHaveBeenCalled();
    });*/

    //


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