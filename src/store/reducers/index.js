import { combineReducers } from 'redux';
import healthIndicatorReducer from './health-indicator-reducer';
import clientSessionReducer from './client-session-reducer';

const rootReducer = combineReducers({
  clientSessionReducer,
  healthIndicatorReducer,
});

export default rootReducer;
