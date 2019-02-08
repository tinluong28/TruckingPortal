import React from "react";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import SelectInput from "../common/Select";
import SelectOptions from "../common/SelectOptions";
import Radio from "../common/Radio";
import RadioOptions from "../common/RadioOptions";
import classnames from "classnames";

const FileInfo = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };
  const onSelectChange = name => ({ value }) => {
    props.changeSelectData(name, value);
  };
  const onModeChange = name => ({ value }) => {
    props.changeMode(name, value);
  };

  const onCustomerDataChange = e => {
    props.changeCustomerData(e.target.name, e.target.value);
  };
  const onETAChange = e => {
    props.changeETA(e.target.name, e.target.value);
  };
  const status = SelectOptions.status;
  let mode = SelectOptions.mode;
  let devanning = SelectOptions.devanning;
  let statusRadio = RadioOptions.status;
  let FileContent = (
    <div>
      <small>* = required</small>
      <div className="FileInput">
        <div className="row">
          <div className="col-md-4">
            <SelectInput
              inputtype="select"
              defaultValue="FCL"
              options={mode}
              label="Mode"
              value={props.mode}
              onChange={onModeChange("mode")}
            />
            <div className="form-group row">
              <label className="col-md-3 col-form-label mr-0">
                <strong>File No.*</strong>
              </label>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-sm-4 pr-0">
                    <span className="form-control">{props.fileCode}</span>
                  </div>

                  <div className="col-sm-8 pl-1">
                    <input
                      name="fileNo"
                      value={props.fileNo}
                      placeholder="Ex. 10001"
                      onChange={onDataChange}
                      className={classnames("form-control", {
                        "is-invalid": props.error
                      })}
                    />
                    {props.info && (
                      <small className="form-text text-muted">
                        {props.info}
                      </small>
                    )}
                    {props.error && (
                      <div className="invalid-feedback">{props.error}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <Radio
              inputtype="radioButton"
              options={statusRadio}
              label="Status"
              value={props.status}
              onChange={onCustomerDataChange}
            /> */}
            <SelectInput
              inputtype="select"
              options={status}
              label="Status"
              value={props.status}
              onChange={onSelectChange("status")}
            />

            <Input
              inputtype="input"
              label="Customer*"
              type="text"
              // error={props.errors.fileNo}
              name="customer"
              value={props.customer}
              onChange={onCustomerDataChange}
              placeholder="Customer Name"
            />
          </div>
          <div className="col-md-4">
            <Input
              inputtype="input"
              label="Carrier*"
              type="text"
              name="carrier"
              value={props.carrier}
              onChange={onDataChange}
              placeholder="Ex. HDMU"
            />
            <Input
              inputtype="input"
              label="Master BL*"
              type="text"
              name="master"
              value={props.master}
              onChange={onDataChange}
              placeholder="Master Bill of Lading"
            />
            <Input
              inputtype="input"
              label="House BL"
              type="text"
              name="house"
              value={props.house}
              onChange={onDataChange}
              placeholder="House Bill of Lading"
            />
            <Input
              inputtype="input"
              label="Terminal*"
              type="text"
              name="terminal"
              value={props.terminal}
              onChange={onDataChange}
              placeholder="Terminal"
            />
          </div>
          <div className="col-md-4">
            <Input
              inputtype="input"
              label="Est. LFD"
              type="date"
              name="tentativelfd"
              value={props.tentativelfd}
              onChange={onDataChange}
            />
            <Input
              inputtype="input"
              label="ETA*"
              type="date"
              name="eta"
              value={props.eta}
              onChange={onETAChange}
            />
            <Input
              inputtype="input"
              label="Entry Date*"
              type="date"
              name="entryDate"
              value={props.entryDate}
              onChange={onDataChange}
            />
            <SelectInput
              inputtype="select"
              defaultValue="NO"
              options={devanning}
              label="Devanning"
              value={props.devan}
              onChange={onSelectChange("devan")}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-xl-12">
      <div
        style={{ borderTopColor: "#c1046b", borderTopWidth: "4px" }}
        className="card card-body mb-3 shadow p-3 mb-5 bg-white rounded"
      >
        <h2>Shipment Info</h2>
        {FileContent}
      </div>
    </div>
  );
};

export default FileInfo;
