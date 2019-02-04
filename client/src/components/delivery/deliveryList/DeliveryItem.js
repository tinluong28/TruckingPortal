import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../../validation/is-empty";
import { connect } from "react-redux";
import { getCurrentDelivery, getID } from "../../../actions/deliveryActions";
class DeliveryItem extends Component {
  render() {
    const { delivery } = this.props;
    let emailList;
    if (delivery.contact.length > 1) {
      emailList = delivery.contact.map(con => {
        if (con.email) {
          return (
            <li key={Math.floor(Math.random() * 10000000000000)}>
              {con.name}- {con.email}
            </li>
          );
        }
      });
    } else {
      emailList = null;
    }
    return (
      <div className="card card-body bg-white mb-3">
        <div className="row">
          <div className="col-3">
            <Link to={`/delivery/view/${delivery._id}`} className="link">
              <h3>{delivery.company}</h3>
            </Link>
          </div>
          <div className="col-3">
            <p>
              {isEmpty(delivery.address) ? null : (
                <span>{delivery.address}</span>
              )}
            </p>
            <p>
              {isEmpty(delivery.city) ? null : <span>{delivery.city}</span>}
            </p>
            <p>
              {isEmpty(delivery.phone) ? null : <span>{delivery.phone}</span>}
            </p>
          </div>
          <div className="col-3">
            <div>
              {isEmpty(delivery.contact) ? null : (
                <ul className="EmailList">{emailList}</ul>
              )}
            </div>
          </div>
          <div className="col-3">
            <p>
              {isEmpty(delivery.remark) ? null : (
                <span>
                  <strong>Remarks: </strong>
                  {delivery.remark}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

DeliveryItem.propTypes = {
  delivery: PropTypes.object.isRequired,
  getCurrentDelivery: PropTypes.func.isRequired,
  getID: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentDelivery, getID }
)(DeliveryItem);
