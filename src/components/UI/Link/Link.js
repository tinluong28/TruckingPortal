import React from 'react';
import classes from './Link.module.css';

const link = (props) => (
    <div className= {classes.Link}>
        <a
            href={props.link}
            className = {props.active? classes.active : null}>{props.children}</a>
    </div>
);

export default link;