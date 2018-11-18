import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Dispatcher from '../src/containers/Dispatcher/Dispatcher';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import addDeliveryPage from './components/Customers/AddDeliveryPage/AddDeliverPage';
import addClientPage from './components/Customers/AddClientPage/AddClientPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Layout>  
        <div><Route exact path="/" component={Home} /></div>
        <div><Route exact path="/dispatcher" component={Dispatcher} /></div>
        <div><Route exact path="/deliveryLocation" component={addDeliveryPage} /></div>
        <div><Route exact path="/clientInfo" component={addClientPage} /></div>
      </Layout>
      </div>
      </Router>
    );
  }
}

export default App;
