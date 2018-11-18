import React from 'react';
import classes from './DispatcherNav.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const dispatcherNav = () => (
    <ul className = {classes.DispatcherNav}>
        <li><NavigationItem>Dispatcher</NavigationItem>
            <ul>
                <li><Link to="/">List</Link></li>
                <li><Link to="/">Pending</Link></li>
                <li><Link to="/">Completed</Link></li>
            </ul>
        </li>
    
    </ul>
);

export default dispatcherNav;