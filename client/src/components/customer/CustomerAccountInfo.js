import React from "react";
import Input from "../common/Input";
import Display from "../common/Display";

const CustomerAccountInfo = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };
  const withEdit = (
    <form onSubmit={props.setDone}>
      <small>* = required</small>
      <Input
        inputtype="input"
        label="Tax ID Type"
        type="text"
        name="company"
        value={props.company}
        onChange={onDataChange}
        placeholder="Ex. IRS#"
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
        placeholder="Ex. Compton"
      />
      <Input
        inputtype="input"
        label="Credit Type"
        type="text"
        name="credittype"
        value={props.credittype}
        onChange={onDataChange}
        placeholder="Ex. CA"
      />
      <Input
        inputtype="input"
        label="Credit Limit"
        type="text"
        name="creditlimit"
        value={props.creditlimit}
        onChange={onDataChange}
        placeholder="Ex.90750"
      />
      <Input
        inputtype="input"
        label="Payment Term"
        type="text"
        name="paymentterm"
        value={props.paymentterm}
        onChange={onDataChange}
        placeholder="Ex. Importer/Forwarder/etc."
      />
      <Input
        inputtype="input"
        label="Credit Hold"
        type="date"
        name="credithold"
        value={props.credithold}
        onChange={onDataChange}
      />
      <Input
        inputtype="textarea"
        label="Note"
        name="note"
        value={props.note}
        onChange={onDataChange}
        placeholder="Payment Terms/ Billing Cycle"
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
      <Display label="Tax ID Type" value={props.taxidtype} />
      <Display label="Tax ID#" value={props.taxid} />
      <Display label="Account No" value={props.accountno} />
      <Display label="Credit Type" value={props.credittype} />
      <Display label="Credit Limit" value={props.creditlimit} />
      <Display label="Payment Term" value={props.paymentterm} />
      <Display label="Credit Hold" value={props.credithold} />
      <Display label="Note" value={props.note} />
      <button onClick={props.toggleEdit} className="btn btn-md btn-info">
        Edit
      </button>
    </div>
  );
  return (
    <div className="CustomerInfo">
      <div className="mt-4">
        <div className="col-md-5">
          <div
            style={{ borderTopColor: "blue", borderTopWidth: "5px" }}
            className="card card-body mb-3 shadow p-3 mb-5 bg-white rounded"
          >
            {props.edit ? withEdit : withDisplay}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAccountInfo;
