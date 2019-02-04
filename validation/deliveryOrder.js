const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateDeliveryOrderInput = data => {
  let errors = {};

  data.mode = !isEmpty(data.mode) ? data.mode : "";
  data.fileCode = !isEmpty(data.fileCode) ? data.fileCode : "";
  data.fileNo = !isEmpty(data.fileNo) ? data.fileNo : "";
  data.customer = !isEmpty(data.customer) ? data.customer : "";
  data.eta = !isEmpty(data.eta) ? data.eta : "";
  data.entryDate = !isEmpty(data.entryDate) ? data.entryDate : "";
  data.carrier = !isEmpty(data.carrier) ? data.carrier : "";
  data.master = !isEmpty(data.master) ? data.master : "";
  data.terminal = !isEmpty(data.terminal) ? data.terminal : "";
  data.devan = !isEmpty(data.devan) ? data.devan : "";

  if (Validator.isEmpty(data.mode)) {
    errors.mode = "Company name is required";
  }

  if (Validator.isEmpty(data.fileCode)) {
    errors.fileCode = "Address field is required";
  }

  if (Validator.isEmpty(data.fileNo)) {
    errors.fileNo = "City field is required";
  }

  if (Validator.isEmpty(data.customer)) {
    errors.customer = "State field is required";
  }
  if (Validator.isEmpty(data.eta)) {
    errors.eta = "Zip Code field is required";
  }
  if (Validator.isEmpty(data.entryDate)) {
    errors.entryDate = "Zip Code field is required";
  }
  if (Validator.isEmpty(data.carrier)) {
    errors.carrier = "Zip Code field is required";
  }
  if (Validator.isEmpty(data.master)) {
    errors.master = "Zip Code field is required";
  }
  if (Validator.isEmpty(data.terminal)) {
    errors.terminal = "Zip Code field is required";
  }
  if (Validator.isEmpty(data.devan)) {
    errors.devan = "Zip Code field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
