import axios from "axios";

import {
  GET_CONTAINER,
  GET_CONTAINERS,
  CONTAINER_LOADING,
  CLEAR_CURRENT_CONTAINER,
  GET_ERRORS,
  CLEAR_CURRENT_CONTAINERS
} from "./types";

//Get current profile
// export const getCurrentFile = id => dispatch => {
//   dispatch(setFileLoading());
//   axios
//     .get(`/api/file/${id}`)
//     .then(res =>
//       dispatch({
//         type: GET_FILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_FILE,
//         payload: {}
//       })
//     );
// };

//Update customer
// export const updateCurrentFile = (id, updatedData) => dispatch => {
//   dispatch(setFileLoading());
//   axios
//     .put(`/api/file/${id}`, updatedData)
//     .then(res =>
//       dispatch({
//         type: GET_FILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Create Customer
// export const addFile = (fileData, history) => dispatch => {
//   if (window.confirm("Saving New File. Please Confirm!")) {
//     axios
//       .post("/api/file", fileData)
//       .then(res => history.push(`/file/view/${res.data._id}`))
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

// Add Contact in Customer
// export const addContainer = (id, containerData) => dispatch => {
//   axios
//     .post(`/api/file/add-container/${id}`, containerData)
//     .then(res =>
//       dispatch({
//         type: GET_FILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

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

// export const updateContainer = (
//   fileID,
//   containerID,
//   containerData
// ) => dispatch => {
//   axios
//     .put(`/api/file/update-container/${fileID}/${containerID}`, containerData)
//     .then(res =>
//       dispatch({
//         type: GET_FILE,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Contact
// export const deleteContainer = (fileID, containerID) => dispatch => {
//   if (window.confirm("Delete Container?")) {
//     axios
//       .delete(`/api/file/${fileID}/${containerID}`)
//       .then(res =>
//         dispatch({
//           type: GET_FILE,
//           payload: res.data
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

export const updateContainer = (containers, containerID, data) => dispatch => {
  const updateIndex = containers.map(item => item.id).indexOf(containerID);
  const updateContainer = containers;
  updateContainer[updateIndex] = data;
  dispatch({
    type: GET_CONTAINERS,
    payload: updateContainer
  });
};

// Delete customer
// export const deleteFile = (id, history) => dispatch => {
//   if (window.confirm("Are you sure? This can NOT be undone!")) {
//     axios
//       .delete(`/api/file/${id}`)
//       .then(
//         res =>
//           dispatch({
//             type: CLEAR_CURRENT_FILE,
//             payload: {}
//           }),
//         history.push("/file/all")
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };
