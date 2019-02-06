import {
  GET_FILE,
  GET_FILES,
  GET_CONTAINER,
  FILE_LOADING,
  CLEAR_CURRENT_FILE,
  CLEAR_CURRENT_FILES
} from "../actions/types";

const initialState = {
  file: {},
  files: [],
  container: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FILE:
      return {
        ...state,
        file: action.payload,
        loading: false
      };
    case GET_FILES:
      return {
        ...state,
        files: action.payload,
        loading: false
      };
    case GET_CONTAINER:
      return {
        ...state,
        container: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_FILE:
      return {
        ...state,
        file: {}
      };
    case CLEAR_CURRENT_FILES:
      return {
        ...state,
        files: []
      };
    default:
      return state;
  }
}
