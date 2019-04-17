import { combineReducers } from 'redux';
import healthIndicatorReducer from './health-indicator-reducer';

const rootReducer = combineReducers({
  healthIndicatorReducer,
});

export default rootReducer;
