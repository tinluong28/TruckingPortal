import {
  GET_CUSTOMER,
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  CLEAR_CURRENT_CUSTOMER,
  CLEAR_CURRENT_CUSTOMERS
} from "../actions/types";

const initialState = {
  customer: {},
  customers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
        loading: false
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_CUSTOMER:
      return {
        ...state,
        customer: {}
      };
    case CLEAR_CURRENT_CUSTOMERS:
      return {
        ...state,
        customers: []
      };
    default:
      return state;
  }
}
