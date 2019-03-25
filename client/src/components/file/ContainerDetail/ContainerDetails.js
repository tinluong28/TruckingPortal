import React from "react";
import ContainerTabs from "../../common/containerTabs";
import SingleTab from "../../common/SingleTab";
import Input from "../../common/Input";
import Details from "../../../container/File/Details";
import Checkbox from "../../common/Checkbox";
import SelectInput from "../../common/Select";
import SelectOptions from "../../common/SelectOptions";

const ContainerDetails = props => {
  const onChange = e => {
    if (e.target.type === "checkbox") {
      props.onChange(e.target.name, e.target.checked);
    } else {
      props.onChange(e.target.name, e.target.value);
    }
  };

  const onSelectChange = name => {
    return e => {
      props.onSelectChange(name, e.target.value);
    };
  };

  console.log(props.containers);
  let containerContents;
  // if (props.containers.length > 0) {
  //   containerContents = (
  //     <ContainerTabs containers={containers} />
  //     // <Tabs>
  //     //   {props.containers.map(container => (
  //     //     <div
  //     //       key={container._id}
  //     //       label={container.number}
  //     //       setID={getCurrentViewContainer}
  //     //     >
  //     //       {/* <Details
  //     //         {...container}
  //     //         containerID={container._id}
  //     //         fileID={props.fileID}
  //     //         // containerInput={props.containerInput}
  //     //       /> */}
  //     //     </div>
  //     //   ))}
  //     // </Tabs>
  //   );
  // } else {
  //   containerContents = (
  //     <SingleTab>
  //       <div className="container" label="New">
  //         <Details
  //         // number={props.number}
  //         // size={props.size}
  //         // freight={props.freight}
  //         // customs={props.customs}
  //         // pcsAmount={props.pcsAmount}
  //         // pcsUnit={props.pcsUnit}
  //         // weightAmount={props.weightAmount}
  //         // weightUnit={props.weightUnit}
  //         // dimensionAmount={props.dimensionAmount}
  //         // dimensionUnit={props.dimensionUnit}
  //         // terminal={props.terminal}
  //         // eta={props.eta}
  //         // dischargeDate={props.dischargeDate}
  //         // lfd={props.lfd}
  //         // puDate={props.puDate}
  //         // demurrageDays={props.demurrageDays}
  //         // puTime={props.puTime}
  //         // perDiemDate={props.perDiemDate}
  //         // emptyReturn={props.emptyReturn}
  //         // perDiemDays={props.perDiemDays}
  //         // chasisNo={props.chasisNo}
  //         // chasisPerDiemDate={props.chasisPerDiemDate}
  //         // chasisReturnDate={props.chasisReturnDate}
  //         // chasisPerDiemDays={props.chasisPerDiemDays}
  //         // chasisFlip={props.chasisFlip}
  //         // newChasisNo={props.newChasisNo}
  //         // nightGate={props.nightGate}
  //         // prePull={props.prePull}
  //         // yardStorage={props.yardStorage}
  //         // storageDays={props.storageDays}
  //         // TMF={props.TMF}
  //         // TMFFee={props.TMFFee}
  //         // nightGate={props.nightGate}
  //         // prePull={props.prePull}
  //         // advanceExamFee={props.advanceExamFee}
  //         // examFee={props.examFee}
  //         // advanceDemurrage={props.advanceDemurrage}
  //         // demurrageFee={props.demurrageFee}
  //         // advancePerDiem={props.advancePerDiem}
  //         // perDiemFee={props.perDiemFee}
  //         // advanceDocsFee={props.advanceDocsFee}
  //         // docsFee={props.docsFee}
  //         // remark={props.remark}
  //         // containerInput={props.containerInput}
  //         // changeSelectData={props.changeSelectData}
  //         // changeData={props.changeData}
  //         />
  //       </div>
  //       <div className="d-none" label="" />
  //     </SingleTab>
  //   );
  // }

  console.log(containerContents);
  const containerSize = SelectOptions.containerSize;
  const PCSUnit = SelectOptions.PCSUnit;
  const weightUnitOptions = SelectOptions.weightUnit;
  const dimensionUnitOptions = SelectOptions.dimensionUnit;
  const releaseStatus = SelectOptions.releaseStatus;
  const container = props.container;
  console.log(container);
  return (
    <div className=" ContainerDetails">
      <form>
        <div className="row">
          <div className="col-lg-4">
            <Input
              inputtype="input"
              type="text"
              name="number"
              value={container.number}
              onChange={() => onChange}
              label="Container"
            />

            <SelectInput
              inputtype="select"
              options={containerSize}
              value={container.size}
              onChange={() => props.onSelectChange("size")}
              label="Size"
            />

            <div className="form-group row">
              <div className="col-md-6">
                <Input
                  inputtype="none"
                  type="text"
                  name="pcsAmount"
                  value={container.pcsAmount}
                  onChange={() => onChange}
                  label="Quantity"
                />
              </div>
              <div className="col-md-3">
                <SelectInput
                  inputtype="none"
                  options={PCSUnit}
                  value={container.pcsUnit}
                  onChange={() => props.onSelectChange("pcsUnit")}
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
                  onChange={() => onChange}
                  label="Weight"
                />
              </div>
              <div className="col-md-3">
                <SelectInput
                  inputtype="none"
                  options={weightUnitOptions}
                  value={container.weightUnit}
                  onChange={() => props.onSelectChange("weightUnit")}
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
                  onChange={() => onChange}
                  label="Dimension"
                />
              </div>
              <div className="col-md-3">
                <SelectInput
                  inputtype="none"
                  options={dimensionUnitOptions}
                  value={container.dimensionUnit}
                  onChange={() => props.onSelectChange("dimensionUnit")}
                />
              </div>
            </div>
            <hr />

            <Input
              inputtype="input"
              type="date"
              name="eta"
              value={container.eta}
              onChange={() => onChange}
              label="ETA"
            />

            <Input
              inputtype="input"
              type="date"
              name="dischargeDate"
              value={container.dischargeDate}
              onChange={() => onChange}
              label="Discharge"
            />

            <Input
              inputtype="input"
              type="date"
              name="lfd"
              value={container.lfd}
              onChange={() => onChange}
              label="LFD"
            />

            <Input
              inputtype="input"
              type="date"
              name="puDate"
              value={container.puDate}
              onChange={() => onChange}
              label="P/U Date"
            />

            <Input
              inputtype="input"
              type="time"
              name="puTime"
              value={container.puTime}
              onChange={() => onChange}
              label="P/U Time"
            />

            <Input
              inputtype="append"
              type="text"
              name="demurrageDays"
              value={container.demurrageDays}
              onChange={() => onChange}
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
                  onChange={() => onChange}
                  label="TMF"
                />
              </div>
              <div className="col-md-3">
                <Input
                  inputtype="append"
                  type="text"
                  value={container.TMFFee}
                  name="TMFFee"
                  onChange={() => onChange}
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
              onChange={() => onChange}
              label="NightGate"
            />

            <Checkbox
              inputtype="checkbox"
              type="checkbox"
              checked={container.prePull}
              name="prePull"
              onChange={() => onChange}
              label="PrePull"
            />

            <div className="row">
              <div className="col-md-4">
                <Checkbox
                  inputtype="checkbox"
                  type="checkbox"
                  checked={container.yardStorage}
                  name="yardStorage"
                  onChange={() => onChange}
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
                    onChange={() => onChange}
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
                  onChange={() => onChange}
                  label="Exam Fee"
                />
              </div>
              <div className="col-md-3">
                <Input
                  inputtype="append"
                  type="text"
                  value={container.examFee}
                  name="examFee"
                  onChange={() => onChange}
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
                  onChange={() => onChange}
                  label="Demurrage"
                />
              </div>
              <div className="col-md-3">
                <Input
                  inputtype="append"
                  type="text"
                  value={container.demurrageFee}
                  name="demurrageFee"
                  onChange={() => onChange}
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
                  onChange={() => onChange}
                  label="Per Diem"
                />
              </div>
              <div className="col-md-3">
                <Input
                  inputtype="append"
                  type="text"
                  value={container.perDiemFee}
                  name="perDiemFee"
                  onChange={() => onChange}
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
                  onChange={() => onChange}
                  label="Docs Fee"
                />
              </div>
              <div className="col-md-3">
                <Input
                  inputtype="append"
                  type="text"
                  value={container.docsFee}
                  name="docsFee"
                  onChange={() => onChange}
                  prepend="$"
                  disabled={container.advanceDocsFee ? false : true}
                />
              </div>
            </div>

            <SelectInput
              inputtype="select"
              options={releaseStatus}
              value={container.freight}
              onChange={() => props.onSelectChange("freight")}
              label="Freight"
            />

            <SelectInput
              inputtype="select"
              options={releaseStatus}
              value={container.customs}
              onChange={() => props.onSelectChange("customs")}
              label="Customs"
            />

            <Input
              inputtype="textarea"
              value={container.remark}
              name="remark"
              onChange={() => onChange}
              label="Remark"
            />
          </div>
          <div className="col-lg-4">
            <Input
              inputtype="input"
              type="text"
              name="chasisNo"
              value={container.chasisNo}
              onChange={() => onChange}
              label="Chasis #"
            />

            <Input
              inputtype="input"
              type="date"
              name="chasisPerDiemDate"
              value={container.chasisPerDiemDate}
              onChange={() => onChange}
              label="Per Diem"
            />

            <Input
              inputtype="input"
              type="date"
              name="chasisReturnDate"
              value={container.chasisReturnDate}
              onChange={() => onChange}
              label="Chasis Return"
            />

            <Input
              inputtype="input"
              type="text"
              name="chasisPerDiemDays"
              value={container.chasisPerDiemDays}
              onChange={() => onChange}
              label="Per Diem"
            />

            <Input
              inputtype="input"
              type="text"
              name="newChasisNo"
              value={container.newChasisNo}
              onChange={() => onChange}
              label="New Chasis#"
            />

            <hr />

            <Input
              inputtype="input"
              type="date"
              name="perDiemDate"
              value={container.perDiemDate}
              onChange={() => onChange}
              label="Per Diem"
            />

            <Input
              inputtype="input"
              type="date"
              name="emptyReturn"
              value={container.emptyReturn}
              onChange={() => onChange}
              label="Empty Return"
            />

            <Input
              inputtype="append"
              type="text"
              name="perDiemDays"
              value={container.perDiemDays}
              onChange={() => onChange}
              label="Detention"
              append="Days"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContainerDetails;
