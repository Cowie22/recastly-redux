import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const initialState = {
  videos: exampleVideoData,
  video: exampleVideoData[0],
};

const configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default configureStore;
