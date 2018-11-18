import React from 'react';
import classes from './Logo.module.css';
import TruckLogo from '../images/truck-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={TruckLogo} alt="Truck" />
    </div>
    
);

export default logo;