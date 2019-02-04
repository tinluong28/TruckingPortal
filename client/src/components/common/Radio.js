import React from "react";
import classnames from "classnames";

const Radio = props => {
  let radioOption;
  if (props.options) {
    radioOption = props.options.map(option => (
      <span className="mr-2" key={option.label}>
        <input type="radio" value={option.value} name={option.name} />
        <span className="RadioButton">{option.label}</span>
      </span>
    ));
  }
  let radioElement = null;
  switch (props.inputtype) {
    case "radioButton":
      radioElement = (
        <div className="form-group row">
          <label className="col-md-3">
            <strong>{props.label}</strong>
          </label>
          <div className="RadioContainer col-md-6" onChange={props.onChange}>
            {radioOption}
          </div>
        </div>
      );
      break;
    default:
      radioElement = (
        <div className="form-group">
          <label className="col-md-4">{props.label}</label>
          <div className="RadioContainer row" onChange={props.onChange}>
            {radioOption}
          </div>
        </div>
      );
      break;
  }

  return <div>{radioElement}</div>;
};

export default Radio;
