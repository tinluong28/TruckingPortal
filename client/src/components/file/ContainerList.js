import React from "react";
import Input from "../common/Input";

const ContainerList = props => {
  const onDataChange = e => {
    props.changeData(e.target.name, e.target.value);
  };
  let ContainerDisplay;
  if (props.containerList) {
    ContainerDisplay = props.containerList.map(container => (
      <div>container</div>
    ));
  }

  return (
    <div className="col-md-3">
      <div
        style={{ borderTopColor: "orange", borderTopWidth: "4px" }}
        className="card card-body mb-3 shadow p-3 mb-5 bg-white rounded"
      >
        <h3 className="mb-4">Containers</h3>
        <div className="row">
          <div className="ContainerInput">
            <Input
              inputtype="input"
              type="text"
              name="number"
              value={props.containerInput.number}
              onChange={onDataChange}
              placeholder="Container #"
            />
          </div>
          <button
            onClick={props.addContainer}
            className="btn btn-primary h-75 d-inline"
          >
            <i className="fas fa-plus" />
          </button>
        </div>
        {ContainerDisplay}
      </div>
    </div>
  );
};

export default ContainerList;
