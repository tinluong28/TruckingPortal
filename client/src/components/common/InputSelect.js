import React from "react";
import classnames from "classnames";
import Select from "react-select";

let inputSelectElement = null;
let inputSelectElementWithLabel = null;
const InputSelect = props => {
  switch (props.inputtype) {
    case "compact":
      inputSelectElement = (
        <div className="col-md-8">
          <div className="col-md-8">
            <input
              type={props.type}
              value={props.value}
              name={props.name}
              onChange={props.onChange}
              className={classnames("form-control form-control-sm h-75 m-0", {
                "is-invalid": props.error
              })}
            />
            {props.info && (
              <small className="form-text text-muted">{props.info}</small>
            )}
            {props.error && (
              <div className="invalid-feedback">{props.error}</div>
            )}
          </div>
          <div className="col-md-4">
            <Select
              styles={{
                control: (base, _state) => ({
                  ...base,
                  minHeight: "30px",
                  height: "30px",
                  paddingBottom: "2px",
                  fontSize: "10px",
                  marginRight: "1px"
                }),
                indicatorSeparator: base => ({
                  ...base,
                  display: "none"
                })
              }}
              {...props}
              value={props.options.filter(({ value }) => value === props.value)}
              getOptionLabel={({ label }) => label}
              getOptionValue={({ value }) => value}
              onChange={props.onChange}
              options={props.options}
            />
          </div>
        </div>
      );
      inputSelectElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-4 col-form-label">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-7">{inputSelectElement}</div>
        </div>
      );
  }
  return (
    <div>{props.label ? inputSelectElementWithLabel : inputSelectElement}</div>
  );
};

export default InputSelect;
