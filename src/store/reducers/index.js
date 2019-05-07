import { combineReducers } from 'redux';
import healthIndicatorReducer from './health-indicator-reducer';
import clientSessionReducer from './client-session-reducer';
import debugPanelReducer from './debug-panel-reducer';

const rootReducer = combineReducers({
  clientSessionReducer,
  healthIndicatorReducer,
  debugPanelReducer,
});

export default rootReducer;
