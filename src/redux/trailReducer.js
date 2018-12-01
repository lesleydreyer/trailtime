import * as actions from '../components/trails/trailActions';

const initialState = {
    loading: false,
    error: null,
    trailList: [],
    trailDetails: null
};

export default function reducer(state = initialState, action) {
    // REQUEST START
    if (
        action.type === actions.CREATE_TRAIL_REQUEST ||
        action.type === actions.UPDATE_TRAIL_REQUEST ||
        action.type === actions.DELETE_TRAIL_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null
        };
    } else if (
        action.type === actions.GET_TRAILS_REQUEST ||
        action.type === actions.GET_TRAIL_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null,
            trailDetails: null,
            trailList: []
        };
        // REQUEST ERROR
    } else if (
        action.type === actions.GET_TRAILS_FAILURE ||
        action.type === actions.GET_TRAIL_FAILURE ||
        action.type === actions.CREATE_TRAIL_FAILURE ||
        action.type === actions.UPDATE_TRAIL_FAILURE ||
        action.type === actions.DELETE_TRAIL_FAILURE
    ) {
        return { ...state, loading: false, error: action.error };
        // REQUEST SUCCESS
    } else if (action.type === actions.GET_TRAILS_SUCCESS) {
        return { ...state, loading: false, trailList: action.trails };
    } else if (action.type === actions.GET_TRAIL_SUCCESS) {
        return { ...state, loading: false, trailDetails: action.trail };
    } else if (action.type === actions.CREATE_TRAIL_SUCCESS) {
        return { ...state, loading: false, trailDetails: action.trail };
    } else if (action.type === actions.UPDATE_TRAIL_SUCCESS) {
        return { ...state, loading: false, trailDetails: action.trail };
    } else if (action.type === actions.DELETE_TRAIL_SUCCESS) {
        return { ...state, loading: false };
    }
    return state;
}