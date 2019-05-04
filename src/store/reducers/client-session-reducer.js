const initialState = {
  session: '',
  cards: [],
};

const clientSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_HEALTH_INDICATOR':
      return {
        ...state,
        cards: [...state.cards, {
          area: action.area,
          textAwesome: action.textAwesome,
          textCrappy: action.textCrappy,
        }],
      };
    default:
      console.log(`Unknown action: ${action.type}`);
      return state;
  }
};

export default clientSessionReducer;
