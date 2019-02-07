import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFiles } from "../../../actions/deliveryOrderActions";
import Spinner from "../../../components/common/Spinner/Spinner";
import SearchBar from "../../../components/common/SearchBar";
import FileItem from "./FileItem";

class FileList extends Component {
  componentDidMount() {
    this.props.getFiles();
  }
  render() {
    const { files, loading } = this.props.deliveryOrder;
    let fileItems;

    if (files === null || loading) {
      fileItems = <Spinner />;
    } else {
      if (files.length > 0) {
        fileItems = files.map(file => (
          <FileItem key={file._id} id={file._id} file={file} />
        ));
      } else {
        fileItems = <h4>No files found...</h4>;
      }
    }

    return (
      <div className="customers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <h1 className="display-4 text-center mt-4 title">File List</h1>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <Link
                    to="/file/create-file"
                    className="btn btn-md btn-info mb-5"
                  >
                    Open New File
                  </Link>
                </div>
                <div className="col-4">
                  <SearchBar />
                </div>
              </div>

              {fileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FileList.propTypes = {
  getFiles: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  deliveryOrder: state.deliveryOrder
});

export default connect(
  mapStateToProps,
  { getFiles }
)(FileList);
