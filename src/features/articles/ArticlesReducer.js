import {SET_ARTICLES, SELECT_ID, SET_PREVIEW_VISIBILITY, SET_EDITOR_VISIBILITY} from './actionTypes';

const initialState = {
  list: [],
  loading: true,
  selectedId: null,
  visiblePreview: false,
  visibleEditor: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return {...state, list: action.value};
    case SELECT_ID:
      return {...state, selectedId: action.value};
    case SET_PREVIEW_VISIBILITY:
      return {...state, visiblePreview: action.value};
    case SET_EDITOR_VISIBILITY:
      return {...state, visibleEditor: action.value};
    default:
      return state;
  }
};

export default reducer;