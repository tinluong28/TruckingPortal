import React from 'react';
import classes from './Footer.module.css';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.SignOut}>
            <ul>
                <li><button style={{textDecoration: 'none',border: 'none', outline: 'none',background: 'transparent', cursor:'pointer'}}><strong>Sign Out</strong></button></li>
                <li> | </li>
                <li>User Name</li>
            </ul>
        </div>
            
        <div>
        <div>
                <h3>
                    Powered by: Trucker Portal
                </h3>
            </div>

        </div>              
    </div>
);

export default footer;