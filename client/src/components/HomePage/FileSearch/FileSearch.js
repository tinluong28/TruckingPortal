import React, { Component } from "react";
import axios from "axios";

import "./FileSearch.css";
import { Link } from "react-router-dom";

class FileSearch extends Component {
  state = {
    trackValue: "",
    track: true,
    dispatcher: false
  };

  trackSelectedHandler = () => {
    if (this.state.track === true) {
      return this.state;
    }
    this.setState(prevState => ({
      track: !prevState.track,
      dispatcher: !prevState.dispatcher
    }));
  };

  dispatcherSelectedHandler = () => {
    if (this.state.dispatcher === true) {
      return this.state;
    }
    this.setState(prevState => ({
      track: !prevState.track,
      dispatcher: !prevState.dispatcher
    }));
  };

  render() {
    return (
      <div className="container">
        <h5 className="mt-5">Let's keep the world moving...</h5>

        <div className="Main">
          <h1>Quick Search</h1>
          <ul>
            <li>
              <ul className="Console">
                <div
                  style={{
                    float: "left",
                    borderTopLeftRadius: "10px",
                    outline: "none"
                  }}
                  className={this.state.track ? "TrackSelected" : "TrackDarken"}
                >
                  <li onClick={this.trackSelectedHandler}>Track Shipment</li>
                </div>
                <div
                  style={{
                    borderTopRightRadius: "10px",
                    borderTopLeftRadius: "10px"
                  }}
                  className={
                    this.state.dispatcher
                      ? "DispatcherSelected"
                      : "DispatcherDarken"
                  }
                >
                  <li onClick={this.dispatcherSelectedHandler}>Dispatcher</li>
                </div>
              </ul>
            </li>
            <li>
              <div>
                <div className={this.state.track ? "Track" : "Hidden"}>
                  <div style={{ float: "left" }}>
                    <input placeholder="File/Container/Master" />
                  </div>
                  <button className={"Button"}>Track Shipment</button>
                </div>
                <div
                  className={this.state.dispatcher ? "Dispatcher" : "Hidden"}
                >
                  <button className={"Button"} style={{ float: "left" }}>
                    <Link
                      to="/file/create-file"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Open New File
                    </Link>
                  </button>
                  <button className={"Button"}>
                    <Link
                      to="/file/all"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      See List
                    </Link>
                  </button>
                </div>
              </div>
            </li>
          </ul>

          {/*<ul className={classes.Content}>
                    <li>File Search: </li>
                    <li><input placeholder='File No.' value={this.state.fileNo} onChange={(event) => this.setState({fileNo: event.target.value})}/></li>
                    <li><Button onClick={this.FileSearchHandler}>Go</Button></li>
                    <li>|</li>
                    <li><Link to="/dispatcher">New</Link></li>
                    <li>|</li>
                    <li><Link to="/">List</Link></li>  
                </ul>
                <ul className={classes.Content}>
                    <li>Search By:</li>
                    <li>
                        <select>
                            <option>Container</option>
                            <option>Master</option>
                            <option>House</option>
                        </select>
                    </li>
                    <li><input placeholder='Value' value={this.state.fileNo} onChange={(event) => this.setState({fileNo: event.target.value})}/></li>
                    <li><Button onClick={this.FileSearchHandler}>Search</Button></li>

        </ul>*/}
        </div>
      </div>
    );
  }
}

export default FileSearch;
