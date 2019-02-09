import React from "react";
import classnames from "classnames";

const display = props => {
  const withLabel = (
    <div className="form-group row">
      <label className="col-md-3 text-right">
        <strong>{props.label}</strong>
      </label>
      <div className="col-md-7">{props.value}</div>
    </div>
  );
  return <div>{withLabel}</div>;
};

export default display;
