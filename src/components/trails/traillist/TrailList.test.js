import React from 'react';
import { shallow, mount } from 'enzyme';
import { TrailList } from './TrailList';

let wrap;

describe('Trail List', () => {
    beforeEach(() => {
        const trails = [
            {
                id: '1',
                trailName: 'test1',
                trailRating: 'easy',
                trailLocation: 'Arizona',
                trailDescription: 'lorem 1 ipsum',
                trailImageUrl: 'test1'
            },
            {
                id: '2',
                trailName: 'test2',
                trailRating: 'hard',
                trailLocation: 'Colorado',
                trailDescription: 'loren 2 ipsum',
                trailImageUrl: 'test2'
            },
            {
                id: '3',
                trailName: 'test3',
                trailRating: 'medium',
                trailLocation: 'California',
                trailDescription: 'lorem 3 ipsum',
                trailImageUrl: 'test3'
            }
        ]
        wrap = shallow(<TrailList trails={trails} />);
    });

    test('exists', () => {
        //console.log(wrap.debug());
        expect(wrap.exists()).toBe(true);
    });

    test('renders div', () => {
        expect(wrap.find('div.gallery').length).toEqual(1);
        expect(wrap.find('div.gallery').length).not.toEqual(3);
    });

    test('renders TrailListItems', () => {
        expect(wrap.find('TrailListItem').length).toEqual(3);
        expect(wrap.find('TrailListItem').length).not.toEqual(5);
    });
});
