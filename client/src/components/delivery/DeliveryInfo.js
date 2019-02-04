import React from "react";
import Input from "../common/Input";
import Display from "../common/Display";
import SelectInput from "../common/Select";
import SelectOptions from "../common/SelectOptions";

const DeliveryInfo = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };
  const onSelectChange = name => ({ value }) => {
    props.changeSelectData(name, value);
  };
  const states = SelectOptions.states;
  let DeliveryContent = null;
  const withEdit = (
    <form onSubmit={props.setDone}>
      <small>* = required</small>
      <Input
        inputtype="input"
        label="Company Name*"
        type="text"
        error={props.errors.company}
        name="company"
        value={props.company}
        onChange={onDataChange}
        placeholder="Ex. XYZ Distribution Inc."
      />
      <Input
        inputtype="input"
        label="Address"
        type="text"
        error={props.errors.address}
        name="address"
        value={props.address}
        onChange={onDataChange}
        placeholder="Ex. 2328 Central Ave"
      />
      <Input
        inputtype="input"
        label="City"
        type="text"
        error={props.errors.city}
        name="city"
        value={props.city}
        onChange={onDataChange}
        placeholder="Ex. Compton"
      />
      <SelectInput
        inputtype="select"
        placeholder="Select One"
        options={states}
        label="State"
        error={props.errors.state}
        value={props.state}
        onChange={onSelectChange("state")}
      />
      <Input
        inputtype="input"
        label="Zip Code"
        type="text"
        error={props.errors.zipcode}
        name="zipcode"
        value={props.zipcode}
        onChange={onDataChange}
        placeholder="Ex.90750"
      />
      <Input
        inputtype="input"
        label="Phone"
        type="text"
        name="phone"
        value={props.phone}
        onChange={onDataChange}
        placeholder="Ex. 310-888-8888"
      />
      <Input
        inputtype="textarea"
        label="Remark"
        name="remark"
        value={props.remark}
        onChange={onDataChange}
        placeholder="Receiving hours, number of docks, etc."
      />
      <div className="form-group row">
        <div className="col-md-10">
          <button
            onClick={props.toggleEdit}
            className="btn btn-outline-dark mr-2"
            style={{
              display: props.id ? "inline-block" : "none"
            }}
          >
            Cancel
          </button>
          <input
            type="submit"
            value={"Save"}
            // onClick={props.setDone}
            className="btn btn-primary"
          />
        </div>
      </div>
    </form>
  );
  const withDisplay = (
    <div>
      <Display label="Company Name" value={props.company} />
      <Display label="Address" value={props.address} />
      <Display label="City" value={props.city} />
      <Display label="State" value={props.state} />
      <Display label="Zip Code" value={props.zipcode} />
      <Display label="Phone" value={props.phone} />
      <Display label="Remark" value={props.remark} />
      <button onClick={props.toggleEdit} className="btn btn-md btn-info">
        Edit
      </button>
    </div>
  );
  return (
    <div className="DeliveryInfo">
      <div className="mt-4">
        <div className="row">
          <div className="col-md-7">
            <div
              style={{ borderTopColor: "blue", borderTopWidth: "5px" }}
              className="card card-body mb-3 shadow p-3 mb-5 bg-white rounded"
            >
              {props.edit ? withEdit : withDisplay}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
