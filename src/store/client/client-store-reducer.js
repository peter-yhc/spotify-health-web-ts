export const initialState = {
  cards: [],
  submissions: {},
  session: {
    id: undefined,
    status: 'UNCONFIRMED',
  },
  client: {
    id: undefined,
  },
};

const clientStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_VOTE_DONE':
      return {
        ...state,
        submissions: Object.assign({}, state.submissions, {
          [action.indicator]: action.vote,
        }),
      };
    case 'SHOW_INDICATORS':
      return {
        ...state,
        cards: action.indicators,
      };
    case 'CLIENT_REGISTERED': {
      return {
        ...state,
        client: {
          ...state.client,
          id: action.clientId,
        },
        session: {
          ...state.session,
          id: action.sessionId,
        },
      };
    }
    default:
      return state;
  }
};

export default clientStoreReducer;
