import * as actions from '../components/trails/photoActions';

const initialState = {
    loading: false,
    error: null,
    photoList: [],
    photoDetails: null,
    selectedImage: null
};

export default function reducer(state = initialState, action) {
    // REQUEST START
    if (
        action.type === actions.GET_PHOTOS_REQUEST
    ) {
        return {
            ...state,
            loading: true,
            error: null,
            photoDetails: null,
            photoList: [],
            selectedImage: null
        };
        // REQUEST ERROR
    } else if (
        action.type === actions.GET_PHOTOS_FAILURE) {
        return { ...state, loading: false, error: action.error };
        // REQUEST SUCCESS
    } else if (action.type === actions.GET_PHOTOS_SUCCESS) {
        return { ...state, loading: false, photoList: action.photos };
    } else if (action.type === actions.RECEIVE_PHOTOS) {
        return { ...state, loading: false, photoList: action.photoList, selectedImage: action.selectedImage };
    } else if (action.type === actions.GET_SELECTED_PHOTO) {
        return { ...state, loading: false, selectedImage: action.selectedImage };
    }
    return state;
}

/*
export default function images(state = {images:[]}, action) {
  switch (action.type) {
    case 'IMAGES_RECEIVED':
      console.log(JSON.stringify(action.images));
      return {...state, images: action.images};
    case 'LOAD_IMAGES_FAILURE':
      return state;
    case 'SELECT_IMAGE':
      return {...state, selectedImage: action.image};
    default:
      return state
  }
}
*/