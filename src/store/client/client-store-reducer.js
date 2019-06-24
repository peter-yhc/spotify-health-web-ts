export const initialState = {
  cards: [],
  submissions: {},
  session: {
    id: undefined,
    passkey: undefined,
  },
  username: undefined,
};

const clientStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_INDICATORS':
      return {
        ...state,
        cards: action.indicators,
      };
    case 'CLIENT_REGISTERED': {
      return {
        ...state,
        session: {
          id: action.sessionId,
          passkey: action.passkey,
        },
      };
    }
    case 'SET_USERNAME': {
      return {
        ...state,
        username: action.username,
      };
    }
    default:
      return state;
  }
};

export default clientStoreReducer;
