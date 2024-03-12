import { ADD_POINTS, TOGGLE_ADD_POINTS, REFRESH_STATE, SELECT_OPTION } from '../actions/pointsActions';

const initialState = {
  points: 0,
  addPointsEnabled: true,
  selectedOption: null,
};

const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINTS:
      if (state.addPointsEnabled) {
        return {
          ...state,
          points: state.points + action.payload,
        };
      }
      // Return state as is if addPointsEnabled is false
      return state;

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
