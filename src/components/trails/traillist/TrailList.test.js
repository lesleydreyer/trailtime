import React from 'react';
import { shallow } from 'enzyme';
import TrailList from './TrailList';
import TrailListItem from './TrailListItem';
//import TrailListItem from './TrailListItem';

describe('Trail List', () => {
    test('exists', () => {
        const wrap = shallow(<TrailList />);
        expect(wrap.exists()).toBe(true);
    });
    test('has classname of gallery', () => {
        const wrap = shallow(<TrailList />);
        expect(wrap.find('.gallery').length).toEqual(1);
        //expect(wrap.matchesElement(<TrailListItem />)).to.equal(true);
        //expect(wrap.hasClass('.gallery')).toEqual(true);
    });
    //test('has TrailListItem', () => {
    const wrap = shallow(<TrailList />);
    //expect(wrap.find('<TrailListItem />').length).toEqual(1);
    //expect(wrap.contains(<TrailListItem />)).toEqual(true);
    //})
})


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



//////////////////////////////
/*import { shallow } from 'enzyme'
import { TrailDashboard } from './TrailDashboard';

describe('<TrailDashboard />', () => {
    test('It renders', () => {
        const wrapper = shallow(<TrailDashboard jwt={123} trails={[]} />);
        wrapper.exists();
    })
})
*/