const initialState = {
  indicatorScores: {},
};

const healthIndicatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_SUBMITTED':
      return {
        ...state,
        indicatorScores: Object.assign({
          [action.indicator]: action.value,
        }, state.indicatorScores),
      };
    default:
      console.log(`Unknown action: ${action.type}`);
      return state;
  }
};

export default healthIndicatorReducer;
