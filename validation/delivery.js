const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateDeliveryInput = data => {
  let errors = {};

  data.company = !isEmpty(data.company) ? data.company : "";
  // data.address = !isEmpty(data.address) ? data.address : "";
  // data.city = !isEmpty(data.city) ? data.city : "";
  // data.state = !isEmpty(data.state) ? data.state : "";
  // data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : "";

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company name is required";
  }
  // if (Validator.isEmpty(data.address)) {
  //   errors.address = "Address field is required";
  // }

  // if (Validator.isEmpty(data.city)) {
  //   errors.city = "City field is required";
  // }

  // if (Validator.isEmpty(data.state)) {
  //   errors.state = "State field is required";
  // }
  // if (Validator.isEmpty(data.zipcode)) {
  //   errors.zipcode = "Zip Code field is required";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
