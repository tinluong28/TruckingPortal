import React from 'react';
import classes from './AccountingNav.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';

const accountingNav = () => (
    <ul className = {classes.AccountingNav}>
        <li><NavigationItem>Accounting</NavigationItem>
            <ul>
                <li><Link to="/">Billing</Link></li>
                <li><Link to="/">AR Aging</Link></li>
            </ul>
        </li>
    
    </ul>
);

export default accountingNav;