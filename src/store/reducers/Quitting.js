import {SET_QUITTING_DATA} from '../actions'

const initialState = {
    quittingData: null
}

export const quittingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_QUITTING_DATA:
            return {...state, ...action.payload}
            break;
    }
    return state;
}