import { ADD_POINTS, TOGGLE_ADD_POINTS, REFRESH_STATE, SELECT_OPTION } from '../actions/pointsActions';

const initialState = {
  points: 0,
  addPointsEnabled: true, // Assuming it's enabled by default
  selectedOption: null, // Assuming there's a selected option
};

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      if (state.addPointsEnabled) {
        return {
          ...state,
          points: state.points + action.payload,
        };
      } else {
        return state; 
      }
    case TOGGLE_ADD_POINTS:
      return {
        ...state,
        addPointsEnabled: !state.addPointsEnabled,
      };
    case SELECT_OPTION:
      return {
        ...state,
        selectedOption: action.payload,
      };
    case REFRESH_STATE:
      return initialState;
    default:
      return state;
  }
};

export default pointsReducer;
