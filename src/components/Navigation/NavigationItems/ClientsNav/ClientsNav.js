import React from 'react';
import classes from './ClientsNav.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const clientsNav = () => (
    <ul className = {classes.ClientsNav}>
        <li><NavigationItem>Clients</NavigationItem>
            <ul>
                <li><Link to="/">Client List</Link></li>
                <li><Link to="/">Deliver Locations</Link></li>
                <li><Link to="/">Search Client</Link></li>
                <li><Link to="/">Add Client</Link></li>
                <li><Link to="/deliveryLocation">Add Delivery Location</Link></li>
            </ul>
        </li>
    
    </ul>
);

export default clientsNav;