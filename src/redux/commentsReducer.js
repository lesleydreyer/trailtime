import * as actions from '../components/trails/commentActions';

const initialState = {
    loading: false,
    error: null,
    commentList: [],
    commentDetails: null
};

export default function reducer(state = initialState, action) {
    // REQUEST START
    if (
        action.type === actions.CREATE_COMMENT_REQUEST ||
        action.type === actions.UPDATE_COMMENT_REQUEST ||
        action.type === actions.DELETE_COMMENT_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null
        };
    } else if (
        action.type === actions.GET_COMMENTS_REQUEST ||
        action.type === actions.GET_COMMENT_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null,
            commentDetails: null,
            commentList: []
        };
        // REQUEST ERROR
    } else if (
        action.type === actions.GET_COMMENTS_FAILURE ||
        action.type === actions.GET_COMMENT_FAILURE ||
        action.type === actions.CREATE_COMMENT_FAILURE ||
        action.type === actions.UPDATE_COMMENT_FAILURE ||
        action.type === actions.DELETE_COMMENT_FAILURE
    ) {
        return { ...state, loading: false, error: action.error };
        // REQUEST SUCCESS
    } else if (action.type === actions.GET_COMMENTS_SUCCESS) {
        return { ...state, loading: false, commentList: action.comments };
    } else if (action.type === actions.GET_COMMENT_SUCCESS) {
        return { ...state, loading: false, commentDetails: action.comment };
    } else if (action.type === actions.CREATE_COMMENT_SUCCESS) {
        return { ...state, loading: false, commentDetails: action.comment };
    } else if (action.type === actions.UPDATE_COMMENT_SUCCESS) {
        return { ...state, loading: false, commentDetails: action.comment };
    } else if (action.type === actions.DELETE_COMMENT_SUCCESS) {
        return { ...state, loading: false };
    }
    return state;
}