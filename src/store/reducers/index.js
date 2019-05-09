import { combineReducers } from 'redux';
import adminSessionReducer from './admin-session-reducer';
import clientSessionReducer from './client-session-reducer';
import debugPanelReducer from './debug-panel-reducer';

const rootReducer = combineReducers({
  clientSessionReducer,
  adminSessionReducer,
  debugPanelReducer,
});

export default rootReducer;
