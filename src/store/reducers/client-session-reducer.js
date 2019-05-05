export const initialState = {
  session: '',
  cards: [],
  submissions: [], // not currently being used but will be useful to show summary views
};

const clientSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_HEALTH_INDICATOR':
      return {
        ...state,
        cards: [...state.cards, {
          indicator: action.indicator,
          textAwesome: action.textAwesome,
          textCrappy: action.textCrappy,
        }],
      };
    case 'SUBMIT_VOTE_START':
      console.log('yes yes this is a useless state... but is it?... yes it is... but it could be useful later');
      return state;
    case 'SUBMIT_VOTE_DONE':
      return {
        ...state,
        submissions: [...state.submissions, {
          indicator: action.indicator,
          vote: action.vote,
        }],
      };
    default:
      console.log(`Ignoring action: ${action.type}`);
      return state;
  }
};

export default clientSessionReducer;
