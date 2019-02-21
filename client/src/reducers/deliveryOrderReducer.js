import {
  GET_FILE,
  GET_FILES,
  FILE_LOADING,
  CLEAR_CURRENT_FILE,
  CLEAR_CURRENT_FILES,
  GET_CONTAINERS
} from "../actions/types";

const initialState = {
  files: [],
  file: {},
  containers: [],
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
        containers: action.payload.containers,
        loading: false
      };
    case GET_FILES:
      return {
        ...state,
        files: action.payload,
        loading: false
      };
    case GET_CONTAINERS:
      return {
        ...state,
        containers: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_FILE:
      return {
        ...state,
        file: {},
        containers: []
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
