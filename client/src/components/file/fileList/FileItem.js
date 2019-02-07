import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../../validation/is-empty";
import { connect } from "react-redux";
import { getCurrentFile } from "../../../actions/deliveryOrderActions";
class FileItem extends Component {
  render() {
    const { file } = this.props;
    const { containers } = this.props.file;

    // let emailList;
    // if (customer.contact.length > 0) {
    //   emailList = customer.contact.map(con => {
    //     if (con.email) {
    //       return (
    //         <li key={Math.floor(Math.random() * 10000000000000)}>
    //           {con.name}- {con.email}
    //         </li>
    //       );
    //     }
    //   });
    // } else {
    //   emailList = null;
    // }

    return (
      <div className="card card-body bg-white mb-3">
        <div className="row">
          <div className="col-3">
            <Link to={`/file/view/${file._id}`}>
              <h3>
                {file.fileCode}-{file.fileNo}
              </h3>
            </Link>
          </div>
          <div className="col-3">
            <p>
              {isEmpty(containers[0].number) ? null : (
                <span>{containers[0].number}</span>
              )}
            </p>
            <p>{isEmpty(file.city) ? null : <span>{file.city}</span>}</p>
            <p>
              {isEmpty(file.businesstype) ? null : (
                <span>
                  <strong>
                    <em>{file.businesstype}</em>
                  </strong>
                </span>
              )}
            </p>
          </div>
          <div className="col-6">
            <div>
              {isEmpty(file.contact) ? null : (
                <ul className="EmailList">null</ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FileItem.propTypes = {
  file: PropTypes.object.isRequired,
  getCurrentFile: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentFile }
)(FileItem);

{
  /* <div className="col-3">
<button
  className="btn btn-primary"
  onClick={this.handleCustomerRoute}
>
  View
</button>

<Route
  exact
  path={`/customers/${customer._id}`}
  render={props => <Customer id={customer._id} />}
/>
</div> */
}
