import React from "react";

const SelectButtons = props => {
  const selectOption = props.options.map(option => (
    <option
      key={option.label}
      value={option.value}
      className="btn btn-md btn-light"
    >
      {option.label}
    </option>
  ));
  return (
    <div className="SelectButtons">
      <div className="form-group row">
        <label className="col-md-3 col-form-label">
          <strong>{props.label}</strong>
        </label>
        <div className="col-md-7 btn-group">
          {/* <input autoFocus />
          {selectOption} */}
          <select className="form-control">{selectOption}</select>
        </div>
      </div>
    </div>
  );
};

export default SelectButtons;
