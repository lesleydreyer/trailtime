export const CREATE_TRAIL = 'ADD_ITEM';
export const createTrail = trail => ({
    type: CREATE_TRAIL,
    trail
});

export const UPDATE_TRAIL = 'UPDATE_TRAIL';
export const updateTrail = trail => ({
    type: UPDATE_TRAIL,
    trail
});

export const DELETE_TRAIL = 'DELETE_TRAIL';
export const deleteTrail = trail => ({
    type: DELETE_TRAIL,
    trail
});