import React from "react";
import Tabs from "../../common/Tabs";

import Details from "./Details";
const NewContainer = props => {
  const containerContents = (
    <Tabs>
      <div className="container" label="New">
        <Details
          number={props.number}
          size={props.size}
          freight={props.freight}
          customs={props.customs}
          pcsAmount={props.pcsAmount}
          pcsUnit={props.pcsUnit}
          weightAmount={props.weightAmount}
          weightUnit={props.weightUnit}
          dimensionAmount={props.dimensionAmount}
          dimensionUnit={props.dimensionUnit}
          terminal={props.terminal}
          eta={props.eta}
          dischargeDate={props.dischargeDate}
          lfd={props.lfd}
          puDate={props.puDate}
          demurrageDays={props.demurrageDays}
          puTime={props.puTime}
          perDiemDate={props.perDiemDate}
          emptyReturn={props.emptyReturn}
          perDiemDays={props.perDiemDays}
          chasisNo={props.chasisNo}
          chasisPerDiemDate={props.chasisPerDiemDate}
          chasisReturnDate={props.chasisReturnDate}
          chasisPerDiemDays={props.chasisPerDiemDays}
          chasisFlip={props.chasisFlip}
          newChasisNo={props.newChasisNo}
          nightGate={props.nightGate}
          prePull={props.prePull}
          yardStorage={props.yardStorage}
          storageDays={props.storageDays}
          TMF={props.TMF}
          TMFFee={props.TMFFee}
          nightGate={props.nightGate}
          prePull={props.prePull}
          advanceExamFee={props.advanceExamFee}
          examFee={props.examFee}
          advanceDemurrage={props.advanceDemurrage}
          demurrageFee={props.demurrageFee}
          advancePerDiem={props.advancePerDiem}
          perDiemFee={props.perDiemFee}
          advanceDocsFee={props.advanceDocsFee}
          docsFee={props.docsFee}
          remark={props.remark}
          containerInput={props.containerInput}
          changeSelectData={props.changeSelectData}
          changeData={props.changeData}
        />
      </div>
      <div className="d-none" label="" />
    </Tabs>
  );

  console.log(containerContents);
  return (
    <div className="row">
      <div className="col-xl-12">
        <div
          className="card"
          style={{ borderTopColor: "blue", borderTopWidth: "4px" }}
        >
          <div className="card-body">
            <div className="row">
              <h2>Container Details</h2>
            </div>
            {containerContents}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContainer;
