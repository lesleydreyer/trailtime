//import axios from 'axios';
//import { UNSPLASH_CLIENT_ID } from '../../config';
const UNSPLASH_CLIENT_ID = `${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
//const API = "https://jsonplaceholder.typicode.com";
const API = "https://api.unsplash.com";

export const SAVE_PHOTO = "SAVE_PHOTO";
export function savePhoto(photo) {
    return {
        type: SAVE_PHOTO,
        payload: photo
    };
}
export const GET_SELECTED_PHOTO = "GET_SELECTED_PHOTO";
export function getSelectedPhoto(selectImage) {
    return {
        type: GET_SELECTED_PHOTO,
        selectImage
    }
}

export const GET_PHOTOS_REQUEST = "GET_PHOTOS";
const getPhotosAction = () => ({
    type: GET_PHOTOS_REQUEST
});
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
const getPhotosSuccessAction = photos => ({
    type: GET_PHOTOS_SUCCESS,
    photos
});
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";
const getPhotosFailureAction = error => ({
    type: GET_PHOTOS_FAILURE,
    error
});
export const PHOTOS_ARE_LOADING = "PHOTOS_ARE_LOADING";
export function photosAreLoading(bool) {
    return {
        type: 'PHOTOS_ARE_LOADING',
        loading: bool
    };
}

export const getPhotos = payload => dispatch => {
    const { trailId } = payload;
    dispatch(getPhotosAction());
    dispatch(photosAreLoading(true));
    fetch(`${API}/photos?albumId=${trailId}`,
        {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-type": "application/json",
                //Authorization: `Bearer ${payload.jwt}`,
                Authorization: `Client-ID ${UNSPLASH_CLIENT_ID}`
            }
        })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            dispatch(photosAreLoading(false));
            return res.json();
        })
        .then(photos => {
            //.then((res)=>res.json())
            //.then diespach success))
            //.catch dispatcherror
            //console.log('photos', photos)
            dispatch(getPhotosSuccessAction(photos));
            //return photos => dispatch(receivePhotos(payload, photos))
            //dispatch(receivePhotos(payload, photos))
        })
        .then(
            photos => dispatch(receivePhotos(payload, photos))
        )
        .catch(err => {
            dispatch(getPhotosFailureAction(err));
        });
};

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export function receivePhotos(payload, json) {
    console.log('RECEIVE', json)
    return {
        type: RECEIVE_PHOTOS,
        payload,
        photoList: json,//.map(child => child),
        selectedImage: json(0)
    }
}

export const CREATE_PHOTO_REQUEST = "CREATE_PHOTO";
const createPhotoAction = photo => ({
    type: CREATE_PHOTO_REQUEST,
    photo
});
export const CREATE_PHOTO_SUCCESS = "CREATE_PHOTO_SUCCESS";
const createPhotoSuccessAction = () => ({
    type: CREATE_PHOTO_SUCCESS
});
export const CREATE_PHOTO_FAILURE = "CREATE_PHOTO_FAILURE";
const createPhotoFailureAction = error => ({
    type: CREATE_PHOTO_FAILURE,
    error
});
export const createPhoto = payload => dispatch => {
    const { photo, trailId, jwt } = payload;
    dispatch(createPhotoAction({ photo, jwt }));
    return fetch(`${API}/photos?albumId=${trailId}`, {
        method: "POST",
        body: JSON.stringify(photo),
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
        .then(photo => {
            dispatch(createPhotoSuccessAction());
            return photo;
        })
        .catch(err => {
            console.error(err);
            dispatch(createPhotoFailureAction(err));
        });
};


/*
const LOAD_IMAGES = 'LOAD_IMAGES';
const SELECT_IMAGE = 'SELECT_IMAGE';

export function selectImage(image) {
  return {
    type: SELECT_IMAGE,
    image
  }
}

export function loadImages() {
  return {
    type: LOAD_IMAGES
  }
}///////////////////////

function requestPhotos(payload) {
  return {
    type: REQUEST_PHOTOS,
    payload
  }
}

function receivePhotos(payload, json) {
  return {
    type: RECEIVE_PHOTOS,
    payload,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPhotos(payload) {
  return dispatch => {
    dispatch(requestPhotos(payload))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(payload, json)))
  }
}
*/