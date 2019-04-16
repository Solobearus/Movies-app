import { createStore , combineReducers , applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'

import moviesReducer from './reducers'
import reduxPromise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default createStore(
    combineReducers({
        form: formReducer,
        moviesReducer
    }),
    {},
    applyMiddleware( logger,reduxPromise,thunk )
)