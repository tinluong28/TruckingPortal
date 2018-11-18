import React from 'react';
import NewFile from '../Dispatcher/NewFile/NewFile';
import FileNav from '../../components/Navigation/FileNav/FileNav';
import classes from './Dispatcher.module.css';


const dispatcher = () => (
    <div className={classes.Dispatcher}>
        <div>
            <FileNav />
        </div>
        <div>
            <NewFile />
        </div>
        
    </div>

    
);

export default dispatcher;