import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxAxios from 'redux-axios-middleware';
import axios from '../axios';

import upload from './upload';
import fields from './fields';

const middleware = [];
middleware.push(ReduxAxios(axios));
if (process.env.NODE_ENV === 'development') {
    middleware.push(ReduxLogger);
}

export default createStore(
  combineReducers({
    upload,
    fields
  }),
  applyMiddleware(...middleware)
);
