import {FETCH_LIST} from './actionTypes';

const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST:
      return {...state, list: action.value};

    default:
      return state;
  }
};

export default reducer;