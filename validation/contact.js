const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateContactInput = data => {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  // data.office = !isEmpty(data.office) ? data.office : "";
  // data.email = !isEmpty(data.email) ? data.email : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Contact name is required";
  }

  // if (Validator.isEmpty(data.office)) {
  //   errors.office = "Office phone number is required";
  // }

  // if (Validator.isEmpty(data.email)) {
  //   errors.email = "Email address is required";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
