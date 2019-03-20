import trailReducer from './trailReducer';
import { CREATE_TRAIL_REQUEST } '../components/trails/trailActions';

describe('Trail reducer', () => {
    const testInitialState = {
        loading: false,
        error: null,
        trailList: [],
        trailDetails: null
    };

    it('Should set the initial state when nothing is passed in', () => {
        const state = trailReducer(undefined, { type: '_UNKNOWN' });
        expect(state).toEqual({
            loading: false,
            error: null,
            trailList: [],
            trailDetails: null
        })
    })
})