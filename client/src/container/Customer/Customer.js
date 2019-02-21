import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getCurrentCustomer,
  addCustomer,
  updateCurrentCustomer,
  deleteCustomer,
  addContact,
  deleteContact,
  clearCurrentCustomer
} from "../../actions/customerActions";
import Spinner from "../../components/common/Spinner/Spinner";
import isEmpty from "../../validation/is-empty";
import CustomerInfo from "../../components/customer/CustomerInfo";
import CustomerContact from "../../components/customer/contact/CustomerContact";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: {
        compnany: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        businesstype: "",
        doingbusinesssince: "",
        remark: "",
        taxidtype: "",
        taxid: "",
        accountno: "",
        credittype: "",
        creditlimit: "",
        paymentterm: "",
        credithold: "NO",
        note: "",
        contact: [],
        _id: ""
      },
      addContact: {
        name: "",
        position: "",
        office: "",
        cell: "",
        email: "",
        about: ""
      },
      customerName: "",
      edit: false,
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getCurrentCustomer(this.props.match.params.id);
    } else {
      this.setState({ edit: true });
    }
  }

  componentWillUnmount() {
    this.props.clearCurrentCustomer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.customer.customer) {
      const customer = nextProps.customer.customer;
      customer.businesstype = !isEmpty(customer.businesstype)
        ? customer.businesstype
        : "";
      customer.doingbusinesssince = !isEmpty(customer.doingbusinesssince)
        ? customer.doingbusinesssince
        : "";
      customer.remark = !isEmpty(customer.remark) ? customer.remark : "";
      customer.taxidtype = !isEmpty(customer.taxidtype)
        ? customer.taxidtype
        : "";
      customer.taxid = !isEmpty(customer.taxid) ? customer.taxid : "";
      customer.accountno = !isEmpty(customer.accountno)
        ? customer.accountno
        : "";
      customer.credittype = !isEmpty(customer.credittype)
        ? customer.credittype
        : "";
      customer.creditlimit = !isEmpty(customer.creditlimit)
        ? customer.creditlimit
        : "";
      customer.paymentterm = !isEmpty(customer.paymentterm)
        ? customer.paymentterm
        : "";
      customer.credithold = !isEmpty(customer.credithold)
        ? customer.credithold
        : "NO";
      customer.note = !isEmpty(customer.note) ? customer.note : "";
      this.setState({
        customer: {
          company: customer.company,
          address: customer.address,
          city: customer.city,
          state: customer.state,
          zipcode: customer.zipcode,
          businesstype: customer.businesstype,
          doingbusinesssince: customer.doingbusinesssince,
          remark: customer.remark,
          taxidtype: customer.taxidtype,
          taxid: customer.taxid,
          accountno: customer.accountno,
          credittype: customer.credittype,
          creditlimit: customer.creditlimit,
          paymentterm: customer.paymentterm,
          credithold: customer.credithold,
          note: customer.note,
          contact: customer.contact,
          _id: customer._id
        },
        customerName: customer.company
      });
    }
  }

  onAddContact = e => {
    e.preventDefault();
    const { customer } = this.state;
    const { addContact } = this.state;
    this.props.addContact(customer._id, addContact);
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

  onDeleteCustomer = () => {
    const customerID = this.state.customer._id;
    this.props.deleteCustomer(customerID, this.props.history);
  };

  handleCustomerInputChange = (name, value) => {
    this.setState({
      customer: { ...this.state.customer, [name]: value.toUpperCase() }
    });
  };
  handleCustomerSelectChange = (name, value) => {
    this.setState({
      customer: { ...this.state.customer, [name]: value }
    });
  };
  handleContactChange = (name, value) => {
    this.setState({
      addContact: { ...this.state.addContact, [name]: value }
    });
  };
  EditHandler = () => {
    this.setState({ edit: !this.state.edit });
  };
  CancelEditHandler = () => {
    this.setState({
      customer: this.props.customer.customer,
      edit: !this.state.edit
    });
  };
  setDone = e => {
    e.preventDefault();

    const { _id, ...customer } = this.state.customer;
    if (_id) {
      this.props.updateCurrentCustomer(_id, customer);
      this.props.getCurrentCustomer(_id);
      this.setState({ edit: false });
    } else {
      this.props.addCustomer(customer, this.props.history);
    }
  };

  onDeleteContact = contactID => {
    const { _id } = this.state.customer;
    this.props.deleteContact(_id, contactID);
  };

  render() {
    // const { user } = this.props.auth;
    const { loading } = this.props.customer;
    const { customer, addContact } = this.state;
    const companyName = this.state.customerName;
    let customerContent;

    if (customer === null || loading) {
      customerContent = <Spinner />;
    } else {
      customerContent = (
        <div className="col-md-12 mt-4">
          <div>
            <h1>
              Customer{" "}
              <span>{companyName ? <span>- {companyName}</span> : null}</span>
            </h1>
          </div>

          <Link to="/customers/all" className="btn btn-dark mt-4">
            Back to List
          </Link>
          {/* <button
            onClick={this.onSaveDelivery}
            className="btn btn-md btn-primary mt-4 ml-2"
          >
            Save
          </button> */}
          <button
            onClick={this.onDeleteCustomer}
            className="btn btn-md btn-danger mt-4 ml-2"
            style={{ display: customer._id ? "inline-block" : "none" }}
          >
            Delete
          </button>

          <CustomerInfo
            companyName={companyName}
            company={customer.company}
            address={customer.address}
            city={customer.city}
            state={customer.state}
            zipcode={customer.zipcode}
            businesstype={customer.businesstype}
            doingbusinesssince={customer.doingbusinesssince}
            remark={customer.remark}
            taxidtype={customer.taxidtype}
            taxid={customer.taxid}
            accountno={customer.accountno}
            credittype={customer.credittype}
            creditlimit={customer.creditlimit}
            paymentterm={customer.paymentterm}
            credithold={customer.credithold}
            note={customer.note}
            errors={this.state.errors}
            changeData={this.handleCustomerInputChange}
            changeSelectData={this.handleCustomerSelectChange}
            edit={this.state.edit}
            EditHandler={this.EditHandler}
            CancelEditHandler={this.CancelEditHandler}
            setDone={this.setDone}
          />
          {customer._id ? (
            <CustomerContact
              id={this.state.customer._id}
              name={addContact.name}
              position={addContact.position}
              office={addContact.office}
              cell={addContact.cell}
              email={addContact.email}
              about={addContact.about}
              contact={customer.contact}
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
      <div className="Customer">
        <div className="row">{customerContent}</div>
      </div>
    );
  }
}

Customer.propTypes = {
  getCurrentCustomer: PropTypes.func.isRequired,
  addCustomer: PropTypes.func.isRequired,
  updateCurrentCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customer: state.customer,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    getCurrentCustomer,
    addCustomer,
    updateCurrentCustomer,
    deleteCustomer,
    addContact,
    deleteContact,
    clearCurrentCustomer
  }
)(Customer);
