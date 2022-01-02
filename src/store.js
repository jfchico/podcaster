import { createStore, applyMiddleware, compose } from 'redux';
import {reducers} from './reducers';
import reduxThunk from 'redux-thunk';

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    window['__REDUX_DEVTOOLS_EXTENSION__'] ? window['__REDUX_DEVTOOLS_EXTENSION__']() : f => f
  )  
);