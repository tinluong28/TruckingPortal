import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import customerReducer from "./customerReducer";
import deliveryReducer from "./deliveryReducer";
import deliveryOrderReducer from "./deliveryOrderReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  customer: customerReducer,
  delivery: deliveryReducer,
  deliveryOrder: deliveryOrderReducer,
  form: formReducer
});
