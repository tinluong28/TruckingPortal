import React from "react";
import ContainerTabs from "../../common/containerTabs";
import SingleTab from "../../common/SingleTab";
import Input from "../../common/Input";
import Details from "../../../container/File/Details";

const ContainerDetails = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };
  const newContainerInput = e => {
    props.containerInputHandler(e.target.value);
  };
  const getCurrentViewContainer = number => {
    props.getCurrentViewContainer(number);
  };
  const containers = props.containers;
  console.log(props.containers);
  let containerContents;
  if (props.containers.length > 0) {
    containerContents = (
      <ContainerTabs containers={containers} />
      // <Tabs>
      //   {props.containers.map(container => (
      //     <div
      //       key={container._id}
      //       label={container.number}
      //       setID={getCurrentViewContainer}
      //     >
      //       {/* <Details
      //         {...container}
      //         containerID={container._id}
      //         fileID={props.fileID}
      //         // containerInput={props.containerInput}
      //       /> */}
      //     </div>
      //   ))}
      // </Tabs>
    );
  } else {
    containerContents = (
      <SingleTab>
        <div className="container" label="New">
          <Details
          // number={props.number}
          // size={props.size}
          // freight={props.freight}
          // customs={props.customs}
          // pcsAmount={props.pcsAmount}
          // pcsUnit={props.pcsUnit}
          // weightAmount={props.weightAmount}
          // weightUnit={props.weightUnit}
          // dimensionAmount={props.dimensionAmount}
          // dimensionUnit={props.dimensionUnit}
          // terminal={props.terminal}
          // eta={props.eta}
          // dischargeDate={props.dischargeDate}
          // lfd={props.lfd}
          // puDate={props.puDate}
          // demurrageDays={props.demurrageDays}
          // puTime={props.puTime}
          // perDiemDate={props.perDiemDate}
          // emptyReturn={props.emptyReturn}
          // perDiemDays={props.perDiemDays}
          // chasisNo={props.chasisNo}
          // chasisPerDiemDate={props.chasisPerDiemDate}
          // chasisReturnDate={props.chasisReturnDate}
          // chasisPerDiemDays={props.chasisPerDiemDays}
          // chasisFlip={props.chasisFlip}
          // newChasisNo={props.newChasisNo}
          // nightGate={props.nightGate}
          // prePull={props.prePull}
          // yardStorage={props.yardStorage}
          // storageDays={props.storageDays}
          // TMF={props.TMF}
          // TMFFee={props.TMFFee}
          // nightGate={props.nightGate}
          // prePull={props.prePull}
          // advanceExamFee={props.advanceExamFee}
          // examFee={props.examFee}
          // advanceDemurrage={props.advanceDemurrage}
          // demurrageFee={props.demurrageFee}
          // advancePerDiem={props.advancePerDiem}
          // perDiemFee={props.perDiemFee}
          // advanceDocsFee={props.advanceDocsFee}
          // docsFee={props.docsFee}
          // remark={props.remark}
          // containerInput={props.containerInput}
          // changeSelectData={props.changeSelectData}
          // changeData={props.changeData}
          />
        </div>
        <div className="d-none" label="" />
      </SingleTab>
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
            <div className="row mb-3">
              <div className="col-lg-3">
                <h2>Container Details</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-7 pr-1">
                    <Input
                      inputtype="input"
                      type="text"
                      name="addContainerNumber"
                      value={props.addContainerNumber}
                      onChange={newContainerInput}
                      placeholder="Container #"
                    />
                  </div>
                  <div className="col-md-3 pl-0">
                    <button
                      onClick={props.addContainer}
                      className="btn btn-primary d-inline"
                    >
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">{containerContents}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;
