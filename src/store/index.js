import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { adminStoreReducer } from './admin';
import { clientStoreReducer } from './client';
import { debugPanelReducer } from './debug';

const rootReducer = combineReducers({
  clientStoreReducer,
  adminStoreReducer,
  debugPanelReducer,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
