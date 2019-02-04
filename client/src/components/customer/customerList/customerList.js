import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCustomers } from "../../../actions/customerActions";
import Spinner from "../../../components/common/Spinner/Spinner";
import SearchBar from "../../../components/common/SearchBar";
import CustomerItem from "./customerItem";

class CustomerList extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }
  render() {
    const { customers, loading } = this.props.customer;
    let customerItems;

    if (customers === null || loading) {
      customerItems = <Spinner />;
    } else {
      if (customers.length > 0) {
        customerItems = customers.map(customer => (
          <CustomerItem
            key={customer._id}
            id={customer._id}
            customer={customer}
          />
        ));
      } else {
        customerItems = <h4>No customers found...</h4>;
      }
    }

    return (
      <div className="customers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <h1 className="display-4 text-center mt-4 title">
                  Customer List
                </h1>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <Link
                    to="/customers/create-customer"
                    className="btn btn-md btn-info mb-5"
                  >
                    Add New Customer
                  </Link>
                </div>
                <div className="col-4">
                  <SearchBar />
                </div>
              </div>

              {customerItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CustomerList.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customer: state.customer
});

export default connect(
  mapStateToProps,
  { getCustomers }
)(CustomerList);
