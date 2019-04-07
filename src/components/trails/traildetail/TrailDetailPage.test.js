import React from 'react';
import { shallow } from 'enzyme';
import { TrailDetailPage } from './TrailDetailPage';
import { getTrail } from '../trailActions';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

//let wrap;
//const middlewares = [thunk];
//const mockStore = configureMockStore(middlewares);

describe('TrailDetailPage', () => {
    test('exists', () => {
        const dispatch = () => { };
        const jwt = '123';
        const match = { params: { id: '123' } };
        wrap = shallow(<TrailDetailPage dispatch={dispatch} jwt={jwt} match={match} />);
        expect(wrap.exists()).toBe(true);
        //expect(wrap.find('p')).toBe(true)
    });

    test('Dispatches getTrail', () => {
        const jwt = '123';
        const match = { params: { id: '123' } };
        const dispatch = jest.fn();
        const wrapper = shallow(<TrailDetailPage dispatch={dispatch} jwt={jwt} match={match} />);
        //const instance = wrapper.instance();
        wrapper.getTrail(jwt, match);
        expect(dispatch).toHaveBeenCalledWith(getTrail(jwt, match));

    })
    /* 
        it('Dispatches addCard from addCard', () => {
        
        const wrapper = shallow(
            <List cards={[]} index={index} dispatch={dispatch} />
        );
        const instance = wrapper.instance();
        const text = seedCards[0].text;
        instance.addCard(text);
        expect(dispatch).toHaveBeenCalledWith(addCard(text, index));
    });
    */
})