export const Types = { hint: 'hint', user: 'user', system: 'system' };

export const initialState = {
  history: [{
    text: 'Hints',
    type: Types.hint,
  }, {
    text: '> show "title" "text awesome" "text crappy"',
    type: Types.hint,
  }, {
    text: '> vote "title" "[unhappy, neutral, happy]" "username"',
    type: Types.hint,
  }],
};

const debugPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_VOTE_DONE': {
      return {
        history: [...state.history, {
          text: `> ${action.vote} submitted for ${action.indicator}`,
          type: Types.system,
        }],
      };
    }
    case 'SHOW_HEALTH_INDICATOR': {
      return {
        history: [...state.history, {
          text: `> showing new indicator ${action.indicator}`,
          type: Types.system,
        }],
      };
    }
    case 'DEBUG_INPUT': {
      return {
        history: [...state.history, {
          text: `> ${action.input}`,
          type: Types.user,
        }],
      };
    }
    default: {
      return state;
    }
  }
};

export default debugPanelReducer;
