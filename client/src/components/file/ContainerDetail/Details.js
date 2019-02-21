import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import { connect } from "react-redux";
import {
  getFiles,
  getCurrentFile
} from "../../../actions/deliveryOrderActions";
import Input from "../../../components/common/Input";
import SelectInput from "../../../components/common/Select";
import SelectOptions from "../../../components/common/SelectOptions";
import Checkbox from "../../../components/common/Checkbox";
const Details = props => {
  // componentDidMount() {
  //   props.getCurrentFile("5c5a7963ea8a665e00cb8844");
  //   this.handleInitialize();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.deliveryOrder) {
  //     const file = nextProps.deliveryOrder.file;
  //   }
  // }

  // handleInitialize = () => {
  //   console.log(file);
  //   const initData = file.container[0].number;
  //   this.props.initialize(initData);
  // };

  const { files } = props.deliveryOrder;

  const { handleSubmit } = props;
  const containerSize = SelectOptions.containerSize;
  const PCSUnit = SelectOptions.PCSUnit;
  const weightUnitOptions = SelectOptions.weightUnit;
  const dimensionUnitOptions = SelectOptions.dimensionUnit;
  const releaseStatus = SelectOptions.releaseStatus;
  return (
    <form>
      <div className="row mb-3 ml-3">
        <button
          onClick={props.onUpdateContainer}
          className="btn btn-md btn-outline-success mt-4"
        >
          Save Update
        </button>
        <button
          onClick={props.onDeleteContainer}
          className="btn btn-md btn-outline-danger mt-4 ml-2"
        >
          Delete
        </button>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Field name="number" component={Input} label="Container #" />
          <Field
            name="size"
            component={SelectInput}
            inputtype="select"
            options={containerSize}
            label="Size"
          />

          <div className="form-group row">
            <div className="col-md-6">
              <Field name="pcsAmount" component={Input} label="Quantity" />
            </div>
            <div className="col-md-3">
              <Field
                name="pcsUnit"
                component={SelectInput}
                inputtype="select"
                options={PCSUnit}
                label="Size"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <Field name="weightAmount" component={Input} label="Weight" />
            </div>
            <div className="col-md-3">
              <Field
                name="weightUnit"
                component={SelectInput}
                inputtype="select"
                options={weightUnitOptions}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <Field
                name="dimensionAmount"
                component={Input}
                label="Dimension"
              />
            </div>
            <div className="col-md-3">
              <Field
                name="dimensionUnit"
                component={SelectInput}
                inputtype="select"
                options={dimensionUnitOptions}
              />
            </div>
          </div>
          <hr />
          <Field name="eta" component={Input} label="ETA" />
          <Field
            name="dischargeDate"
            type="date"
            component={Input}
            label="Discharge"
          />
          <Field name="lfd" type="date" component={Input} label="LFD" />
          <Field name="puDate" type="date" component={Input} label="P/U Date" />
          <Field name="puTime" type="time" component={Input} label="P/U Time" />
          <Field name="demurrageDays" component={Input} label="Demurrage" />
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-md-4">
              <Field name="TMF" component={Checkbox} label="TMF" />
            </div>
            <div className="col-md-3">
              <Field
                name="TMFFee"
                component={Input}
                inputtype="append"
                prepend="$"
              />
            </div>
          </div>
          <Field name="nightGate" component={Checkbox} label="NightGate" />
          <Field name="prePull" component={Checkbox} label="Prepull" />

          <div className="row">
            <div className="col-md-4">
              <Field
                name="yardStorage"
                component={Checkbox}
                label="Yard Storage"
              />
            </div>
            <div className="col-md-4">
              <div>
                <Field
                  name="storageDays"
                  component={Input}
                  inputtype="append"
                  append="Days"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Field
                name="advanceExamFee"
                component={Checkbox}
                label="Exam Fee"
              />
            </div>
            <div className="col-md-3">
              <Field
                name="examFee"
                component={Input}
                inputtype="append"
                prepend="$"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Field
                name="advanceDemurrage"
                component={Checkbox}
                label="Demurrage"
              />
            </div>
            <div className="col-md-3">
              <Field
                name="demurrageFee"
                component={Input}
                inputtype="append"
                prepend="$"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Field
                name="advancePerDiem"
                component={Checkbox}
                label="Per Diem"
              />
            </div>
            <div className="col-md-3">
              <Field
                name="perDiemFee"
                component={Input}
                inputtype="append"
                prepend="$"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Field
                name="advanceDocsFee"
                component={Checkbox}
                label="Docs Fee"
              />
            </div>
            <div className="col-md-3">
              <Field
                name="docsFee"
                component={Input}
                inputtype="append"
                prepend="$"
              />
            </div>
          </div>
          <Field
            name="freight"
            component={SelectInput}
            inputtype="select"
            options={releaseStatus}
            label="Freight"
          />

          <Field
            name="customs"
            component={SelectInput}
            inputtype="select"
            options={releaseStatus}
            label="Customs"
          />
          <Field
            name="remark"
            component={Input}
            inputtype="textarea"
            label="Remark"
          />
        </div>
        <div className="col-lg-4">
          <Field name="chasisNo" component={Input} label="Chasis #" />
          <Field name="chasisPerDiemDate" component={Input} label="Per Diem" />
          <Field
            name="chasisReturnDate"
            type="date"
            component={Input}
            label="Chasis Return"
          />
          <Field name="chasisPerDiemDays" component={Input} label="Detention" />
          <Field name="newChasisNo" component={Input} label="New Chasis#" />

          <hr />
          <Field name="perDiemDate" component={Input} label="Per Diem" />
          <Field name="emptyReturn" component={Input} label="Empty Return" />
          <Field name="perDiemDays" component={Input} label="Detention" />
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = state => ({
  deliveryOrder: state.deliveryOrder
});

const form = reduxForm({ form: "container" });

export default connect(
  mapStateToProps,
  { getFiles, getCurrentFile }
)(form(Details));
