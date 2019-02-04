import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../../validation/is-empty";
import { connect } from "react-redux";
import { getCurrentCustomer } from "../../../actions/customerActions";
class CustomerItem extends Component {
  render() {
    const { customer } = this.props;
    let emailList;
    if (customer.contact.length > 0) {
      emailList = customer.contact.map(con => {
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
            <Link to={`/customers/view/${customer._id}`}>
              <h3>{customer.company}</h3>
            </Link>
          </div>
          <div className="col-3">
            <p>
              {isEmpty(customer.address) ? null : (
                <span>{customer.address}</span>
              )}
            </p>
            <p>
              {isEmpty(customer.city) ? null : <span>{customer.city}</span>}
            </p>
            <p>
              {isEmpty(customer.businesstype) ? null : (
                <span>
                  <strong>
                    <em>{customer.businesstype}</em>
                  </strong>
                </span>
              )}
            </p>
          </div>
          <div className="col-6">
            <div>
              {isEmpty(customer.contact) ? null : (
                <ul className="EmailList">{emailList}</ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  getCurrentCustomer: PropTypes.func.isRequired
};

export default connect(
  null,
  { getCurrentCustomer }
)(CustomerItem);

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
