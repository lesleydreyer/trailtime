import trailReducer from './trailReducer';
import * as actions from '../components/trails/trailActions';

describe('trailReducer', () => {
    const initialTestState = {
        loading: false,
        error: null,
        trailList: [],
        trailDetails: null
    };
    const testTrailList = [
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
    const testTrail = {
        id: "testid",
        trailName: "testname",
        trailRating: "testrating",
        trailLocation: "testlocation",
        trailDescription: "testdescription",
        trailImage: "testimage",
        user: {
            id: '123',
            username: 'testname',
            email: 'test@gmail.com'
        }
    }

    const testError = { message: 'an error occurred' };

    it('Should set the initial state when nothing is passed in', () => {
        const state = trailReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual({
            loading: false,
            error: null,
            trailList: [],
            trailDetails: null
        })
    });

    it('Should return the current stat on an unknown action', () => {
        let currentState = {};
        const state = trailReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });


    it('Should createTrailAction', () => {
        const state = trailReducer(initialTestState, actions.createTrailAction(testTrail));
        expect(state).toEqual({ ...state, loading: true, error: null });
    });

    it('Should updateTrailRequest', () => {
        const state = trailReducer(initialTestState, actions.updateTrailAction(testTrail.id, testTrail));
        expect(state).toEqual({ ...state, loading: true, error: null });
    });

    it('Should deleteTrailRequest', () => {
        const state = trailReducer(initialTestState, actions.deleteTrailAction(testTrail.id));
        expect(state).toEqual({ ...state, loading: true, error: null });
    });

    it('Should getTrailsAction', () => {
        const state = trailReducer(initialTestState, actions.getTrailsAction(testTrail.id));
        expect(state).toEqual({ ...state, loading: true, error: null, trailDetails: null, trailList: [] });
    });

    it('Should getTrailAction', () => {
        const state = trailReducer(initialTestState, actions.getTrailAction(testTrail.id));
        expect(state).toEqual({ ...state, loading: true, error: null, trailDetails: null, trailList: [] });
    });

    it('Should getTrailsFailureAction', () => {
        const state = trailReducer(initialTestState, actions.getTrailsFailureAction(testError));
        expect(state).toEqual({ ...state, loading: false, error: testError });
    });

    it('Should getTrailFailureAction', () => {
        const state = trailReducer(initialTestState, actions.getTrailFailureAction(testError));
        expect(state).toEqual({ ...state, loading: false, error: testError });
    });

    it('Should updateTrailFailureAction', () => {
        const state = trailReducer(initialTestState, actions.updateTrailFailureAction(testError));
        expect(state).toEqual({ ...state, loading: false, error: testError });
    });

    it('Should deleteTrailFailureAction', () => {
        const state = trailReducer(initialTestState, actions.deleteTrailFailureAction(testError));
        expect(state).toEqual({ ...state, loading: false, error: testError });
    });

    it('Should getTrailsSuccessAction', () => {
        const state = trailReducer(initialTestState, actions.getTrailsSuccessAction(testTrailList));
        expect(state).toEqual({ ...state, loading: false, trailList: testTrailList });
    });

    it('Should getTrailSuccessAction', () => {
        const state = trailReducer(initialTestState, actions.getTrailSuccessAction(testTrail));
        expect(state).toEqual({ ...state, loading: false, trailDetails: testTrail });
    });

    it('Should createTrailSuccessAction', () => {
        //const state = trailReducer(initialTestState, { type: 'CREATE_TRAIL_SUCCESS' });
        //const state = trailReducer(initialTestState, actions.createTrailSuccessAction());
        //expect(state).toEqual({ ...state, loading: false, trailDetails: testTrail });
    });

    it('Should updateTrailSuccessAction', () => {
        const state = trailReducer(initialTestState, actions.updateTrailSuccessAction(testTrail));
        expect(state).toEqual({ ...state, loading: false, trailDetails: testTrail });
    });

    it('Should deleteTrailSuccessAction', () => {
        const state = trailReducer(initialTestState, actions.deleteTrailSuccessAction());
        expect(state).toEqual({ ...state, loading: false });
    });

})