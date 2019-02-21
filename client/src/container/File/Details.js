import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateContainer,
  deleteContainer
} from "../../actions/deliveryOrderActions";
import Input from "../../components/common/Input";
import SelectInput from "../../components/common/Select";
import SelectOptions from "../../components/common/SelectOptions";

import Checkbox from "../../components/common/Checkbox";
import isEmpty from "../../validation/is-empty";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      container: {
        number: props.number,
        size: props.size,
        freight: props.freight,
        customs: props.customs,
        pcsAmount: props.pcsAmount,
        pcsUnit: props.pcsUnit,
        weightAmount: props.weightAmount,
        weightUnit: props.weightUnit,
        dimensionAmount: props.dimensionAmount,
        dimensionUnit: props.dimensionUnit,
        terminal: props.terminal,
        eta: props.eta,
        dischargeDate: props.dischargeDate,
        lfd: props.lfd,
        puDate: props.puDate,
        demurrageDays: props.demurrageDays,
        puTime: props.puTime,
        perDiemDate: props.perDiemDate,
        emptyReturn: props.emptyReturn,
        perDiemDays: props.perDiemDays,
        chasisNo: props.chasisNo,
        chasisPerDiemDate: props.chasisPerDiemDate,
        chasisReturnDate: props.chasisReturnDate,
        chasisPerDiemDays: props.chasisPerDiemDays,
        chasisFlip: props.chasisFlip,
        newChasisNo: props.newChasisNo,
        yardStorage: props.yardStorage,
        storageDays: props.storageDays,
        TMF: props.TMF,
        TMFFee: props.TMFFee,
        nightGate: props.nightGate,
        prePull: props.prePull,
        advanceExamFee: props.advanceExamFee,
        examFee: props.examFee,
        advanceDemurrage: props.advanceDemurrage,
        demurrageFee: props.demurrageFee,
        advancePerDiem: props.advancePerDiem,
        perDiemFee: props.perDiemFee,
        advanceDocsFee: props.advanceDocsFee,
        docsFee: props.docsFee,
        timeIn: props.timeIn,
        timeOut: props.timeOut,
        waitTime: props.waitTime,
        dryRun: props.dryRun,
        remark: props.remark,
        delivery: [],
        _id: ""
      }
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.container) {
  //     const { container } = nextProps;
  //     container.number = !isEmpty(container.number) ? container.number : "";
  //     container.size = !isEmpty(container.size) ? container.size : "";
  //     container.freight = !isEmpty(container.freight) ? container.freight : "";
  //     container.customs = !isEmpty(container.customs) ? container.customs : "";
  //     container.pcsAmount = !isEmpty(container.pcsAmount)
  //       ? container.pcsAmount
  //       : "";
  //     container.pcsUnit = !isEmpty(container.pcsUnit) ? container.pcsUnit : "";
  //     container.weightAmount = !isEmpty(container.weightAmount)
  //       ? container.weightAmount
  //       : "";
  //     container.weightUnit = !isEmpty(container.weightUnit)
  //       ? container.weightUnit
  //       : "";
  //     container.dimensionAmount = !isEmpty(container.dimensionAmount)
  //       ? container.dimensionAmount
  //       : "";
  //     container.dimensionUnit = !isEmpty(container.dimensionUnit)
  //       ? container.dimensionUnit
  //       : "";
  //     container.terminal = !isEmpty(container.terminal)
  //       ? container.terminal
  //       : "";
  //     container.eta = !isEmpty(container.eta) ? container.eta : "";
  //     container.dischargeDate = !isEmpty(container.dischargeDate)
  //       ? container.dischargeDate
  //       : "";
  //     container.lfd = !isEmpty(container.lfd) ? container.lfd : "";
  //     container.puDate = !isEmpty(container.puDate) ? container.puDate : "";
  //     container.demurrageDays = !isEmpty(container.demurrageDays)
  //       ? container.demurrageDays
  //       : "";
  //     container.puTime = !isEmpty(container.puTime) ? container.puTime : "";
  //     container.perDiemDate = !isEmpty(container.perDiemDate)
  //       ? container.perDiemDate
  //       : "";
  //     container.emptyReturn = !isEmpty(container.emptyReturn)
  //       ? container.emptyReturn
  //       : "";
  //     container.perDiemDays = !isEmpty(container.perDiemDays)
  //       ? container.perDiemDays
  //       : "";
  //     container.chasisNo = !isEmpty(container.chasisNo)
  //       ? container.chasisNo
  //       : "";
  //     container.chasisPerDiemDate = !isEmpty(container.chasisPerDiemDate)
  //       ? container.chasisPerDiemDate
  //       : "";
  //     container.chasisReturnDate = !isEmpty(container.chasisReturnDate)
  //       ? container.chasisReturnDate
  //       : "";
  //     container.chasisPerDiemDays = !isEmpty(container.chasisPerDiemDays)
  //       ? container.chasisPerDiemDays
  //       : "";
  //     // container.chasisFlip =
  //     //   container.chasisPerDiemDays === true
  //     //     ? container.chasisPerDiemDays
  //     //     : false;
  //     container.newChasisNo = !isEmpty(container.newChasisNo)
  //       ? container.newChasisNo
  //       : "";
  //     // container.yardStorage =
  //     //   container.chasisPerDiemDays === true
  //     //     ? container.chasisPerDiemDays
  //     //     : false;
  //     container.storageDays = !isEmpty(container.storageDays)
  //       ? container.storageDays
  //       : "";
  //     // container.TMF =
  //     //   container.chasisPerDiemDays === true
  //     //     ? container.chasisPerDiemDays
  //     //     : false;
  //     container.TMFFee = !isEmpty(container.TMFFee) ? container.TMFFee : "";
  //     // container.nightGate =
  //     //   container.chasisPerDiemDays === true
  //     //     ? container.chasisPerDiemDays
  //     //     : false;
  //     container.prePull = container.perPull ? container.perPull : false;
  //     // container.advanceExamFee =
  //     //   container.advanceExamFee === true ? container.advanceExamFee : false;
  //     container.examFee = !isEmpty(container.examFee) ? container.examFee : "";
  //     // container.advanceDemurrage =
  //     //   container.advanceDemurrage === true
  //     //     ? container.advanceDemurrage
  //     //     : false;
  //     container.demurrageFee = !isEmpty(container.demurrageFee)
  //       ? container.demurrageFee
  //       : "";
  //     // container.advancePerDiem =
  //     //   container.advancePerDiem === true ? container.advancePerDiem : false;
  //     container.perDiemFee = !isEmpty(container.perDiemFee)
  //       ? container.perDiemFee
  //       : "";
  //     // container.advanceDocsFee =
  //     //   container.advanceDocsFee === true ? container.advanceDocsFee : false;
  //     container.docsFee = !isEmpty(container.docsFee) ? container.docsFee : "";
  //     container.timeIn = !isEmpty(container.timeIn) ? container.timeIn : "";
  //     container.timeOut = !isEmpty(container.timeOut) ? container.timeOut : "";
  //     container.waitTime = !isEmpty(container.waitTime)
  //       ? container.waitTime
  //       : "";
  //     container.dryRun = !isEmpty(container.dryRun) ? container.dryRun : "";
  //     container.remark = !isEmpty(container.remark) ? container.remark : "";
  //     this.setState({
  //       container: {
  // number: container.number,
  // size: container.size,
  // freight: container.freight,
  // customs: container.customs,
  // pcsAmount: container.pcsAmount,
  // pcsUnit: container.pcsUnit,
  // weightAmount: container.weightAmount,
  // weightUnit: container.weightUnit,
  // dimensionAmount: container.dimensionAmount,
  // dimensionUnit: container.dimensionUnit,
  // terminal: container.terminal,
  // eta: container.eta,
  // dischargeDate: container.dischargeDate,
  // lfd: container.lfd,
  // puDate: container.puDate,
  // demurrageDays: container.demurrageDays,
  // puTime: container.puTime,
  // perDiemDate: container.perDiemDate,
  // emptyReturn: container.emptyReturn,
  // perDiemDays: container.perDiemDays,
  // chasisNo: container.chasisNo,
  // chasisPerDiemDate: container.chasisPerDiemDate,
  // chasisReturnDate: container.chasisReturnDate,
  // chasisPerDiemDays: container.chasisPerDiemDays,
  // chasisFlip: container.chasisFlip,
  // newChasisNo: container.newChasisNo,
  // yardStorage: container.yardStorage,
  // storageDays: container.storageDays,
  // TMF: container.TMF,
  // TMFFee: container.TMFFee,
  // nightGate: container.nightGate,
  // prePull: container.prePull,
  // advanceExamFee: container.advanceExamFee,
  // examFee: container.examFee,
  // advanceDemurrage: container.advanceDemurrage,
  // demurrageFee: container.demurrageFee,
  // advancePerDiem: container.advancePerDiem,
  // perDiemFee: container.perDiemFee,
  // advanceDocsFee: container.advanceDocsFee,
  // docsFee: container.docsFee,
  // timeIn: container.timeIn,
  // timeOut: container.timeOut,
  // waitTime: container.waitTime,
  // dryRun: container.dryRun,
  // remark: container.remark
  //       }
  //     });
  //   }
  // }
  onDataChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ container: { ...this.state.container, [name]: value } });
  };
  onSelectChange = name => ({ value }) => {
    this.setState({ container: { ...this.state.container, [name]: value } });
  };
  onUpdateContainer = () => {
    const fileID = this.props.fileID;
    const { _id, ...containerData } = this.state.container;
    this.props.updateContainer(fileID, _id, containerData);
  };

  onDeleteContainer = () => {
    const fileID = this.props.fileID;
    const containerID = this.props.containerID;
    this.props.deleteContainer(fileID, containerID);
  };
  render() {
    const containerSize = SelectOptions.containerSize;
    const PCSUnit = SelectOptions.PCSUnit;
    const weightUnitOptions = SelectOptions.weightUnit;
    const dimensionUnitOptions = SelectOptions.dimensionUnit;
    const releaseStatus = SelectOptions.releaseStatus;
    const { container } = this.state;

    return (
      <div className=" ContainerDetails">
        <form>
          <div className="row mb-3 ml-3">
            <button
              onClick={this.props.onUpdateContainer}
              className="btn btn-md btn-outline-success mt-4"
            >
              Save Update
            </button>
            <button
              onClick={this.onDeleteContainer}
              className="btn btn-md btn-outline-danger mt-4 ml-2"
            >
              Delete
            </button>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <Input
                inputtype="input"
                type="text"
                name="number"
                value={container.number}
                onChange={this.onDataChange}
                label="Container"
              />

              <SelectInput
                inputtype="select"
                options={containerSize}
                value={container.size}
                onChange={this.onSelectChange("size")}
                label="Size"
              />

              <div className="form-group row">
                <div className="col-md-6">
                  <Input
                    inputtype="none"
                    type="text"
                    name="pcsAmount"
                    value={container.pcsAmount}
                    onChange={this.onDataChange}
                    label="Quantity"
                  />
                </div>
                <div className="col-md-3">
                  <SelectInput
                    inputtype="none"
                    options={PCSUnit}
                    value={container.pcsUnit}
                    onChange={this.onSelectChange("pcsUnit")}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-6">
                  <Input
                    inputtype="none"
                    type="text"
                    name="weightAmount"
                    value={container.weightAmount}
                    onChange={this.onDataChange}
                    label="Weight"
                  />
                </div>
                <div className="col-md-3">
                  <SelectInput
                    inputtype="none"
                    options={weightUnitOptions}
                    value={container.weightUnit}
                    onChange={this.onSelectChange("weightUnit")}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-6">
                  <Input
                    inputtype="none"
                    type="text"
                    name="dimensionAmount"
                    value={container.dimensionAmount}
                    onChange={this.onDataChange}
                    label="Dimension"
                  />
                </div>
                <div className="col-md-3">
                  <SelectInput
                    inputtype="none"
                    options={dimensionUnitOptions}
                    value={container.dimensionUnit}
                    onChange={this.onSelectChange("dimensionUnit")}
                  />
                </div>
              </div>
              <hr />

              <Input
                inputtype="input"
                type="date"
                name="eta"
                value={container.eta}
                onChange={this.onDataChange}
                label="ETA"
              />

              <Input
                inputtype="input"
                type="date"
                name="dischargeDate"
                value={container.dischargeDate}
                onChange={this.onDataChange}
                label="Discharge"
              />

              <Input
                inputtype="input"
                type="date"
                name="lfd"
                value={container.lfd}
                onChange={this.onDataChange}
                label="LFD"
              />

              <Input
                inputtype="input"
                type="date"
                name="puDate"
                value={container.puDate}
                onChange={this.onDataChange}
                label="P/U Date"
              />

              <Input
                inputtype="input"
                type="time"
                name="puTime"
                value={container.puTime}
                onChange={this.onDataChange}
                label="P/U Time"
              />

              <Input
                inputtype="append"
                type="text"
                name="demurrageDays"
                value={container.demurrageDays}
                onChange={this.onDataChange}
                label="Demurrage"
                append="Days"
              />
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    type="checkbox"
                    checked={container.TMF}
                    name="TMF"
                    onChange={this.onDataChange}
                    label="TMF"
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    inputtype="append"
                    type="text"
                    value={container.TMFFee}
                    name="TMFFee"
                    onChange={this.onDataChange}
                    prepend="$"
                    disabled={container.TMF ? false : true}
                  />
                </div>
              </div>

              <Checkbox
                inputtype="checkbox"
                type="checkbox"
                checked={container.nightGate}
                name="nightGate"
                onChange={this.onDataChange}
                label="NightGate"
              />

              <Checkbox
                inputtype="checkbox"
                type="checkbox"
                checked={container.prePull}
                name="prePull"
                onChange={this.onDataChange}
                label="PrePull"
              />

              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    type="checkbox"
                    checked={container.yardStorage}
                    name="yardStorage"
                    onChange={this.onDataChange}
                    label="Yard Storage"
                  />
                </div>
                <div className="col-md-4">
                  <div>
                    <Input
                      inputtype="append"
                      type="text"
                      value={container.storageDays}
                      name="storageDays"
                      onChange={this.onDataChange}
                      append="Days"
                      disabled={container.yardStorage ? false : true}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    type="checkbox"
                    checked={container.advanceExamFee}
                    name="advanceExamFee"
                    onChange={this.onDataChange}
                    label="Exam Fee"
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    inputtype="append"
                    type="text"
                    value={container.examFee}
                    name="examFee"
                    onChange={this.onDataChange}
                    prepend="$"
                    disabled={container.advanceExamFee ? false : true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    type="checkbox"
                    checked={container.advanceDemurrage}
                    name="advanceDemurrage"
                    onChange={this.onDataChange}
                    label="Demurrage"
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    inputtype="append"
                    type="text"
                    value={container.demurrageFee}
                    name="demurrageFee"
                    onChange={this.onDataChange}
                    prepend="$"
                    disabled={container.advanceDemurrage ? false : true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    type="checkbox"
                    checked={container.advancePerDiem}
                    name="advancePerDiem"
                    onChange={this.onDataChange}
                    label="Per Diem"
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    inputtype="append"
                    type="text"
                    value={container.perDiemFee}
                    name="perDiemFee"
                    onChange={this.onDataChange}
                    prepend="$"
                    disabled={container.advancePerDiem ? false : true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    type="checkbox"
                    checked={container.advanceDocsFee}
                    name="advanceDocsFee"
                    onChange={this.onDataChange}
                    label="Docs Fee"
                  />
                </div>
                <div className="col-md-3">
                  <Input
                    inputtype="append"
                    type="text"
                    value={container.docsFee}
                    name="docsFee"
                    onChange={this.onDataChange}
                    prepend="$"
                    disabled={container.advanceDocsFee ? false : true}
                  />
                </div>
              </div>

              <SelectInput
                inputtype="select"
                options={releaseStatus}
                value={container.freight}
                onChange={this.onSelectChange("freight")}
                label="Freight"
              />

              <SelectInput
                inputtype="select"
                options={releaseStatus}
                value={container.customs}
                onChange={this.onSelectChange("customs")}
                label="Customs"
              />

              <Input
                inputtype="textarea"
                value={container.remark}
                name="remark"
                onChange={this.onDataChange}
                label="Remark"
              />
            </div>
            <div className="col-lg-4">
              <Input
                inputtype="input"
                type="text"
                name="chasisNo"
                value={container.chasisNo}
                onChange={this.onDataChange}
                label="Chasis #"
              />

              <Input
                inputtype="input"
                type="date"
                name="chasisPerDiemDate"
                value={container.chasisPerDiemDate}
                onChange={this.onDataChange}
                label="Per Diem"
              />

              <Input
                inputtype="input"
                type="date"
                name="chasisReturnDate"
                value={container.chasisReturnDate}
                onChange={this.onDataChange}
                label="Chasis Return"
              />

              <Input
                inputtype="input"
                type="text"
                name="chasisPerDiemDays"
                value={container.chasisPerDiemDays}
                onChange={this.onDataChange}
                label="Per Diem"
              />

              <Input
                inputtype="input"
                type="text"
                name="newChasisNo"
                value={container.newChasisNo}
                onChange={this.onDataChange}
                label="New Chasis#"
              />

              <hr />

              <Input
                inputtype="input"
                type="date"
                name="perDiemDate"
                value={container.perDiemDate}
                onChange={this.onDataChange}
                label="Per Diem"
              />

              <Input
                inputtype="input"
                type="date"
                name="emptyReturn"
                value={container.emptyReturn}
                onChange={this.onDataChange}
                label="Empty Return"
              />

              <Input
                inputtype="append"
                type="text"
                name="perDiemDays"
                value={container.perDiemDays}
                onChange={this.onDataChange}
                label="Detention"
                append="Days"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Details.propTypes = {
  updateContainer: PropTypes.func.isRequired,
  deleteContainer: PropTypes.func.isRequired,
  container: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errros,
  deliveryOrder: state.deliveryOrder
});

export default connect(
  mapStateToProps,
  { updateContainer, deleteContainer }
)(Details);
