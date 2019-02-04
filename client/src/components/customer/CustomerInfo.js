import React from "react";
import Input from "../common/Input";
import Display from "../common/Display";
import SelectInput from "../common/Select";
import SelectOptions from "../common/SelectOptions";

const CustomerInfo = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };
  const onSelectChange = name => ({ value }) => {
    props.changeSelectData(name, value);
  };
  const taxIDType = SelectOptions.taxIDType;
  const creditType = SelectOptions.creditType;
  const states = SelectOptions.states;
  const creditHold = SelectOptions.creditHold;
  const withEdit = (
    <form onSubmit={props.setDone}>
      <small>* = required</small>
      <div className="row">
        <div className="col-md-6">
          <Input
            inputtype="input"
            label="Company*"
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
            label="Business Type"
            type="text"
            name="businesstype"
            value={props.businesstype}
            onChange={onDataChange}
            placeholder="Ex. Importer/Forwarder/etc."
          />
          <Input
            inputtype="input"
            label="Start Date"
            type="date"
            name="doingbusinesssince"
            value={props.doingbusinesssince}
            onChange={onDataChange}
          />
          <Input
            inputtype="textarea"
            label="Remark"
            name="remark"
            value={props.remark}
            onChange={onDataChange}
            placeholder="Any special requests"
          />
        </div>
        <div className="col-md-6">
          <SelectInput
            inputtype="select"
            placeholder="Select One"
            label="Tax ID Type"
            options={taxIDType}
            value={props.taxidtype}
            onChange={onSelectChange("taxidtype")}
          />
          <Input
            inputtype="input"
            label="Tax ID No"
            type="text"
            name="taxid"
            value={props.taxid}
            onChange={onDataChange}
            placeholder="Ex. 90-8888888"
          />
          <Input
            inputtype="input"
            label="Account No"
            type="text"
            name="accountno"
            value={props.accountno}
            onChange={onDataChange}
            placeholder="Bank account"
          />
          <SelectInput
            inputtype="select"
            placeholder="Select One"
            options={creditType}
            label="Credit Type"
            value={props.credittype}
            onChange={onSelectChange("credittype")}
          />
          <Input
            inputtype="input"
            label="Credit Limit"
            type="text"
            name="creditlimit"
            value={props.creditlimit}
            onChange={onDataChange}
            placeholder="$"
          />
          <Input
            inputtype="input"
            label="Payment Term"
            type="text"
            name="paymentterm"
            value={props.paymentterm}
            onChange={onDataChange}
            placeholder="COD/ 30 DAY/ 60 DAY"
          />
          <SelectInput
            inputtype="select"
            defaultValue="NO"
            placeholder="Select One"
            options={creditHold}
            label="Credit Hold"
            value={props.credithold}
            onChange={onSelectChange("credithold")}
          />
          <Input
            inputtype="textarea"
            label="Notes"
            name="note"
            value={props.note}
            onChange={onDataChange}
            placeholder="Notes on account and payment info"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-10">
          <button
            onClick={props.CancelEditHandler}
            className="btn btn-outline-dark mr-2"
            style={{
              display: props.companyName ? "inline-block" : "none"
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
    <div className="row">
      <div className="col-md-6">
        <Display label="Company" value={props.company} />
        <Display label="Address" value={props.address} />
        <Display label="City" value={props.city} />
        <Display label="State" value={props.state} />
        <Display label="Zip Code" value={props.zipcode} />
        <Display label="Business Type" value={props.businesstype} />
        <Display label="Start Date" value={props.doingbusinesssince} />
        <Display label="Remark" value={props.remark} />
      </div>
      <div className="col-md-6">
        <Display label="Tax ID Type" value={props.taxidtype} />
        <Display label="Tax ID#" value={props.taxid} />
        <Display label="Account No" value={props.accountno} />
        <Display label="Credit Type" value={props.credittype} />
        <Display label="Credit Limit" value={props.creditlimit} />
        <Display label="Payment Term" value={props.paymentterm} />
        <Display label="Credit Hold" value={props.credithold} />
        <Display label="Note" value={props.note} />
      </div>
      <div className="col-md-5">
        <button onClick={props.EditHandler} className="btn btn-md btn-info">
          Edit
        </button>
      </div>
    </div>
  );
  return (
    <div className="CustomerInfo">
      <div className="mt-4">
        <div
          style={{ borderTopColor: "blue", borderTopWidth: "5px" }}
          className="card card-body mb-3 shadow p-3 mb-5 bg-white rounded"
        >
          {props.edit ? withEdit : withDisplay}
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
