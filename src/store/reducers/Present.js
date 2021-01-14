import {SET_PRESENT_DATA} from '../actions'

const initialState = {
    presentData: null
}

export const presentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRESENT_DATA:
            return {...state, ...action.payload}
            break;
    }
    return state;
}