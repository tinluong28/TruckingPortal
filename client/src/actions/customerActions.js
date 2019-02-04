import axios from "axios";

import {
  GET_CUSTOMER,
  GET_CUSTOMERS,
  CUSTOMER_LOADING,
  CLEAR_CURRENT_CUSTOMER,
  GET_ERRORS,
  CLEAR_CURRENT_CUSTOMERS,
  SET_CURRENT_CUSTOMER
} from "./types";

//Get current profile
export const getCurrentCustomer = id => dispatch => {
  dispatch(setCustomerLoading());
  axios
    .get(`/api/customers/${id}`)
    .then(res =>
      dispatch({
        type: GET_CUSTOMER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CUSTOMER,
        payload: {}
      })
    );
};

//Update customer
export const updateCurrentCustomer = (id, updatedData) => dispatch => {
  dispatch(setCustomerLoading());
  axios
    .put(`/api/customers/${id}`, updatedData)
    .then(res =>
      dispatch({
        type: GET_CUSTOMER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get profile by handle
// export const getProfileByHandle = handle => dispatch => {
//   dispatch(setProfileLoading());
//   axios
//     .get(`/api/profile/handle/${handle}`)
//     .then(res =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROFILE,
//         payload: null
//       })
//     );
// };

// Create Customer
export const addCustomer = (customerData, history) => dispatch => {
  if (window.confirm("Saving New Customer. Please Confirm!")) {
    axios
      .post("/api/customers", customerData)
      .then(res => history.push(`/customers/view/${res.data._id}`))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Add Contact in Customer
export const addContact = (id, contactData) => dispatch => {
  axios
    .post(`/api/customers/add-contact//${id}`, contactData)
    .then(res =>
      dispatch({
        type: GET_CUSTOMER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Contact
export const deleteContact = (customerID, contactID) => dispatch => {
  if (window.confirm("Delete Contact?")) {
    axios
      .delete(`/api/customers/${customerID}/${contactID}`)
      .then(res =>
        dispatch({
          type: GET_CUSTOMER,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Get all customers
export const getCustomers = () => dispatch => {
  dispatch(setCustomerLoading());
  axios
    .get("/api/customers/all")
    .then(res =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: null
      })
    );
};

// Delete customer
export const deleteCustomer = (id, history) => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete(`/api/customers/${id}`)
      .then(
        res =>
          dispatch({
            type: CLEAR_CURRENT_CUSTOMER,
            payload: {}
          }),
        history.push("/customers/all")
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Profile loading
export const setCustomerLoading = () => {
  return {
    type: CUSTOMER_LOADING
  };
};

// Clear customer
export const clearCurrentCustomer = () => {
  return {
    type: CLEAR_CURRENT_CUSTOMER
  };
};

// Clear delivery list
export const clearCurrentCustomers = () => {
  return {
    type: CLEAR_CURRENT_CUSTOMERS
  };
};
