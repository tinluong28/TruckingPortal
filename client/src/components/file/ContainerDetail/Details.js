import React from "react";
import Input from "../../common/Input";
import SelectInput from "../../common/Select";
import SelectOptions from "../../common/SelectOptions";
import Checkbox from "../../common/Checkbox";

const Details = props => {
  const onDataChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    props.changeData(name, value);
  };
  const onSelectChange = name => ({ value }) => {
    props.changeSelectData(name, value);
  };
  const containerSize = SelectOptions.containerSize;
  const PCSUnit = SelectOptions.PCSUnit;
  const weightUnitOptions = SelectOptions.weightUnit;
  const dimensionUnitOptions = SelectOptions.dimensionUnit;
  const releaseStatus = SelectOptions.releaseStatus;

  return (
    <div className=" ContainerDetails">
      <div className="row">
        <div className="col-xl-12">
          <h2 className="mb-5">Container Details</h2>
          <form action="" className="form-group">
            <div className="row">
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="number"
                      value={props.number}
                      onChange={onDataChange}
                      label="Container"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="eta"
                      value={props.eta}
                      onChange={onDataChange}
                      label="ETA"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="dischargeDate"
                      value={props.dischargeDate}
                      onChange={onDataChange}
                      label="Discharge Date"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="lfd"
                      value={props.lfd}
                      onChange={onDataChange}
                      label="LFD"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="puDate"
                      value={props.puDate}
                      onChange={onDataChange}
                      label="P/U Date"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="time"
                      name="puTime"
                      value={props.puTime}
                      onChange={onDataChange}
                      label="P/U Time"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="append"
                      type="text"
                      name="demurrageDays"
                      value={props.demurrageDays}
                      onChange={onDataChange}
                      label="Demurrage"
                      append="Days"
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="perDiemDate"
                      value={props.perDiemDate}
                      onChange={onDataChange}
                      label="Per Diem"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="emptyReturn"
                      value={props.emptyReturn}
                      onChange={onDataChange}
                      label="Empty Return"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 mr-0 pr-0">
                    <Input
                      inputtype="append"
                      type="text"
                      name="perDiemDays"
                      value={props.perDiemDays}
                      onChange={onDataChange}
                      label="Per Diem"
                      append="Days"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-6 pl-2">
                    <SelectInput
                      inputtype="compactSelect"
                      options={containerSize}
                      value={props.size}
                      onChange={onSelectChange("size")}
                      label="Size"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 mr-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="pcsAmount"
                      value={props.pcsAmount}
                      onChange={onDataChange}
                      label="Piece Count"
                    />
                  </div>
                  <div className="col-md-5 mr-0 p-0">
                    <SelectInput
                      inputtype="compactSelect"
                      options={PCSUnit}
                      value={props.pcsUnit}
                      onChange={onSelectChange("pcsUnit")}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 mr-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="weightAmount"
                      value={props.weightAmount}
                      onChange={onDataChange}
                      label="Weight"
                    />
                  </div>
                  <div className="col-md-5 mr-0 p-0">
                    <SelectInput
                      inputtype="compactSelect"
                      options={weightUnitOptions}
                      value={props.weightUnit}
                      onChange={onSelectChange("weightUnit")}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7 mr-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="dimensionAmount"
                      value={props.dimensionAmount}
                      onChange={onDataChange}
                      label="Dimension"
                    />
                  </div>
                  <div className="col-md-5 mr-0 p-0">
                    <SelectInput
                      inputtype="compactSelect"
                      options={dimensionUnitOptions}
                      value={props.dimensionUnit}
                      onChange={onSelectChange("dimensionUnit")}
                    />
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-md-10 m-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="chasisNo"
                      value={props.chasisNo}
                      onChange={onDataChange}
                      label="Chasis #"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 m-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="chasisPerDiemDate"
                      value={props.chasisPerDiemDate}
                      onChange={onDataChange}
                      label="Per Diem"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 m-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="date"
                      name="chasisReturnDate"
                      value={props.chasisReturnDate}
                      onChange={onDataChange}
                      label="Chasis Return"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 m-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="chasisPerDiemDays"
                      value={props.chasisPerDiemDays}
                      onChange={onDataChange}
                      label="Per Diem"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 m-0 p-0">
                    <Input
                      inputtype="compactInput"
                      type="text"
                      name="newChasisNo"
                      value={props.newChasisNo}
                      onChange={onDataChange}
                      label="New Chasis #"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-7">
                    <SelectInput
                      inputtype="compactSelect"
                      options={releaseStatus}
                      value={props.freight}
                      onChange={onSelectChange("freight")}
                      label="Freight"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <SelectInput
                      inputtype="compactSelect"
                      options={releaseStatus}
                      value={props.customs}
                      onChange={onSelectChange("customs")}
                      label="Customs"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.TMF}
                      name="TMF"
                      onChange={onDataChange}
                      label="TMF"
                    />
                  </div>
                  <div className="col-md-5">
                    <Input
                      inputtype="append"
                      type="text"
                      value={props.TMFFee}
                      name="TMFFee"
                      onChange={onDataChange}
                      prepend="$"
                      disabled={props.TMF ? false : true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.nightGate}
                      name="nightGate"
                      onChange={onDataChange}
                      label="NightGate"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.prePull}
                      name="prePull"
                      onChange={onDataChange}
                      label="PrePull"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.yardStorage}
                      name="yardStorage"
                      onChange={onDataChange}
                      label="Yard Storage"
                    />
                  </div>
                  <div className="col-md-5">
                    <div>
                      <Input
                        inputtype="append"
                        type="text"
                        value={props.storageDays}
                        name="storageDays"
                        onChange={onDataChange}
                        append="Days"
                        disabled={props.yardStorage ? false : true}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.advanceExamFee}
                      name="advanceExamFee"
                      onChange={onDataChange}
                      label="Exam Fee"
                    />
                  </div>
                  <div className="col-md-5">
                    <Input
                      inputtype="append"
                      type="text"
                      value={props.examFee}
                      name="examFee"
                      onChange={onDataChange}
                      prepend="$"
                      disabled={props.advanceExamFee ? false : true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.advanceDemurrage}
                      name="advanceDemurrage"
                      onChange={onDataChange}
                      label="Demurrage"
                    />
                  </div>
                  <div className="col-md-5">
                    <Input
                      inputtype="append"
                      type="text"
                      value={props.demurrageFee}
                      name="demurrageFee"
                      onChange={onDataChange}
                      prepend="$"
                      disabled={props.advanceDemurrage ? false : true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.advancePerDiem}
                      name="advancePerDiem"
                      onChange={onDataChange}
                      label="Per Diem"
                    />
                  </div>
                  <div className="col-md-5">
                    <Input
                      inputtype="append"
                      type="text"
                      value={props.perDiemFee}
                      name="perDiemFee"
                      onChange={onDataChange}
                      prepend="$"
                      disabled={props.advancePerDiem ? false : true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 p-0">
                    <Checkbox
                      inputtype="checkbox"
                      checked={props.advanceDocsFee}
                      name="advanceDocsFee"
                      onChange={onDataChange}
                      label="Docs Fee"
                    />
                  </div>
                  <div className="col-md-5">
                    <Input
                      inputtype="append"
                      type="text"
                      value={props.docsFee}
                      name="docsFee"
                      onChange={onDataChange}
                      prepend="$"
                      disabled={props.advanceDocsFee ? false : true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col md 12">
                    <Input
                      inputtype="textarea"
                      value={props.remark}
                      name="remark"
                      onChange={onDataChange}
                      label="Remark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
