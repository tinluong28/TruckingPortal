import React from 'react';
import classes from './Header.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const header = () => (
    <div>
        <div className={classes.SignOut}>
            <ul>
                <li><button style={{textDecoration: 'none',border: 'none', outline: 'none',background: 'transparent', cursor:'pointer'}}><strong>Sign Out</strong></button></li>
                <li> | </li>
                <li>User Name</li>
            </ul>
        </div>
            
        <div>
        <div className={classes.CompanyName}>
                <h1>
                    Dial Transport Inc.
                </h1>
            </div>
        <div className={classes.Nav}><NavigationItems /></div>
        </div>              
    </div>
);

export default header;