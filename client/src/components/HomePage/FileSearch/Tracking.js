import React from "react";

const tracking = () => {
  return (
    <div className="Tracking container">
      <h1>Shipment Tracking</h1>
      <p className="hidden-xs">Please enter container, master or file number</p>

      <div className="row">
        <div className="col-md-12 col-center">
          <form className="Tracking-form">
            <div type="text" className="form-group">
              <div className="Tracking-input input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter shipment number"
                  aria-label="Enter shipment number"
                />
                <div className="input-group-append">
                  <button className="btn btn-sm">
                    <span className="row">
                      <i className="fa fa-binoculars">
                        <span className="hidden-xs"> Track Shipment</span>
                      </i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default tracking;
