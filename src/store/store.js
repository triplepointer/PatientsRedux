import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import { presentReducer } from './reducers/Present'
import { quittingReducer } from './reducers/Quitting'
import { appReducer } from './reducers/App'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    present: presentReducer,
    quitting: quittingReducer,
    app: appReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));