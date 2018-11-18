import React, { Component } from 'react';
import classes from './NewFile.module.css';
import FileAction from '../../../components/Navigation/FileAction/FileAction';
import FileInfo from './FileInfo/FileInfo';

class NewFile extends Component {

    render() {
        return(
            <React.Fragment className = {classes.NewFile}>
                <FileAction />
                <FileInfo />
     
            </React.Fragment>

        );

    }
}

export default NewFile;