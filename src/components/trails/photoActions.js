//import axios from 'axios';
//import { UNSPLASH_CLIENT_ID } from '../../config';
const UNSPLASH_CLIENT_ID = `${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
//const API = "https://jsonplaceholder.typicode.com";
const API = "https://api.unsplash.com";


export const GET_SELECTED_PHOTO = "GET_SELECTED_PHOTO";
export function getSelectedPhoto(selectedImage) {
    console.log('selectimage', selectedImage)
    return {
        type: GET_SELECTED_PHOTO,
        selectedImage
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

export const getPhotos = payload => dispatch => {
    const { trailId } = payload;
    dispatch(getPhotosAction());
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
            return res.json()
                .then(photos => {
                    dispatch(getPhotosSuccessAction(photos));
                }).then(photos => {
                    dispatch(receivePhotos(photos));
                })
                .catch(err => {
                    dispatch(getPhotosFailureAction(err));
                });

        })
}

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export function receivePhotos(payload, json) {
    console.log('RECEIVE', json)
    const images = json.map(image => {
        return image.urls.thumb
    })
    const initialSelectedImage = json.shift(image => {
        return image.urls.thumb
    })
    return {
        type: RECEIVE_PHOTOS,
        payload,
        photoList: images,//json.map(child => child.urls),
        selectedImage: initialSelectedImage//images[0]//json[0].urls
    }
}
