import React from "react";
import classnames from "classnames";
import Select from "react-select";

const SelectInput = props => {
  // let selectOptions;
  // if (props.options) {
  //   selectOptions = props.options.map(option => (
  //     <option key={option.label} value={option.value}>
  //       {option.label}
  //     </option>
  //   ));
  // }

  let selectElement = null;
  let selectElementWithLabel = null;
  switch (props.inputtype) {
    case "select":
      selectElement = (
        <div>
          <Select
            {...props}
            value={props.options.filter(({ value }) => value === props.value)}
            getOptionLabel={({ label }) => label}
            getOptionValue={({ value }) => value}
            onChange={props.onChange}
            options={props.options}
          />

          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      selectElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-7">{selectElement}</div>
        </div>
      );
      break;
    case "compactSelect":
      selectElement = (
        <div className="col-md-7 ml-0">
          <Select
            // styles={{
            //   control: (base, _state) => ({
            //     ...base,
            //     minHeight: "30px",
            //     height: "30px",
            //     paddingBottom: "2px",
            //     fontSize: "10px",
            //     marginRight: "1px"
            //   }),
            //   indicatorSeparator: base => ({
            //     ...base,
            //     display: "none"
            //   })
            // }}
            {...props}
            value={props.options.filter(({ value }) => value === props.value)}
            getOptionLabel={({ label }) => label}
            getOptionValue={({ value }) => value}
            onChange={props.onChange}
            options={props.options}
          />

          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      selectElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right ml-3 mr-0">
            <strong>{props.label}</strong>
          </label>
          {selectElement}
        </div>
      );
      break;
    case "none":
      selectElement = (
        <Select
          styles={{
            control: (base, _state) => ({
              ...base,
              width: "70px",
              minHeight: "30px",
              marginLeft: "0",
              fontSize: "10px",
              marginRight: "0"
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
      );
      break;
    default:
      selectElement = (
        <div>
          <Select
            {...props}
            onChange={props.onChange}
            className={classnames("custom-select w-75", {
              "is-invalid": props.error
            })}
            options={props.options}
          />

          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      selectElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-7">{selectElement}</div>
        </div>
      );
      break;
  }
  return <div>{props.label ? selectElementWithLabel : selectElement}</div>;
};

export default SelectInput;
