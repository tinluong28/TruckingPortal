import {
  GET_FILE,
  GET_FILES,
  FILE_LOADING,
  CLEAR_CURRENT_FILE,
  CLEAR_CURRENT_FILES
} from "../actions/types";

const initialState = {
  file: {},
  files: [],
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
