import React from "react";
import classnames from "classnames";

const input = props => {
  let inputElement = null;
  let inputElementWithLabel = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <div>
          <input
            {...props}
            onChange={props.onChange}
            className={classnames("form-control", {
              "is-invalid": props.error
            })}
          />
          {props.info && (
            <small className="form-text text-muted">{props.info}</small>
          )}
          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      inputElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right mr-0">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-7">{inputElement}</div>
        </div>
      );
      break;

    case "compactInput":
      inputElement = (
        <div>
          <input
            type={props.type}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            className={classnames("form-control", {
              "is-invalid": props.error
            })}
          />
          {props.info && (
            <small className="form-text text-muted">{props.info}</small>
          )}
          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      inputElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-4 col-form-label text-right ml-3">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-6">{inputElement}</div>
        </div>
      );
      break;
    case "none":
      inputElement = (
        <div>
          <input
            type={props.type}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            className={classnames("form-control", {
              "is-invalid": props.error
            })}
          />
          {props.info && (
            <small className="form-text text-muted">{props.info}</small>
          )}
          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      inputElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-6 col-form-label text-right">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-5 pl-0 pr-0">{inputElement}</div>
        </div>
      );
      break;
    case "append":
      inputElement = (
        <div className="input-group">
          {props.prepend ? (
            <div className="input-group-prepend">
              <span className="input-group-text h-75 pl-1 pr-1">
                {props.prepend}
              </span>
            </div>
          ) : null}
          <input
            type={props.type}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            className={classnames("form-control form-control-sm h-75 m-0", {
              "is-invalid": props.error
            })}
            disabled={props.disabled ? true : false}
          />
          {props.append ? (
            <div className="input-group-append">
              <span className="input-group-text h-75 pl-1 pr-1">
                {props.append}
              </span>
            </div>
          ) : null}
        </div>
      );
      inputElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-4">{inputElement}</div>
        </div>
      );

      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props}
          onChange={props.onChange}
          className={classnames("form-control", {
            "is-invalid": props.error
          })}
        />
      );
      inputElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right mr-0">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-7">{inputElement}</div>
        </div>
      );
      break;
    default:
      inputElement = (
        <div>
          <input
            {...props}
            onChange={props.onChange}
            className={classnames("form-control", {
              "is-invalid": props.error
            })}
          />
          {props.info && (
            <small className="form-text text-muted">{props.info}</small>
          )}
          {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
      );
      inputElementWithLabel = (
        <div className="form-group row">
          <label className="col-md-3 col-form-label text-right mr-0">
            <strong>{props.label}</strong>
          </label>
          <div className="col-md-7">{inputElement}</div>
        </div>
      );
      break;
  }
  // const withLabel = (
  //   <div className="form-group row">
  //     <label className="col-md-3 col-form-label mr-0">
  //       <strong>{props.label}</strong>
  //     </label>
  //     <div className="col-md-7">{inputElement}</div>
  //   </div>
  // );
  // const withoutLabel = <div className="mt-2">{inputElement}</div>;
  return <div>{props.label ? inputElementWithLabel : inputElement}</div>;
};

export default input;
