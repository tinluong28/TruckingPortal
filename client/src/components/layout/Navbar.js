import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const navbar = (
      <div className="NavBar fixed-top">
        <nav className="navbar navbar-expand-md navbar-dark justify-content-center">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <span className="navbar-brand h1 text text-white">
              Dial Transportation
            </span>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                key={Math.floor(Math.random() * 10000000000000)}
                className="navbar-nav mr-auto"
              >
                <li className="nav-item active">
                  <Link className="nav-link h6 text text-white" to="/home">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle h6  text text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dispatcher <span className="sr-only">(current)</span>
                  </a>
                  <div
                    className="DropdownMenu dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className=" DropdownItem dropdown-item"
                      to="/file/create-file"
                    >
                      New File
                    </Link>
                    <Link
                      className=" DropdownItem dropdown-item"
                      to="/file/all"
                    >
                      File List
                    </Link>
                    <div className="dropdown-divider" />
                    <a className=" DropdownItem dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle h6 text text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Clients <span className="sr-only">(current)</span>
                  </a>
                  <div
                    className="DropdownMenu dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link
                      className=" DropdownItem dropdown-item"
                      to="/customers/create-customer"
                    >
                      Add Customer
                    </Link>
                    <Link
                      className=" DropdownItem dropdown-item"
                      to="/customers/all"
                    >
                      Customer List
                    </Link>
                    <Link className=" DropdownItem dropdown-item" to="/">
                      Find
                    </Link>
                    <div className="dropdown-divider" />
                    <a
                      className=" DropdownItem dropdown-item"
                      href="/delivery/create-delivery"
                    >
                      Add Delivery Location
                    </a>
                    <Link
                      className=" DropdownItem dropdown-item"
                      to="/delivery/all"
                    >
                      Delivery Locations
                    </Link>
                    <Link className=" DropdownItem dropdown-item" to="/">
                      Find
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle h6 text text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accounting <span className="sr-only">(current)</span>
                  </a>
                  <div
                    className="DropdownMenu dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className=" DropdownItem dropdown-item" href="#">
                      Billing List
                    </a>
                    <a className=" DropdownItem dropdown-item" href="#">
                      Account Receivable
                    </a>
                    <div className="dropdown-divider" />
                    <a className=" DropdownItem dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link h6 text text-white" to="/dashboard">
                    Profile <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item text text-white">
                  <a className="nav-link disabled h6" href="#">
                    Admin
                  </a>
                </li>
              </ul>
              <ul
                key={Math.floor(Math.random() * 10000000000000)}
                className="navbar-nav ml-auto"
              >
                <li className="nav-item">
                  <img
                    className="rounded-circle"
                    src={user.avatar}
                    alt={user.name}
                    style={{ width: "25px", marginRight: "5px" }}
                    title="You must have a Gravatar connected to your email to dislay you image"
                  />
                  <span className="text text-white">{user.name}</span>
                  <Link
                    to="/login"
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link d-inline"
                  >
                    <span className="text-dark">
                      <strong>Logout</strong>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* <Link className="nav-link" to="/register">
            Sign Up
          </Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return <div className="navigation">{isAuthenticated ? navbar : null}</div>;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
