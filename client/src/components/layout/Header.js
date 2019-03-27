import React from "react";
import Navbar from "./Navbar";
import Tracking from "../HomePage/FileSearch/Tracking";
import DriverStatus from "../HomePage/FileSearch/DriverStatus";

const header = () => {
  return (
    <header className="header">
      {/* <nav className="navbar navbar-light bg-primary">
        <span className="navbar-brand h1 text text-white">
          Dial Transportation
        </span>
      </nav> */}
      <div className="row mt-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <Tracking />
            </div>
            <div className="col-sm-5">
              <DriverStatus />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
