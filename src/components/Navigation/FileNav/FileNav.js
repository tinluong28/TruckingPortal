import React from 'react';
import classes from './FileNav.module.css';
import { Link } from 'react-router-dom';


const fileNav = () => (
    <div className={classes.FileNav}>
        <div>
            <ul>
                <li><label>Section Name [Edit]</label></li>
                <li>
                    <ul>
                        <li><Link  to="/">List</Link></li>
                        <li><Link to="/">New</Link></li>
                        <li><Link  to="/">Open</Link></li>
                    </ul>
                </li>
                
            </ul>

        </div>     
    </div>
);

export default fileNav;