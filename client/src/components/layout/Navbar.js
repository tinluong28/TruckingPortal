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
      <nav className="navbar navbar-expand-lg navbar-">
        <span className="navbar-brand mb-0 h1 text text-white">
          Dial Transportation{" "}
        </span>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            key={Math.floor(Math.random() * 10000000000000)}
            className="navbar-nav mr-auto"
          >
            <li className="nav-item active">
              <Link className="nav-link h4 text text-white" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h4  text text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dispatcher <span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/file/create-file">
                  New File
                </Link>
                <a className="dropdown-item" href="/file/all">
                  File List
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h4 text text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Clients <span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/customers/create-customer">
                  Add Customer
                </Link>
                <Link className="dropdown-item" to="/customers/all">
                  Customer List
                </Link>
                <Link className="dropdown-item" to="/">
                  Find
                </Link>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/delivery/create-delivery">
                  Add Delivery Location
                </a>
                <Link className="dropdown-item" to="/delivery/all">
                  Delivery Locations
                </Link>
                <Link className="dropdown-item" to="/">
                  Find
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle h4 text text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Accounting <span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Billing List
                </a>
                <a className="dropdown-item" href="#">
                  Account Receivable
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link h4 text text-white" to="/dashboard">
                Profile <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item text text-white">
              <a className="nav-link disabled h4" href="#">
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
                className="nav-link"
                style={{ display: "inline" }}
              >
                <span className="text-secondary">
                  <strong>Logout</strong>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
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
