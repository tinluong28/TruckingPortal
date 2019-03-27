import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import FileSearch from "./components/HomePage/FileSearch/FileSearch";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddExperience from "./components/add-credentials/AddExperience";
import AddEducation from "./components/add-credentials/AddEduction";
import Profiles from "./components/profiles/Profiles";
import CustomerList from "./components/customer/customerList/customerList";
import Customer from "./container/Customer/Customer";
import Delivery from "./container/Delivery/Delivery";
import DeliveryList from "./components/delivery/deliveryList/DeliveryList";
import DeliveryOrder from "./container/File/DeliveryOrder";
import FileList from "./components/file/fileList/FileList";
import Details from "./components/file/ContainerDetail/Details";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // Clear currnt file
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar />

          <Header />

          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <div>
            <Route exact path="/profiles" component={Profiles} />
            <Switch>
              <PrivateRoute exact path="/register" component={Register} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/home" component={FileSearch} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/customers/all"
                component={CustomerList}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/customers/create-customer"
                component={Customer}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/customers/view/:id"
                component={Customer}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/delivery/create-delivery"
                component={Delivery}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/delivery/all"
                component={DeliveryList}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/delivery/view/:id"
                component={Delivery}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/file/view/:id"
                component={DeliveryOrder}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/file/create-file"
                component={DeliveryOrder}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/file/all" component={FileList} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/file/test" component={Details} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
