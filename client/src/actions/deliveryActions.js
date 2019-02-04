import axios from "axios";

import {
  GET_DELIVERY,
  GET_DELIVERIES,
  ADD_DELIVERY,
  DELIVERY_LOADING,
  CLEAR_CURRENT_DELIVERY,
  CLEAR_CURRENT_DELIVERIES,
  GET_ERRORS,
  SET_CURRENT_DELIVERY,
  UPDATE_DELIVERY,
  GET_ID,
  ADD_CONTACT
} from "./types";

//Get current profile
export const getCurrentDelivery = id => dispatch => {
  dispatch(setDeliveryLoading());
  axios
    .get(`/api/delivery/${id}`)
    .then(res =>
      dispatch({
        type: GET_DELIVERY,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DELIVERY,
        payload: {}
      })
    );
};

//Update delivery
export const updateCurrentDelivery = (id, updatedData) => dispatch => {
  dispatch(setDeliveryLoading());
  axios
    .put(`/api/delivery/${id}`, updatedData)
    .then(res =>
      dispatch({
        type: GET_DELIVERY,
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

// Create Delivery
export const addDelivery = (deliveryData, history) => dispatch => {
  if (window.confirm("Saving New Delivery Location. Please Confirm!")) {
    axios
      .post("/api/delivery", deliveryData)
      .then(res => history.push(`/delivery/view/${res.data._id}`))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Add Contact in Delivery
export const addContact = (id, contactData) => dispatch => {
  axios
    .post(`/api/delivery/add-contact/${id}`, contactData)
    .then(res =>
      dispatch({
        type: GET_DELIVERY,
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
export const deleteContact = (deliveryID, contactID) => dispatch => {
  if (window.confirm("Delete Contact?")) {
    axios
      .delete(`/api/delivery/${deliveryID}/${contactID}`)
      .then(res =>
        dispatch({
          type: GET_DELIVERY,
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

// Get all Delivery
export const getDeliveries = () => dispatch => {
  dispatch(setDeliveryLoading());
  axios
    .get("/api/delivery/all")
    .then(res =>
      dispatch({
        type: GET_DELIVERIES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DELIVERIES,
        payload: null
      })
    );
};

// Delete DELIVERY
export const deleteDelivery = (id, history) => dispatch => {
  if (
    window.confirm(
      "Do you want to delete this location? This can NOT be undone!"
    )
  ) {
    axios
      .delete(`/api/delivery/${id}`)
      .then(
        res =>
          dispatch({
            type: CLEAR_CURRENT_DELIVERY,
            payload: {}
          }),
        history.push("/delivery/all")
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Delivery loading
export const setDeliveryLoading = () => {
  return {
    type: DELIVERY_LOADING
  };
};

// Clear delivery
export const clearCurrentDelivery = () => {
  return {
    type: CLEAR_CURRENT_DELIVERY
  };
};

// Clear delivery list
export const clearCurrentDeliveries = () => {
  return {
    type: CLEAR_CURRENT_DELIVERIES
  };
};

//Get newly added delivery from state
export const getNewlyAddedDelivery = data => dispatch => {
  dispatch({
    type: GET_DELIVERY,
    payload: data
  });
};

// Update delivery in Redux state
export const updateDeliveryToState = data => dispatch => {
  dispatch({
    type: UPDATE_DELIVERY,
    payload: data
  });
};
// Get ID of current delivery
export const getID = id => dispatch => {
  dispatch({
    type: GET_ID,
    payload: id
  });
};

// Get current delivery by store delivery ID
export const getDeliveryByID = (deliveries, id) => dispatch => {
  let currentDelivery;
  deliveries.map(delivery => {
    if (delivery._id === id) {
      currentDelivery = delivery;
    }
  });
  dispatch({
    type: GET_DELIVERY,
    payload: currentDelivery
  });
};

// Add contact to state delivery
export const addContactToState = (delivery, data) => dispatch => {
  let contact;
  if (delivery.contact) {
    contact = delivery.contact.slice();
  } else {
    contact = [];
  }
  contact.splice(contact.length, 0, data);
  dispatch({
    type: ADD_CONTACT,
    payload: contact
  });
};
