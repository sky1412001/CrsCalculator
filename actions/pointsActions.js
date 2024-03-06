// actions/pointsActions.js
export const REFRESH_STATE = 'REFRESH_STATE';
export const ADD_POINTS = 'ADD_POINTS';

export const addPoints = (points) => ({
  type: ADD_POINTS,
  payload: points,
});
export const refreshState = (points) => ({
  type: REFRESH_STATE
});