import { TRAIL_LIST, TRAIL_DETAILS } from "./trailsFakeData";
import { API } from '../../config';
//FAKE API to use before regular one is ready is const API = "https://jsonplaceholder.typicode.com";

export const GET_TRAILS_REQUEST = "GET_TRAILS";
const getTrailsAction = () => ({
    type: GET_TRAILS_REQUEST
});
export const GET_TRAILS_SUCCESS = "GET_TRAILS_SUCCESS";
const getTrailsSuccessAction = trails => ({
    type: GET_TRAILS_SUCCESS,
    trails
});
export const GET_TRAILS_FAILURE = "GET_TRAILS_FAILURE";
const getTrailsFailureAction = error => ({
    type: GET_TRAILS_FAILURE,
    error
});

export const getTrails = payload => dispatch => {
    dispatch(getTrailsAction());
    return fetch(`${API}/trail`,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                Authorization: `Bearer ${payload.jwt}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(trails => {
            dispatch(getTrailsSuccessAction(trails));
        })
        .catch(err => {
            dispatch(getTrailsFailureAction(err));
        });
};

export const GET_TRAIL_REQUEST = "GET_TRAIL";
const getTrailAction = () => ({
    type: GET_TRAIL_REQUEST
});
export const GET_TRAIL_SUCCESS = "GET_TRAIL_SUCCESS";
const getTrailSuccessAction = trail => ({
    type: GET_TRAIL_SUCCESS,
    trail
});
export const GET_TRAIL_FAILURE = "GET_TRAIL_FAILURE";
const getTrailFailureAction = error => ({
    type: GET_TRAIL_FAILURE,
    error
});

export const getTrail = payload => dispatch => {
    const { jwt, trailId } = payload;
    dispatch(getTrailAction());
    return fetch(`${API}/trail/${trailId}`,
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
        .then(trail => {
            dispatch(getTrailSuccessAction(trail));
        })
        .catch(err => {
            console.error(err);
            dispatch(getTrailFailureAction(err));
        });
};

export const CREATE_TRAIL_REQUEST = "CREATE_TRAIL";
const createTrailAction = trail => ({
    type: CREATE_TRAIL_REQUEST,
    trail
});
export const CREATE_TRAIL_SUCCESS = "CREATE_TRAIL_SUCCESS";
const createTrailSuccessAction = () => ({
    type: CREATE_TRAIL_SUCCESS
});
export const CREATE_TRAIL_FAILURE = "CREATE_TRAIL_FAILURE";
const createTrailFailureAction = error => ({
    type: CREATE_TRAIL_FAILURE,
    error
});
export const createTrail = payload => dispatch => {
    const { trail, jwt } = payload;
    dispatch(createTrailAction({ trail, jwt }));
    return fetch(`${API}/trail/`, {
        method: "POST",
        body: JSON.stringify(trail),
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
        .then(trail => {
            dispatch(createTrailSuccessAction());
            return trail;
        })
        .catch(err => {
            console.error(err);
            dispatch(createTrailFailureAction(err));
        });
};

export const UPDATE_TRAIL_REQUEST = "UPDATE_TRAIL";
const updateTrailAction = (trailId, trail) => ({
    type: UPDATE_TRAIL_REQUEST,
    trailId,
    trail
});
export const UPDATE_TRAIL_SUCCESS = "UPDATE_TRAIL_SUCCESS";
const updateTrailSuccessAction = trail => ({
    type: UPDATE_TRAIL_SUCCESS,
    trail
});
export const UPDATE_TRAIL_FAILURE = "UPDATE_TRAIL_FAILURE";
const updateTrailFailureAction = error => ({
    type: UPDATE_TRAIL_FAILURE,
    error
});

export const updateTrail = payload => dispatch => {
    const { trailId, trail, jwt } = payload;
    dispatch(updateTrailAction());
    return fetch(`${API}/trail/${trailId}`, {
        method: "PUT",
        body: JSON.stringify(trail),
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
        .then(trail => {
            dispatch(updateTrailSuccessAction(trail));
            dispatch(getTrails());
            return trail;
        })
        .catch(err => {
            console.error(err);
            dispatch(updateTrailFailureAction(err));
        });
};

export const DELETE_TRAIL_REQUEST = "DELETE_TRAIL";
const deleteTrailAction = trailId => ({
    type: DELETE_TRAIL_REQUEST,
    trailId
});
export const DELETE_TRAIL_SUCCESS = "DELETE_TRAIL_SUCCESS";
const deleteTrailSuccessAction = () => ({
    type: DELETE_TRAIL_SUCCESS
});
export const DELETE_TRAIL_FAILURE = "DELETE_TRAIL_FAILURE";
const deleteTrailFailureAction = error => ({
    type: DELETE_TRAIL_FAILURE,
    error
});

export const deleteTrail = payload => dispatch => {
    const { trailId, jwt } = payload;
    dispatch(deleteTrailAction());
    return fetch(`${API}/trail/${trailId}`, {
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
            dispatch(deleteTrailSuccessAction());
            dispatch(getTrails());
        })
        .catch(err => {
            console.error(err);
            dispatch(deleteTrailFailureAction(err));
        });
};