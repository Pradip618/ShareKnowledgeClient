import { createStore, compose } from 'redux';
import Reducer from './Reducer';

let initalState = {};

export default createStore(
  Reducer,
  initalState,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);
