import React from 'react';

import Details from './Details/Details';
import classes from './ContainerDetails.module.css';
import AddDeliveryLocations from '../../../../../../components/DispatcherControl/AddDeliveryLocations/AddDeliveryLocations';

const containerDetails = (props) => {





    return(
        <React.Fragment>
            <header className={classes.Header}>
                <ul style={{textAlign:'right', marginTop: '0'}}>
                    <li style={{listStyle: 'none', float: 'right', marginLeft: '5px'}}><button onClick={props.clicked}>Close</button></li>
                    <li style={{listStyle: 'none'}}><button>Save</button></li>
                </ul>
                <h1>Container Details</h1>
                
            </header>
           
            
            <Details />
            <hr style={{width: '100%'}}/>
            <div  style={{width: '100%'}}>
                <h1 className= {classes.Delivery}>Delivery</h1>
            </div>
            <div><AddDeliveryLocations /></div>
        </React.Fragment>
    );
};

            


export default containerDetails;