import React from "react";
import Tabs from "../../common/Tabs";

import Details from "./Details";
const ContainerDetails = props => {
  const containers = props.containers;
  console.log(props.containers);
  let containerContents;
  if (props.containers.length > 0) {
    containerContents = (
      <Tabs>
        {props.containers.map(container => (
          <div key={container._id} label={container.number}>
            <Details
              {...container}
              containerInput={props.containerInput}
              changeSelectData={props.changeSelectData}
              changeData={props.changeData}
            />
          </div>
        ))}
      </Tabs>
    );
  } else {
    containerContents = (
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
  }

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
            {/* <Tabs>
              <div key={containers[0]._id} label={containers[0].number}>
                <Details
                  number={containers[0].number}
                  size={containers[0].size}
                  freight={containers[0].freight}
                  customs={containers[0].customs}
                  pcsAmount={containers[0].pcsAmount}
                  pcsUnit={containers[0].pcsUnit}
                  weightAmount={containers[0].weightAmount}
                  weightUnit={containers[0].weightUnit}
                  dimensionAmount={containers[0].dimensionAmount}
                  dimensionUnit={containers[0].dimensionUnit}
                  terminal={containers[0].terminal}
                  eta={containers[0].eta}
                  dischargeDate={containers[0].dischargeDate}
                  lfd={containers[0].lfd}
                  puDate={containers[0].puDate}
                  demurrageDays={containers[0].demurrageDays}
                  puTime={containers[0].puTime}
                  perDiemDate={containers[0].perDiemDate}
                  emptyReturn={containers[0].emptyReturn}
                  perDiemDays={containers[0].perDiemDays}
                  chasisNo={containers[0].chasisNo}
                  chasisPerDiemDate={containers[0].chasisPerDiemDate}
                  chasisReturnDate={containers[0].chasisReturnDate}
                  chasisPerDiemDays={containers[0].chasisPerDiemDays}
                  chasisFlip={containers[0].chasisFlip}
                  newChasisNo={containers[0].newChasisNo}
                  nightGate={containers[0].nightGate}
                  prePull={containers[0].prePull}
                  yardStorage={containers[0].yardStorage}
                  storageDays={containers[0].storageDays}
                  TMF={containers[0].TMF}
                  TMFFee={containers[0].TMFFee}
                  nightGate={containers[0].nightGate}
                  prePull={containers[0].prePull}
                  advanceExamFee={containers[0].advanceExamFee}
                  examFee={containers[0].examFee}
                  advanceDemurrage={containers[0].advanceDemurrage}
                  demurrageFee={containers[0].demurrageFee}
                  advancePerDiem={containers[0].advancePerDiem}
                  perDiemFee={containers[0].perDiemFee}
                  advanceDocsFee={containers[0].advanceDocsFee}
                  docsFee={containers[0].docsFee}
                  remark={containers[0].remark}
                  containerInput={props.containerInput}
                  changeSelectData={props.changeSelectData}
                  changeData={props.changeData}
                />
              </div>
              <div key={containers[1]._id} label={containers[1].number}>
                <Details
                  number={containers[1].number}
                  size={containers[1].size}
                  freight={containers[1].freight}
                  customs={containers[1].customs}
                  pcsAmount={containers[1].pcsAmount}
                  pcsUnit={containers[1].pcsUnit}
                  weightAmount={containers[1].weightAmount}
                  weightUnit={containers[1].weightUnit}
                  dimensionAmount={containers[1].dimensionAmount}
                  dimensionUnit={containers[1].dimensionUnit}
                  terminal={containers[1].terminal}
                  eta={containers[1].eta}
                  dischargeDate={containers[1].dischargeDate}
                  lfd={containers[1].lfd}
                  puDate={containers[1].puDate}
                  demurrageDays={containers[1].demurrageDays}
                  puTime={containers[1].puTime}
                  perDiemDate={containers[1].perDiemDate}
                  emptyReturn={containers[1].emptyReturn}
                  perDiemDays={containers[1].perDiemDays}
                  chasisNo={containers[1].chasisNo}
                  chasisPerDiemDate={containers[1].chasisPerDiemDate}
                  chasisReturnDate={containers[1].chasisReturnDate}
                  chasisPerDiemDays={containers[1].chasisPerDiemDays}
                  chasisFlip={containers[1].chasisFlip}
                  newChasisNo={containers[1].newChasisNo}
                  nightGate={containers[1].nightGate}
                  prePull={containers[1].prePull}
                  yardStorage={containers[1].yardStorage}
                  storageDays={containers[1].storageDays}
                  TMF={containers[1].TMF}
                  TMFFee={containers[1].TMFFee}
                  nightGate={containers[1].nightGate}
                  prePull={containers[1].prePull}
                  advanceExamFee={containers[1].advanceExamFee}
                  examFee={containers[1].examFee}
                  advanceDemurrage={containers[1].advanceDemurrage}
                  demurrageFee={containers[1].demurrageFee}
                  advancePerDiem={containers[1].advancePerDiem}
                  perDiemFee={containers[1].perDiemFee}
                  advanceDocsFee={containers[1].advanceDocsFee}
                  docsFee={containers[1].docsFee}
                  remark={containers[1].remark}
                  containerInput={props.containerInput}
                  changeSelectData={props.changeSelectData}
                  changeData={props.changeData}
                />
              </div>
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
              
            </Tabs> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;
