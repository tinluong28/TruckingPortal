import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="landing-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Elev8</h1>
                <p className="lead"> Let's keep the world moving</p>

                {/* <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link> */}
                <Link to="/login" className="btn btn-lg btn-info">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequire
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
