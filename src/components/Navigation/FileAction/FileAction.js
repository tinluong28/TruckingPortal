import React from 'react';
import classes from './FileAction.module.css';

const fileAction = () => (
    <div className={classes.FileAction}>
        <button>Save</button>
        <button>Delete</button>
        <button>Close File</button>
        <button>Submit</button>
    </div>
);

export default fileAction;