import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DeliveryContact from "../../components/delivery/contact/DeliveryContact";
import DeliveryInfo from "../../components/delivery/DeliveryInfo";
import Spinner from "../../components/common/Spinner/Spinner";
import isEmpty from "../../validation/is-empty";
import {
  getCurrentDelivery,
  updateCurrentDelivery,
  addDelivery,
  deleteDelivery,
  addContact,
  deleteContact,
  clearCurrentDelivery
} from "../../actions/deliveryActions";
class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: {
        company: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phone: "",
        remark: "",
        id: "",
        contact: []
      },
      addContact: {
        name: "",
        position: "",
        office: "",
        cell: "",
        email: "",
        about: ""
      },
      edit: false,
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getCurrentDelivery(this.props.match.params.id);
    } else {
      this.setState({ edit: true });
    }
    // this.props.
    //   this.props.delivery.deliveries,
    //   this.props.delivery.id
    // );
  }

  componentWillUnmount() {
    this.props.clearCurrentDelivery();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
      console.log(this.state.errors);
    }
    if (nextProps.delivery.delivery) {
      const delivery = nextProps.delivery.delivery;

      delivery.remark = !isEmpty(delivery.remark) ? delivery.remark : "";
      this.setState({
        // delivery,
        // contact
        delivery: {
          company: delivery.company,
          address: delivery.address,
          city: delivery.city,
          state: delivery.state,
          zipcode: delivery.zipcode,
          phone: delivery.phone,
          remark: delivery.remark,
          id: delivery._id,
          contact: delivery.contact
        }
      });
    }
  }

  onAddContact = e => {
    e.preventDefault();
    const { delivery } = this.state;
    const { addContact } = this.state;
    this.props.addContact(delivery.id, addContact);
    this.setState({
      addContact: {
        name: "",
        position: "",
        office: "",
        cell: "",
        email: "",
        about: ""
      }
    });
  };

  onDeleteDelivery = () => {
    const deliveryID = this.state.delivery.id;
    this.props.deleteDelivery(deliveryID, this.props.history);
  };

  handleDeliveryInputChange = (name, value) => {
    this.setState({
      delivery: { ...this.state.delivery, [name]: value.toUpperCase() }
    });
  };
  handleCustomerSelectChange = (name, value) => {
    this.setState({
      delivery: { ...this.state.delivery, [name]: value }
    });
  };
  handleContactChange = (name, value) => {
    this.setState({
      addContact: { ...this.state.addContact, [name]: value }
    });
  };
  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };
  setDone = e => {
    e.preventDefault();
    // this.props.this.state.delivery);
    const { id, ...delivery } = this.state.delivery;
    if (id) {
      this.props.updateCurrentDelivery(id, delivery);
      this.props.getCurrentDelivery(id);
      this.setState({ edit: false });
    } else {
      this.props.addDelivery(delivery, this.props.history);
    }
  };

  onDeleteContact = contactID => {
    const { id } = this.state.delivery;
    console.log(id, contactID);
    this.props.deleteContact(id, contactID);
  };
  render() {
    const { loading } = this.props.delivery;
    const { delivery, addContact } = this.state;
    const companyName = this.props.delivery.delivery.company;
    // Show contact info

    // Delivery Location Info
    let deliveryContent;
    if (delivery === null || loading) {
      deliveryContent = <Spinner />;
    } else {
      deliveryContent = (
        <div className="col-md-12 mt-4">
          <div>
            <h1>
              Delivery Location{" "}
              <span>{companyName ? <span>- {companyName}</span> : null}</span>
            </h1>
          </div>

          <Link to="/delivery/all" type="submit" className="btn btn-dark mt-4">
            Back to List
          </Link>
          {/* <button
            onClick={this.onSaveDelivery}
            className="btn btn-md btn-primary mt-4 ml-2"
          >
            Save
          </button> */}
          <button
            onClick={this.onDeleteDelivery}
            className="btn btn-md btn-danger mt-4 ml-2"
            style={{ display: delivery.id ? "inline-block" : "none" }}
          >
            Delete
          </button>

          <DeliveryInfo
            id={delivery.id}
            company={delivery.company}
            address={delivery.address}
            city={delivery.city}
            state={delivery.state}
            zipcode={delivery.zipcode}
            phone={delivery.phone}
            remark={delivery.remark}
            errors={this.state.errors}
            changeData={this.handleDeliveryInputChange}
            changeSelectData={this.handleCustomerSelectChange}
            edit={this.state.edit}
            toggleEdit={this.toggleEdit}
            setDone={this.setDone}
          />
          {delivery.id ? (
            <DeliveryContact
              id={this.state.delivery.id}
              name={addContact.name}
              position={addContact.position}
              office={addContact.office}
              cell={addContact.cell}
              email={addContact.email}
              about={addContact.about}
              contact={delivery.contact}
              errors={this.state.errors}
              changeData={this.handleContactChange}
              addContact={this.onAddContact}
              onClickDelete={this.onDeleteContact}
            />
          ) : null}
        </div>
      );
    }
    return (
      <div className="Delivery">
        <div className="row">{deliveryContent}</div>
      </div>
    );
  }
}

Delivery.propTypes = {
  delivery: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentDelivery: PropTypes.func.isRequired,
  updateCurrentDelivery: PropTypes.func.isRequired,
  addDelivery: PropTypes.func.isRequired,
  deleteDelivery: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  clearCurrentDelivery: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  delivery: state.delivery,
  errors: state.errors,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  {
    getCurrentDelivery,
    updateCurrentDelivery,
    addDelivery,
    deleteDelivery,
    addContact,
    deleteContact,
    clearCurrentDelivery
  }
)(Delivery);
