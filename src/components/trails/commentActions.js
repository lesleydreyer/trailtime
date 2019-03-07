const API = "https://jsonplaceholder.typicode.com";

export const SAVE_COMMENT = "SAVE_COMMENT";
export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
}

export const GET_COMMENTS_REQUEST = "GET_COMMENTS";
const getCommentsAction = () => ({
    type: GET_COMMENTS_REQUEST
});
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
const getCommentsSuccessAction = comments => ({
    type: GET_COMMENTS_SUCCESS,
    comments
});
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";
const getCommentsFailureAction = error => ({
    type: GET_COMMENTS_FAILURE,
    error
});

export const getComments = payload => dispatch => {
    const { jwt, trailId } = payload;
    dispatch(getCommentsAction());
    return fetch(`${API}/comments?postId=${trailId}`,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${jwt}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(comments => {
            dispatch(getCommentsSuccessAction(comments));
        })
        .catch(err => {
            dispatch(getCommentsFailureAction(err));
        });
};

export const GET_COMMENT_REQUEST = "GET_COMMENT";
const getCommentAction = () => ({
    type: GET_COMMENT_REQUEST
});
export const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
const getCommentSuccessAction = comment => ({
    type: GET_COMMENT_SUCCESS,
    comment
});
export const GET_COMMENT_FAILURE = "GET_COMMENT_FAILURE";
const getCommentFailureAction = error => ({
    type: GET_COMMENT_FAILURE,
    error
});

export const getComment = payload => dispatch => {
    const { jwt, trailId, commentId } = payload;
    dispatch(getCommentAction());
    return fetch(`${API}/comments?postId=${trailId}/${commentId}`,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${jwt}`
            }
        }
    )
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(comment => {
            dispatch(getCommentSuccessAction(comment));
        })
        .catch(err => {
            console.error(err);
            dispatch(getCommentFailureAction(err));
        });
};

export const CREATE_COMMENT_REQUEST = "CREATE_COMMENT";
const createCommentAction = comment => ({
    type: CREATE_COMMENT_REQUEST,
    comment
});
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS";
const createCommentSuccessAction = () => ({
    type: CREATE_COMMENT_SUCCESS
});
export const CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE";
const createCommentFailureAction = error => ({
    type: CREATE_COMMENT_FAILURE,
    error
});
export const createComment = payload => dispatch => {
    const { comment, trailId, jwt } = payload;
    dispatch(createCommentAction({ comment, jwt }));
    return fetch(`${API}/comments?postId=${trailId}`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(comment => {
            dispatch(createCommentSuccessAction());
            return comment;
        })
        .catch(err => {
            console.error(err);
            dispatch(createCommentFailureAction(err));
        });
};

export const UPDATE_COMMENT_REQUEST = "UPDATE_COMMENT";
const updateCommentAction = (commentId, comment) => ({
    type: UPDATE_COMMENT_REQUEST,
    commentId,
    comment
});
export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
const updateCommentSuccessAction = comment => ({
    type: UPDATE_COMMENT_SUCCESS,
    comment
});
export const UPDATE_COMMENT_FAILURE = "UPDATE_COMMENT_FAILURE";
const updateCommentFailureAction = error => ({
    type: UPDATE_COMMENT_FAILURE,
    error
});

export const updateComment = payload => dispatch => {
    const { commentId, trailId, comment, jwt } = payload;
    dispatch(updateCommentAction());
    return fetch(`${API}/comments?postId=${trailId}/${commentId}`, {
        method: "PUT",
        body: JSON.stringify(comment),
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(comment => {
            dispatch(updateCommentSuccessAction(comment));
            dispatch(getComments());
            return comment;
        })
        .catch(err => {
            console.error(err);
            dispatch(updateCommentFailureAction(err));
        });
};

export const DELETE_COMMENT_REQUEST = "DELETE_COMMENT";
const deleteCommentAction = commentId => ({
    type: DELETE_COMMENT_REQUEST,
    commentId
});
export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const deleteCommentSuccessAction = () => ({
    type: DELETE_COMMENT_SUCCESS
});
export const DELETE_COMMENT_FAILURE = "DELETE_COMMENT_FAILURE";
const deleteCommentFailureAction = error => ({
    type: DELETE_COMMENT_FAILURE,
    error
});

export const deleteComment = payload => dispatch => {
    const { trailId, commentId, jwt } = payload;
    dispatch(deleteCommentAction());
    return fetch(`${API}/comments?postId=${trailId}/${commentId}`, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            "Content-type": "application/json",
            Authorization: `Bearer ${jwt}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            dispatch(deleteCommentSuccessAction());
            dispatch(getComments());
        })
        .catch(err => {
            console.error(err);
            dispatch(deleteCommentFailureAction(err));
        });
};
