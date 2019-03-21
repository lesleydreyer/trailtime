import * as actions from './trailActions';

describe('createTrail', () => {
    it('Should return the action', () => {
        /*const testTrail = {
            trailName: "Test Trail",
            trailRating: "Easy",
            trailLocation: "Idaho",
            trailDescription: "lorem ipsum"
        }
        const jwtTest = "asdlkfjsd"
        const payload = { testTrail, jwtTest };*/
        const action = actions.createTrailAction();
        //expect(action.trail).toEqual(trailTest);
        expect(action.type).toEqual(actions.CREATE_TRAIL_REQUEST);
    })
})