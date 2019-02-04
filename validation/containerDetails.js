const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateContainerInput = data => {
  let errors = {};

  data.number = !isEmpty(data.number) ? data.number : "";
  //   data.size = !isEmpty(data.size) ? data.size : "";
  //   data.pcsAmount = !isEmpty(data.pcsAmount) ? data.pcsAmount : "";
  //   data.weightAmount = !isEmpty(data.weightAmount) ? data.weightAmount : "";
  //   data.dimensionAmount = !isEmpty(data.dimensionAmount)
  //     ? data.dimensionAmount
  //     : "";

  if (Validator.isEmpty(data.number)) {
    errors.number = "Company name is required";
  }

  //   if (Validator.isEmpty(data.size)) {
  //     errors.size = "Address field is required";
  //   }

  //   if (Validator.isEmpty(data.pcsAmount)) {
  //     errors.pcsAmount = "City field is required";
  //   }

  //   if (Validator.isEmpty(data.weightAmount)) {
  //     errors.weightAmount = "State field is required";
  //   }
  //   if (Validator.isEmpty(data.dimensionAmount)) {
  //     errors.dimensionAmount = "Zip Code field is required";
  //   }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
