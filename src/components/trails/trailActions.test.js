import { CREATE_TRAIL_REQUEST, CREATE_TRAIL_SUCCESS, CREATE_TRAIL_FAILURE, createTrail } from './trailActions';

describe('createTrail', () => {
    it('Should return the action', () => {
        const testTrail = {
            trailName: "Test Trail",
            trailRating: "Easy",
            trailLocation: "Idaho",
            trailDescription: "lorem ipsum"
        }
        const jwtTest = "asdlkfjsd"
        const payload = { testTrail, jwtTest };
        const action = createTrail(payload);
        //expect(action.trail).toEqual(trailTest);
        expect(action.type).toEqual(CREATE_TRAIL_REQUEST);
    })
})