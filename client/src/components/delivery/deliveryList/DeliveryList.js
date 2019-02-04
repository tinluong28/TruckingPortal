import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getDeliveries,
  clearCurrentDeliveries
} from "../../../actions/deliveryActions";
import Spinner from "../../../components/common/Spinner/Spinner";
import SearchBar from "../../../components/common/SearchBar";
import DeliveryItem from "./DeliveryItem";

class DeliveryList extends Component {
  componentDidMount() {
    this.props.getDeliveries();
  }

  // componentWillUnmount() {
  //   this.props.clearCurrentDeliveries();
  // }
  render() {
    const { deliveries, loading } = this.props.delivery;
    let deliveryItems;

    if (deliveries === null || loading) {
      deliveryItems = <Spinner />;
    } else {
      if (deliveries.length > 0) {
        deliveryItems = deliveries.map(delivery => (
          <DeliveryItem
            key={delivery._id}
            id={delivery._id}
            delivery={delivery}
          />
        ));
      } else {
        deliveryItems = <h4>No delivery location found...</h4>;
      }
    }

    return (
      <div className="deliveries">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <h1 className="display-4 text-center mt-4 title">
                  Delivery Locations
                </h1>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <Link
                    to="create-delivery"
                    className="btn btn-md btn-info mb-5"
                  >
                    Add Delivery Location
                  </Link>
                </div>
                <div className="col-4">
                  <SearchBar />
                </div>
              </div>

              {deliveryItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DeliveryList.propTypes = {
  getDeliveries: PropTypes.func.isRequired,
  clearCurrentDeliveries: PropTypes.func.isRequired,
  delivery: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  delivery: state.delivery
});

export default connect(
  mapStateToProps,
  { getDeliveries, clearCurrentDeliveries }
)(DeliveryList);
