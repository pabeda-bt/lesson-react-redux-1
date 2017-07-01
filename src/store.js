import reducer from './reducer.js'
import defaultSaga from './saga.js';
import createSagaMiddleware from 'redux-saga';
import {createStore} from 'redux'
import {applyMiddleware, compose} from 'redux'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(defaultSaga);

export default store;