import { combineReducers } from 'redux';
import { adminStoreReducer } from './admin';
import { clientStoreReducer } from './client';
import { debugPanelReducer } from './debug';

const rootReducer = combineReducers({
  clientStoreReducer,
  adminStoreReducer,
  debugPanelReducer,
});

export default rootReducer;
