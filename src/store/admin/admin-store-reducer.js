/* eslint-disable max-len */
export const initialState = {
  voteTally: {},
  clientVoteHistory: new Map(),
  session: {
    id: undefined,
    link: 'Retrieving...',
  },
};

const deriveVoteKey = action => `${action.client} - ${action.indicator}`;

const calculateChange = indicator => (old, current) => {
  if (old === current) return 0;
  let change = 0;
  if (indicator === old) change = -1;
  if (indicator === current) change = 1;
  return change;
};

const adminStoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SESSION_REGISTERED': {
      return {
        ...state,
        session: {
          id: action.id,
          link: action.link,
        },
        voteTally: action.indicators.reduce((acc, indicator) => {
          acc[indicator.name] = {
            indicator: indicator.name,
            unhappyVotes: 0,
            neutralVotes: 0,
            happyVotes: 0,
          };
          return acc;
        }, {}),
      };
    }
    case 'VOTE_SUBMITTED': {
      const voteKey = deriveVoteKey(action);
      const oldVote = state.clientVoteHistory.get(voteKey) || undefined;
      const currentVote = action.value;

      const unhappyChange = calculateChange('unhappy')(oldVote, currentVote);
      const neutralChange = calculateChange('neutral')(oldVote, currentVote);
      const happyChange = calculateChange('happy')(oldVote, currentVote);

      const dirtyVoteHistory = new Map(state.clientVoteHistory);
      dirtyVoteHistory.set(voteKey, action.value);

      const votes = state.voteTally;
      return {
        ...state,
        voteTally: { ...votes,
          [action.indicator]: {
            indicator: action.indicator,
            unhappyVotes: unhappyChange + (votes[action.indicator] ? votes[action.indicator].unhappyVotes : 0),
            neutralVotes: neutralChange + (votes[action.indicator] ? votes[action.indicator].neutralVotes : 0),
            happyVotes: happyChange + (votes[action.indicator] ? votes[action.indicator].happyVotes : 0),
          },
        },
        clientVoteHistory: dirtyVoteHistory,
      };
    }
    default:
      return state;
  }
};


export default adminStoreReducer;
