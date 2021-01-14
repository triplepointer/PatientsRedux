import { GET_INDEX, GET_DATA, SET_ACTIVE_2, SET_PRESENT_DATA, SET_QUITTING_DATA, SET_ACTIVE_1 } from '../actions'

const initialState = {
    active1: null,
    active2: null,
    index: null,
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {...state};
            break;
        case SET_ACTIVE_1:
            return {...state, ...action.payload}
            break;
        case SET_ACTIVE_2:
            return {...state, ...action.payload}
            break;
        case GET_INDEX:
            return {...state, ...action.payload}
            break;
    }
    return state;
}