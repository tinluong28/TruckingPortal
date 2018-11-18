import React, { Component } from 'react';
import AddDeliveryLocation from './AddDeliveryLocation/AddDeliveryLocation';
import classes from './AddDeliveryLocations.module.css'

class AddDeliveryLocations extends Component {
    state={
        delivery: [],
        order: 0

    }

    addDeliveryHandler = (e) => {
        let newLocation = {
            text: Date.now(),
            key: Date.now()
        };
        this.setState((prevLocation) => {
            return {
                delivery: prevLocation.delivery.concat(newLocation)
            };
        });
    };

    removeDeliveryHandler = (key) => {
        let filteredDelivery = this.state.delivery.filter((delivery) => {
            return (delivery.key !== key)
        });
        this.setState({
            delivery: filteredDelivery
        });
    }


    render() {
        return(
            <div className={classes.Delivery}>
                <button 
                    style={{textAlign: 'right', margin: '30px'}}
                    onClick={this.addDeliveryHandler}>Add More
                </button>
                <ul>
                    {this.state.delivery.map((e) => {
                        return (
                            <li key={e.key}>
                                <AddDeliveryLocation clicked={() => this.removeDeliveryHandler(e.key)}/> 
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
    
}
export default AddDeliveryLocations;