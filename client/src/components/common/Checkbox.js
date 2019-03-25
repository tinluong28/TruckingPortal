import React from "react";
import classnames from "classnames";

const Checkbox = props => {
  let checkboxElement = null;
  switch (props.inputtype) {
    case "checkbox":
      checkboxElement = (
        <div className="form-group">
          <label className="CheckboxContainer">
            {props.label}
            <input type="checkbox" {...props} />
            <span className="Checkmark" />
          </label>
        </div>
      );
      break;
    default:
      checkboxElement = (
        <div className="form-group">
          <label className="CheckboxContainer">
            {props.label}
            <input type="checkbox" {...props} onChange={props.onChange} />
            <span className="Checkmark" />
          </label>
        </div>
      );
      break;
  }

  return <div>{checkboxElement}</div>;
};

export default Checkbox;
