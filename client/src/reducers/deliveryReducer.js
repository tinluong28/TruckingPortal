import {
  GET_DELIVERY,
  GET_DELIVERIES,
  DELIVERY_LOADING,
  CLEAR_CURRENT_DELIVERY,
  ADD_DELIVERY,
  UPDATE_DELIVERY,
  CLEAR_CURRENT_DELIVERIES,
  GET_ID,
  ADD_CONTACT
} from "../actions/types";

const initialState = {
  delivery: {},
  deliveries: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DELIVERY_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_DELIVERY:
      return {
        ...state,
        delivery: action.payload,
        loading: false
      };
    case GET_ID:
      return {
        ...state,
        loading: false
      };
    case GET_DELIVERIES:
      return {
        ...state,
        deliveries: action.payload,
        loading: false
      };
    case ADD_DELIVERY:
      return {
        ...state,
        delivery: action.payload,
        deliveries: [action.payload, ...state.deliveries]
      };
    case UPDATE_DELIVERY:
      return {
        ...state,
        delivery: action.payload
      };
    case CLEAR_CURRENT_DELIVERY:
      return {
        ...state,
        delivery: {}
      };
    case CLEAR_CURRENT_DELIVERIES:
      return {
        ...state,
        deliveries: []
      };
    case ADD_CONTACT:
      return {
        ...state,
        delivery: { ...state.delivery, contact: action.payload }
      };
    default:
      return state;
  }
}
