import React from "react";
import Input from "../../common/Input";
import SelectInput from "../../common/Select";
import SelectOptions from "../../common/SelectOptions";
import InputSelect from "../../common/InputSelect";
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
        <div className="col-lg-4">
          <Input
            inputtype="input"
            type="text"
            name="number"
            value={props.number}
            onChange={onDataChange}
            label="Container"
          />

          <SelectInput
            inputtype="select"
            options={containerSize}
            value={props.size}
            onChange={onSelectChange("size")}
            label="Size"
          />

          <div className="form-group row">
            <div className="col-md-6">
              <Input
                inputtype="none"
                type="text"
                name="pcsAmount"
                value={props.pcsAmount}
                onChange={onDataChange}
                label="Quantity"
              />
            </div>
            <div className="col-md-3">
              <SelectInput
                inputtype="none"
                options={PCSUnit}
                value={props.pcsUnit}
                onChange={onSelectChange("pcsUnit")}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <Input
                inputtype="none"
                type="text"
                name="weightAmount"
                value={props.weightAmount}
                onChange={onDataChange}
                label="Weight"
              />
            </div>
            <div className="col-md-3">
              <SelectInput
                inputtype="none"
                options={weightUnitOptions}
                value={props.weightUnit}
                onChange={onSelectChange("weightUnit")}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <Input
                inputtype="none"
                type="text"
                name="dimensionAmount"
                value={props.dimensionAmount}
                onChange={onDataChange}
                label="Dimension"
              />
            </div>
            <div className="col-md-3">
              <SelectInput
                inputtype="none"
                options={dimensionUnitOptions}
                value={props.dimensionUnit}
                onChange={onSelectChange("dimensionUnit")}
              />
            </div>
          </div>
          <hr />

          <Input
            inputtype="input"
            type="date"
            name="eta"
            value={props.eta}
            onChange={onDataChange}
            label="ETA"
          />

          <Input
            inputtype="input"
            type="date"
            name="dischargeDate"
            value={props.dischargeDate}
            onChange={onDataChange}
            label="Discharge"
          />

          <Input
            inputtype="input"
            type="date"
            name="lfd"
            value={props.lfd}
            onChange={onDataChange}
            label="LFD"
          />

          <Input
            inputtype="input"
            type="date"
            name="puDate"
            value={props.puDate}
            onChange={onDataChange}
            label="P/U Date"
          />

          <Input
            inputtype="input"
            type="time"
            name="puTime"
            value={props.puTime}
            onChange={onDataChange}
            label="P/U Time"
          />

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
        <div className="col-lg-4">
          <div className="row">
            <div className="col-md-4">
              <Checkbox
                inputtype="checkbox"
                checked={props.TMF}
                name="TMF"
                onChange={onDataChange}
                label="TMF"
              />
            </div>
            <div className="col-md-3">
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

          <Checkbox
            inputtype="checkbox"
            checked={props.nightGate}
            name="nightGate"
            onChange={onDataChange}
            label="NightGate"
          />

          <Checkbox
            inputtype="checkbox"
            checked={props.prePull}
            name="prePull"
            onChange={onDataChange}
            label="PrePull"
          />

          <div className="row">
            <div className="col-md-4">
              <Checkbox
                inputtype="checkbox"
                checked={props.yardStorage}
                name="yardStorage"
                onChange={onDataChange}
                label="Yard Storage"
              />
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
              <Checkbox
                inputtype="checkbox"
                checked={props.advanceExamFee}
                name="advanceExamFee"
                onChange={onDataChange}
                label="Exam Fee"
              />
            </div>
            <div className="col-md-3">
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
            <div className="col-md-4">
              <Checkbox
                inputtype="checkbox"
                checked={props.advanceDemurrage}
                name="advanceDemurrage"
                onChange={onDataChange}
                label="Demurrage"
              />
            </div>
            <div className="col-md-3">
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
            <div className="col-md-4">
              <Checkbox
                inputtype="checkbox"
                checked={props.advancePerDiem}
                name="advancePerDiem"
                onChange={onDataChange}
                label="Per Diem"
              />
            </div>
            <div className="col-md-3">
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
            <div className="col-md-4">
              <Checkbox
                inputtype="checkbox"
                checked={props.advanceDocsFee}
                name="advanceDocsFee"
                onChange={onDataChange}
                label="Docs Fee"
              />
            </div>
            <div className="col-md-3">
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

          <SelectInput
            inputtype="select"
            options={releaseStatus}
            value={props.freight}
            onChange={onSelectChange("freight")}
            label="Freight"
          />

          <SelectInput
            inputtype="select"
            options={releaseStatus}
            value={props.customs}
            onChange={onSelectChange("customs")}
            label="Customs"
          />

          <Input
            inputtype="textarea"
            value={props.remark}
            name="remark"
            onChange={onDataChange}
            label="Remark"
          />
        </div>
        <div className="col-lg-4">
          <Input
            inputtype="input"
            type="text"
            name="chasisNo"
            value={props.chasisNo}
            onChange={onDataChange}
            label="Chasis #"
          />

          <Input
            inputtype="input"
            type="date"
            name="chasisPerDiemDate"
            value={props.chasisPerDiemDate}
            onChange={onDataChange}
            label="Per Diem"
          />

          <Input
            inputtype="input"
            type="date"
            name="chasisReturnDate"
            value={props.chasisReturnDate}
            onChange={onDataChange}
            label="Chasis Return"
          />

          <Input
            inputtype="input"
            type="text"
            name="chasisPerDiemDays"
            value={props.chasisPerDiemDays}
            onChange={onDataChange}
            label="Per Diem"
          />

          <Input
            inputtype="input"
            type="text"
            name="newChasisNo"
            value={props.newChasisNo}
            onChange={onDataChange}
            label="New Chasis#"
          />

          <hr />

          <Input
            inputtype="input"
            type="date"
            name="perDiemDate"
            value={props.perDiemDate}
            onChange={onDataChange}
            label="Per Diem"
          />

          <Input
            inputtype="input"
            type="date"
            name="emptyReturn"
            value={props.emptyReturn}
            onChange={onDataChange}
            label="Empty Return"
          />

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
  );
};

export default Details;
