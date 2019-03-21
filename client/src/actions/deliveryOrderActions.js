import axios from "axios";

import {
  GET_FILE,
  GET_FILES,
  FILE_LOADING,
  CLEAR_CURRENT_FILE,
  GET_ERRORS,
  CLEAR_CURRENT_FILES,
  GET_CONTAINERS,
  GET_CURRENT_VIEW_CONTAINER
} from "./types";

//Get current profile
export const getCurrentFile = id => dispatch => {
  dispatch(setFileLoading());
  axios
    .get(`/api/file/${id}`)
    .then(res =>
      dispatch({
        type: GET_FILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FILE,
        payload: {}
      })
    );
};

//Update customer
export const updateCurrentFile = (id, updatedData) => dispatch => {
  dispatch(setFileLoading());
  axios
    .put(`/api/file/${id}`, updatedData)
    .then(res =>
      dispatch({
        type: GET_FILE,
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
export const addFile = (fileData, history) => dispatch => {
  if (window.confirm("Saving New File. Please Confirm!")) {
    axios
      .post("/api/file", fileData)
      .then(res => history.push(`/file/view/${res.data._id}`))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// Add Contact in Customer
export const addContainer = (id, containerData) => dispatch => {
  axios
    .post(`/api/file/add-container/${id}`, containerData)
    .then(res =>
      dispatch({
        type: GET_FILE,
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

// GET_CONTAINER is used
// export const getCurrentContainer = (DO, containerNumber) => dispatch => {
//   const currentContainer = DO.containers.filter(
//     container => container.number === containerNumber
//   );
//   dispatch({
//     type: GET_CONTAINER,
//     payload: currentContainer
//   });
// };

export const updateContainer = (
  fileID,
  containerID,
  containerData
) => dispatch => {
  axios
    .put(`/api/file/update-container/${fileID}/${containerID}`, containerData)
    .then(res =>
      dispatch({
        type: GET_FILE,
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

// Get current viewed container
export const getCurrentViewContainer = container => {
  return {
    type: GET_CURRENT_VIEW_CONTAINER,
    payload: container
  };
};
// Delete Contact
export const deleteContainer = (fileID, containerID) => dispatch => {
  if (window.confirm("Delete Container?")) {
    axios
      .delete(`/api/file/${fileID}/${containerID}`)
      .then(res =>
        dispatch({
          type: GET_FILE,
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
export const getFiles = () => dispatch => {
  dispatch(setFileLoading());
  axios
    .get("/api/file/all")
    .then(res =>
      dispatch({
        type: GET_FILES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FILES,
        payload: null
      })
    );
};

// Delete customer
export const deleteFile = (id, history) => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete(`/api/file/${id}`)
      .then(
        res =>
          dispatch({
            type: CLEAR_CURRENT_FILE,
            payload: {}
          }),
        history.push("/file/all")
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
export const setFileLoading = () => {
  return {
    type: FILE_LOADING
  };
};

// Clear customer
export const clearCurrentFile = () => {
  return {
    type: CLEAR_CURRENT_FILE
  };
};

// Clear delivery list
export const clearCurrentFiles = () => {
  return {
    type: CLEAR_CURRENT_FILES
  };
};
