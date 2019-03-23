import React from 'react';
import { shallow } from 'enzyme';
import { TrailDetailPage } from './TrailDetailPage';

let wrap;

describe('TrailDetailPage', () => {
    wrap = shallow(<TrailDetailPage />);
    expect(wrap.exists()).toBe(true);
})