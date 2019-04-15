import { createStore , combineReducers , applyMiddleware } from 'redux'

import moviesReducer from './reducers'
import reduxPromise from 'redux-promise-middleware'
import logger from 'redux-logger'

export default createStore(
    combineReducers({
        // modalReducer,
        moviesReducer
    }),
    {},
    applyMiddleware(logger,reduxPromise )
)