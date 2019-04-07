import * as actions from './trailActions';

const trails = [
    {
        id: '1',
        trailName: 'test1',
        trailRating: 'easy',
        trailLocation: 'Arizona',
        trailDescription: 'lorem 1 ipsum',
        trailImageUrl: 'test1'
    },
    {
        id: '2',
        trailName: 'test2',
        trailRating: 'hard',
        trailLocation: 'Colorado',
        trailDescription: 'loren 2 ipsum',
        trailImageUrl: 'test2'
    },
    {
        id: '3',
        trailName: 'test3',
        trailRating: 'medium',
        trailLocation: 'California',
        trailDescription: 'lorem 3 ipsum',
        trailImageUrl: 'test3'
    }
]

const trail = {
    id: "testid",
    trailName: "testname",
    trailRating: "testrating",
    trailLocation: "testlocation",
    trailDescription: "testdescription",
    trailImage: "testimage",
    user: {
        id: '123',
        username: 'testname',
        email: 'test@gmail.com'
    }
}

const error = 'test error';


describe('getTrailsAction', () => {
    it('Should return the action', () => {
        const action = actions.getTrailsAction();
        expect(action.type).toEqual(actions.GET_TRAILS_REQUEST);
        expect(action.type).not.toEqual(actions.DELETE_TRAILS_REQUEST);
    });
});


describe('getTrailsSuccessAction', () => {
    it('should return the action', () => {
        const action = actions.getTrailsSuccessAction(trails);
        expect(action.type).toEqual(actions.GET_TRAILS_SUCCESS);
        expect(action.type).not.toEqual(actions.GET_TRAILS_FAILURE);
        expect(action.trails).toEqual(trails);
        expect(action.trails).not.toEqual({ aaa: 'aaa' });
    });
});

describe('getTrailsFailureAction', () => {
    it('should return the action', () => {
        const action = actions.getTrailsFailureAction(error);
        expect(action.type).toEqual(actions.GET_TRAILS_FAILURE);
        expect(action.type).not.toEqual(actions.GET_TRAILS_SUCCESS);
        expect(action.error).toEqual(error);
        expect(action.error).not.toEqual({ aaa: 'aaa' });
    });
});

describe('getTrailAction', () => {
    it('Should return the action', () => {
        const action = actions.getTrailAction();
        expect(action.type).toEqual(actions.GET_TRAIL_REQUEST);
        expect(action.type).not.toEqual(actions.DELETE_TRAIL_REQUEST);
    });
});


describe('getTrailSuccessAction', () => {
    it('should return the action', () => {
        const action = actions.getTrailSuccessAction(trail);
        expect(action.type).toEqual(actions.GET_TRAIL_SUCCESS);
        expect(action.type).not.toEqual(actions.GET_TRAIL_FAILURE);
        expect(action.trail).toEqual(trail);
        expect(action.trail).not.toEqual({ aaa: 'aaa' });
    });
});

describe('getTrailFailureAction', () => {
    it('should return the action', () => {
        const action = actions.getTrailFailureAction(error);
        expect(action.type).toEqual(actions.GET_TRAIL_FAILURE);
        expect(action.type).not.toEqual(actions.GET_TRAIL_SUCCESS);
        expect(action.error).toEqual(error);
        expect(action.error).not.toEqual({ aaa: 'aaa' });
    });
});


describe('createTrailAction', () => {
    it('Should return the action', () => {
        const action = actions.createTrailAction(trail);
        expect(action.type).toEqual(actions.CREATE_TRAIL_REQUEST);
        expect(action.type).not.toEqual(actions.UPDATE_TRAIL_REQUEST);
        expect(action.trail).toEqual(trail);
        expect(action.trail).not.toEqual({ aaa: 'aaa' });
    });
});

describe('createTrailSuccessAction', () => {
    it('Should return the action', () => {
        const action = actions.createTrailSuccessAction();
        expect(action.type).toEqual(actions.CREATE_TRAIL_SUCCESS);
        expect(action.type).not.toEqual(actions.CREATE_TRAIL_FAILURE);
    });
});

describe('createTrailFailureAction', () => {
    it('Should return the action', () => {
        const action = actions.createTrailFailureAction(error);
        expect(action.type).toEqual(actions.CREATE_TRAIL_FAILURE);
        expect(action.type).not.toEqual(actions.CREATE_TRAIL_SUCCESS);
        expect(action.error).toEqual(error);
        expect(action.error).not.toEqual('aaa');
    });
});

describe('updateTrailAction', () => {
    it('Should return the action', () => {
        const trailId = trail.id;
        const action = actions.updateTrailAction(trailId, trail);
        expect(action.type).toEqual(actions.UPDATE_TRAIL_REQUEST);
        expect(action.type).not.toEqual(actions.CREATE_TRAIL_REQUEST);
        expect(action.trailId).toEqual(trailId);
        expect(action.trailId).not.toEqual('aaa');
        expect(action.trail).toEqual(trail);
        expect(action.trail).not.toEqual({ aaa: 'aaa' });
    });
});

describe('updateTrailSuccessAction', () => {
    it('Should return the action', () => {
        const action = actions.updateTrailSuccessAction(trail);
        expect(action.type).toEqual(actions.UPDATE_TRAIL_SUCCESS);
        expect(action.type).not.toEqual(actions.UPDATE_TRAIL_FAILURE);
        expect(action.trail).toEqual(trail);
        expect(action.trail).not.toEqual({ aaa: 'aaa' });
    });
});

describe('updateTrailFailureAction', () => {
    it('Should return the action', () => {
        const action = actions.updateTrailFailureAction(error);
        expect(action.type).toEqual(actions.UPDATE_TRAIL_FAILURE);
        expect(action.error).toEqual(error);
    });
});

describe('deleteTrailAction', () => {
    it('Should return the action', () => {
        const trailId = trail.id;
        const action = actions.deleteTrailAction(trailId);
        expect(action.type).toEqual(actions.DELETE_TRAIL_REQUEST);
        expect(action.type).not.toEqual(actions.CREATE_TRAIL_REQUEST);
        expect(action.trailId).toEqual(trailId);
        expect(action.trailId).not.toEqual('aaa');
    });
});

describe('deleteTrailSuccessAction', () => {
    it('Should return the action', () => {
        const action = actions.deleteTrailSuccessAction();
        expect(action.type).toEqual(actions.DELETE_TRAIL_SUCCESS);
        expect(action.type).not.toEqual(actions.DELETE_TRAIL_FAILURE);
    });
});

describe('deleteTrailFailureAction', () => {
    it('Should return the action', () => {
        const action = actions.deleteTrailFailureAction(error);
        expect(action.type).toEqual(actions.DELETE_TRAIL_FAILURE);
        expect(action.type).not.toEqual(actions.DELETE_TRAIL_SUCCESS);
        expect(action.error).toEqual(error);
        expect(action.error).not.toEqual('aaa');
    });
});