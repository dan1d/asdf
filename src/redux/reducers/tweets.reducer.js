import * as ACTIONS from '../constants';

const reducers = {};

const defaultState = {
  tweets: [],
  fetching: false,
};

reducers[ACTIONS.FETCHING_TWITS_START] = (state, action) => {
  return Object.assign({}, state, {
    fetching: true,
  });
};

reducers[ACTIONS.FETCHING_TWITS_SUCCESS] = (state, action) => {
  return Object.assign({}, state, {
    fetching: false,
    tweets: action.payload,
  });
};

reducers[ACTIONS.FETCHING_TWITS_ERROR] = (state, action) => {
  return Object.assign({}, state, {
    fetching: false,
    tweets: action.payload,
  });
};

export default function reducer(state = defaultState, action) {
  const handler = reducers[action.type];
  if (handler) return handler(state, action);
  return state;
}
