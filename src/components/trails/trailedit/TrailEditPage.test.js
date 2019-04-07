import React from 'react';
import { shallow } from 'enzyme';
import { TrailEditPage } from './TrailEditPage';


let wrap;

describe('TrailEditPage', () => {
    test('exists', () => {
        const getTrail = () => { };
        const jwt = 'abc';
        const match = { params: { id: '123' } }
        const updateTrail = () => { };
        wrap = shallow(<TrailEditPage
            getTrail={getTrail}
            jwt={jwt}
            match={match}
            updateTrail={updateTrail}
        />);
        //console.log(wrap.debug())
        expect(wrap.exists()).toBe(true);
        expect(wrap.find('TrailEditForm').length).not.toEqual(1);
        //expect(wrap.containsMatchingElement(<TrailEditForm />))
    })
})
