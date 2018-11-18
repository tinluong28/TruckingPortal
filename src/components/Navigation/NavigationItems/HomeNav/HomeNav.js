import React from 'react';
import classes from './HomeNav.module.css';
import { Link } from 'react-router-dom';

const homeNav = (props) => (
    <ul className = {classes.HomeNav}>
        <li><Link to="/">Home</Link></li>
    
    </ul>
);

export default homeNav;