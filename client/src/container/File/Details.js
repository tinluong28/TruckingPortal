import React, { Component } from "react";
import { Field, reduxForm, initialize } from "redux-form";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateContainer,
  deleteContainer,
  saveContainerToState
} from "../../actions/deliveryOrderActions";
import Input from "../../components/common/Input";
import SelectInput from "../../components/common/Select";
import SelectOptions from "../../components/common/SelectOptions";
import ContainerTabs from "../../components/file/ContainerDetail/ContainerTabs";
import ContainerDetails from "../../components/file/ContainerDetail/ContainerDetails";
import Checkbox from "../../components/common/Checkbox";
import isEmpty from "../../validation/is-empty";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContainer:
        this.props.containers.length > 0 &&
        !isEmpty(this.props.containers[0].number)
          ? this.props.containers[0].number
          : "",
      container: {
        number:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].number)
            ? this.props.containers[0].number
            : "",
        size:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].size)
            ? this.props.containers[0].size
            : "",
        freight:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].freight)
            ? this.props.containers[0].freight
            : "",
        customs:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].customs)
            ? this.props.containers[0].customs
            : "",
        pcsAmount:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].pcsAmount)
            ? this.props.containers[0].pcsAmount
            : "",
        pcsUnit:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].pcsUnit)
            ? this.props.containers[0].pcsUnit
            : "",
        weightAmount:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].weightAmount)
            ? this.props.containers[0].weightAmount
            : "",
        weightUnit:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].weightUnit)
            ? this.props.containers[0].weightUnit
            : "",
        dimensionAmount:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].dimensionAmount)
            ? this.props.containers[0].dimensionAmount
            : "",
        dimensionUnit:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].dimensionUnit)
            ? this.props.containers[0].dimensionUnit
            : "",
        terminal:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].terminal)
            ? this.props.containers[0].terminal
            : "",
        eta:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].eta)
            ? this.props.containers[0].eta
            : "",
        dischargeDate:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].dischargeDate)
            ? this.props.containers[0].dischargeDate
            : "",
        lfd:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].lfd)
            ? this.props.containers[0].lfd
            : "",
        puDate:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].puDate)
            ? this.props.containers[0].puDate
            : "",
        demurrageDays:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].demurrageDays)
            ? this.props.containers[0].demurrageDays
            : "",
        puTime:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].puTime)
            ? this.props.containers[0].puTime
            : "",
        perDiemDate:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].perDiemDate)
            ? this.props.containers[0].perDiemDate
            : "",
        emptyReturn:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].emptyReturn)
            ? this.props.containers[0].emptyReturn
            : "",
        perDiemDays:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].perDiemDays)
            ? this.props.containers[0].perDiemDays
            : "",
        chasisNo:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].chasisNo)
            ? this.props.containers[0].chasisNo
            : "",
        chasisPerDiemDate:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].chasisPerDiemDate)
            ? this.props.containers[0].chasisPerDiemDate
            : "",
        chasisReturnDate:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].chasisReturnDate)
            ? this.props.containers[0].chasisReturnDate
            : "",
        chasisPerDiemDays:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].chasisPerDiemDays)
            ? this.props.containers[0].chasisPerDiemDays
            : "",
        chasisFlip:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].chasisFlip)
            ? this.props.containers[0].chasisFlip
            : "",
        newChasisNo:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].newChasisNo)
            ? this.props.containers[0].newChasisNo
            : "",
        yardStorage:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].yardStorage)
            ? this.props.containers[0].yardStorage
            : false,
        storageDays:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].storageDays)
            ? this.props.containers[0].storageDays
            : "",
        TMF:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].TMF)
            ? this.props.containers[0].TMF
            : false,
        TMFFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].TMFFee)
            ? this.props.containers[0].TMFFee
            : "",
        nightGate:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].nightGate)
            ? this.props.containers[0].nightGate
            : false,
        prePull:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].prePull)
            ? this.props.containers[0].prePull
            : false,
        advanceExamFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].advanceExamFee)
            ? this.props.containers[0].advanceExamFee
            : false,
        examFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].examFee)
            ? this.props.containers[0].examFee
            : "",
        advanceDemurrage:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].advanceDemurrage)
            ? this.props.containers[0].advanceDemurrage
            : false,
        demurrageFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].demurrageFee)
            ? this.props.containers[0].demurrageFee
            : "",
        advancePerDiem:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].advancePerDiem)
            ? this.props.containers[0].advancePerDiem
            : false,
        perDiemFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].perDiemFee)
            ? this.props.containers[0].perDiemFee
            : "",
        advanceDocsFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].advanceDocsFee)
            ? this.props.containers[0].advanceDocsFee
            : false,
        docsFee:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].docsFee)
            ? this.props.containers[0].docsFee
            : "",
        timeIn:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].timeIn)
            ? this.props.containers[0].timeIn
            : "",
        timeOut:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].timeOut)
            ? this.props.containers[0].timeOut
            : "",
        waitTime:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].waitTime)
            ? this.props.containers[0].waitTime
            : "",
        dryRun:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].dryRun)
            ? this.props.containers[0].dryRun
            : "",
        remark:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0].remark)
            ? this.props.containers[0].remark
            : "",
        delivery: [],
        _id:
          this.props.containers.length > 0 &&
          !isEmpty(this.props.containers[0]._id)
            ? this.props.containers[0]._id
            : ""
      }
    };
  }

  onDataChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ container: { ...this.state.container, [name]: value } });
  };
  onCheckboxChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.checked;
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
  //Switch between containers
  switchContainer = selectedContNumber => {
    //Save current data to Container state in Redux
    const updatedContainer = this.state.container;
    this.props.saveContainerToState(this.props.containers, updatedContainer);
    //Get new container info corresponding to the selected container number
    let selectedContainer;
    this.props.containers.map(container => {
      if (container.number == selectedContNumber) {
        selectedContainer = container;
      }
    });

    selectedContainer.number = !isEmpty(selectedContainer.number)
      ? selectedContainer.number
      : "";
    selectedContainer.size = !isEmpty(selectedContainer.size)
      ? selectedContainer.size
      : "";
    selectedContainer.freight = !isEmpty(selectedContainer.freight)
      ? selectedContainer.freight
      : "";
    selectedContainer.customs = !isEmpty(selectedContainer.customs)
      ? selectedContainer.customs
      : "";
    selectedContainer.pcsAmount = !isEmpty(selectedContainer.pcsAmount)
      ? selectedContainer.pcsAmount
      : "";
    selectedContainer.pcsUnit = !isEmpty(selectedContainer.pcsUnit)
      ? selectedContainer.pcsUnit
      : "";
    selectedContainer.weightAmount = !isEmpty(selectedContainer.weightAmount)
      ? selectedContainer.weightAmount
      : "";
    selectedContainer.weightUnit = !isEmpty(selectedContainer.weightUnit)
      ? selectedContainer.weightUnit
      : "";
    selectedContainer.dimensionAmount = !isEmpty(
      selectedContainer.dimensionAmount
    )
      ? selectedContainer.dimensionAmount
      : "";
    selectedContainer.dimensionUnit = !isEmpty(selectedContainer.dimensionUnit)
      ? selectedContainer.dimensionUnit
      : "";
    selectedContainer.terminal = !isEmpty(selectedContainer.terminal)
      ? selectedContainer.terminal
      : "";
    selectedContainer.eta = !isEmpty(selectedContainer.eta)
      ? selectedContainer.eta
      : "";
    selectedContainer.dischargeDate = !isEmpty(selectedContainer.dischargeDate)
      ? selectedContainer.dischargeDate
      : "";
    selectedContainer.lfd = !isEmpty(selectedContainer.lfd)
      ? selectedContainer.lfd
      : "";
    selectedContainer.puDate = !isEmpty(selectedContainer.puDate)
      ? selectedContainer.puDate
      : "";
    selectedContainer.demurrageDays = !isEmpty(selectedContainer.demurrageDays)
      ? selectedContainer.demurrageDays
      : "";
    selectedContainer.puTime = !isEmpty(selectedContainer.puTime)
      ? selectedContainer.puTime
      : "";
    selectedContainer.perDiemDate = !isEmpty(selectedContainer.perDiemDate)
      ? selectedContainer.perDiemDate
      : "";
    selectedContainer.emptyReturn = !isEmpty(selectedContainer.emptyReturn)
      ? selectedContainer.emptyReturn
      : "";
    selectedContainer.perDiemDays = !isEmpty(selectedContainer.perDiemDays)
      ? selectedContainer.perDiemDays
      : "";
    selectedContainer.chasisNo = !isEmpty(selectedContainer.chasisNo)
      ? selectedContainer.chasisNo
      : "";
    selectedContainer.chasisPerDiemDate = !isEmpty(
      selectedContainer.chasisPerDiemDate
    )
      ? selectedContainer.chasisPerDiemDate
      : "";
    selectedContainer.chasisReturnDate = !isEmpty(
      selectedContainer.chasisReturnDate
    )
      ? selectedContainer.chasisReturnDate
      : "";
    selectedContainer.chasisPerDiemDays = !isEmpty(
      selectedContainer.chasisPerDiemDays
    )
      ? selectedContainer.chasisPerDiemDays
      : "";
    selectedContainer.chasisFlip = !isEmpty(selectedContainer.chasisFlip)
      ? selectedContainer.chasisFlip
      : false;
    selectedContainer.newChasisNo = !isEmpty(selectedContainer.newChasisNo)
      ? selectedContainer.newChasisNo
      : "";
    selectedContainer.yardStorage = !isEmpty(selectedContainer.yardStorage)
      ? selectedContainer.yardStorage
      : false;
    selectedContainer.storageDays = !isEmpty(selectedContainer.storageDays)
      ? selectedContainer.storageDays
      : "";
    selectedContainer.TMF = !isEmpty(selectedContainer.TMF)
      ? selectedContainer.TMF
      : false;
    selectedContainer.TMFFee = !isEmpty(selectedContainer.TMFFee)
      ? selectedContainer.TMFFee
      : "";
    selectedContainer.nightGate = !isEmpty(selectedContainer.nightGate)
      ? selectedContainer.nightGate
      : false;
    selectedContainer.prePull = !isEmpty(selectedContainer.perPull)
      ? selectedContainer.perPull
      : false;
    selectedContainer.advanceExamFee = !isEmpty(
      selectedContainer.advanceExamFee
    )
      ? selectedContainer.advanceExamFee
      : false;
    selectedContainer.examFee = !isEmpty(selectedContainer.examFee)
      ? selectedContainer.examFee
      : "";
    selectedContainer.advanceDemurrage = !isEmpty(
      selectedContainer.advanceDemurrage
    )
      ? selectedContainer.advanceDemurrage
      : false;
    selectedContainer.demurrageFee = !isEmpty(selectedContainer.demurrageFee)
      ? selectedContainer.demurrageFee
      : "";
    selectedContainer.advancePerDiem = !isEmpty(
      selectedContainer.advancePerDiem
    )
      ? selectedContainer.advancePerDiem
      : false;
    selectedContainer.perDiemFee = !isEmpty(selectedContainer.perDiemFee)
      ? selectedContainer.perDiemFee
      : "";
    selectedContainer.advanceDocsFee = !isEmpty(
      selectedContainer.advanceDocsFee
    )
      ? selectedContainer.advanceDocsFee
      : false;
    selectedContainer.docsFee = !isEmpty(selectedContainer.docsFee)
      ? selectedContainer.docsFee
      : "";
    selectedContainer.timeIn = !isEmpty(selectedContainer.timeIn)
      ? selectedContainer.timeIn
      : "";
    selectedContainer.timeOut = !isEmpty(selectedContainer.timeOut)
      ? selectedContainer.timeOut
      : "";
    selectedContainer.waitTime = !isEmpty(selectedContainer.waitTime)
      ? selectedContainer.waitTime
      : "";
    selectedContainer.dryRun = !isEmpty(selectedContainer.dryRun)
      ? selectedContainer.dryRun
      : "";
    selectedContainer.remark = !isEmpty(selectedContainer.remark)
      ? selectedContainer.remark
      : "";

    //Set the new container info to local state
    this.setState({
      container: {
        number: selectedContainer.number,
        size: selectedContainer.size,
        freight: selectedContainer.freight,
        customs: selectedContainer.customs,
        pcsAmount: selectedContainer.pcsAmount,
        pcsUnit: selectedContainer.pcsUnit,
        weightAmount: selectedContainer.weightAmount,
        weightUnit: selectedContainer.weightUnit,
        dimensionAmount: selectedContainer.dimensionAmount,
        dimensionUnit: selectedContainer.dimensionUnit,
        terminal: selectedContainer.terminal,
        eta: selectedContainer.eta,
        dischargeDate: selectedContainer.dischargeDate,
        lfd: selectedContainer.lfd,
        puDate: selectedContainer.puDate,
        demurrageDays: selectedContainer.demurrageDays,
        puTime: selectedContainer.puTime,
        perDiemDate: selectedContainer.perDiemDate,
        emptyReturn: selectedContainer.emptyReturn,
        perDiemDays: selectedContainer.perDiemDays,
        chasisNo: selectedContainer.chasisNo,
        chasisPerDiemDate: selectedContainer.chasisPerDiemDate,
        chasisReturnDate: selectedContainer.chasisReturnDate,
        chasisPerDiemDays: selectedContainer.chasisPerDiemDays,
        chasisFlip: selectedContainer.chasisFlip,
        newChasisNo: selectedContainer.newChasisNo,
        yardStorage: selectedContainer.yardStorage,
        storageDays: selectedContainer.storageDays,
        TMF: selectedContainer.TMF,
        TMFFee: selectedContainer.TMFFee,
        nightGate: selectedContainer.nightGate,
        prePull: selectedContainer.prePull,
        advanceExamFee: selectedContainer.advanceExamFee,
        examFee: selectedContainer.examFee,
        advanceDemurrage: selectedContainer.advanceDemurrage,
        demurrageFee: selectedContainer.demurrageFee,
        advancePerDiem: selectedContainer.advancePerDiem,
        perDiemFee: selectedContainer.perDiemFee,
        advanceDocsFee: selectedContainer.advanceDocsFee,
        docsFee: selectedContainer.docsFee,
        timeIn: selectedContainer.timeIn,
        timeOut: selectedContainer.timeOut,
        waitTime: selectedContainer.waitTime,
        dryRun: selectedContainer.dryRun,
        remark: selectedContainer.remark,
        _id: selectedContainer._id
      }
    });
  };
  render() {
    const containerSize = SelectOptions.containerSize;
    const PCSUnit = SelectOptions.PCSUnit;
    const weightUnitOptions = SelectOptions.weightUnit;
    const dimensionUnitOptions = SelectOptions.dimensionUnit;
    const releaseStatus = SelectOptions.releaseStatus;
    let { container } = this.state;
    const containerNumbers = this.props.containers.map(
      container => container.number
    );
    console.log(containerNumbers);
    return (
      <div>
        <ContainerTabs
          containerNumbers={containerNumbers}
          switchContainer={this.switchContainer}
        />
        {/* <ContainerDetails
          container={this.state.container}
          onChange={this.onDataChange}
          onSelectChange={this.onSelectChange}
        /> */}
        <form>
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
                    checked={container.TMF}
                    name="TMF"
                    onChange={this.onCheckboxChange}
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
                checked={container.nightGate}
                name="nightGate"
                onChange={this.onCheckboxChange}
                label="NightGate"
              />

              <Checkbox
                inputtype="checkbox"
                checked={container.prePull}
                name="prePull"
                onChange={this.onCheckboxChange}
                label="PrePull"
              />

              <div className="row">
                <div className="col-md-4">
                  <Checkbox
                    inputtype="checkbox"
                    checked={container.yardStorage}
                    name="yardStorage"
                    onChange={this.onCheckboxChange}
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
                    checked={container.advanceExamFee}
                    name="advanceExamFee"
                    onChange={this.onCheckboxChange}
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
                    checked={container.advanceDemurrage}
                    name="advanceDemurrage"
                    onChange={this.onDatonCheckboxChangeaChange}
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
                    checked={container.advancePerDiem}
                    name="advancePerDiem"
                    onChange={this.onCheckboxChange}
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
                    checked={container.advanceDocsFee}
                    name="advanceDocsFee"
                    onChange={this.onCheckboxChange}
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
  saveContainerToState: PropTypes.func.isRequired,
  container: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errros,
  deliveryOrder: state.deliveryOrder,
  containers: state.deliveryOrder.containers
});

export default connect(
  mapStateToProps,
  { updateContainer, deleteContainer, saveContainerToState }
)(Details);
