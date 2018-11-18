import React, { Component } from 'react';
import axios from 'axios';

import classes from './FileSearch.module.css';
import { Link } from 'react-router-dom';

class FileSearch extends Component {
    state = {
        trackValue: '',
        track: true,
        dispatcher: false
    }

    FileSearchHandler = (file) => {
         axios.get('severlink'+this.state.fileNo)
         .then( response => {
             //link and redirect to the file
         })
    }

    trackSelectedHandler = () => {
        if(this.state.track === true) {
            return this.state;
        }
        this.setState(prevState => ({
            track: !prevState.track,
            dispatcher: !prevState.dispatcher

        }))};

    dispatcherSelectedHandler = () => {
        if(this.state.dispatcher === true) {
            return this.state;
        }
        this.setState(prevState => ({
            track: !prevState.track,
            dispatcher: !prevState.dispatcher
        }))};

    render() {
        return (
            <div className={classes.Main}>
                <ul>
                    <li>
                        <ul className={classes.Console}>
                            <div style={{float: 'left', borderTopLeftRadius: '10px', outline: 'none'}} className={this.state.track ? classes.TrackSelected : classes.TrackDarken}><li onClick={this.trackSelectedHandler}>Track Shipment</li></div>
                            <div  style={{borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}} className={this.state.dispatcher ? classes.DispatcherSelected : classes.DispatcherDarken}><li onClick={this.dispatcherSelectedHandler}>Dispatcher</li></div>
                        </ul>
                    </li>
                    <li>
                        <div>
                            <div className={this.state.track ? classes.Track : classes.Hidden}>
                                <div style={{float: 'left'}}><input placeholder='File/Container/Master' /></div>
                                <button className={classes.Button}>Track Shipment</button>
                            </div>
                            <div  className={this.state.dispatcher ? classes.Dispatcher : classes.Hidden}>
                                <button className={classes.Button} style={{float: 'left'}}><Link to="/dispatcher" style={{textDecoration: 'none', color: 'white'}}>Open New File</Link></button>
                                <button className={classes.Button}>See List</button>
                            </div>
                        </div>
                    </li>
                </ul>
                


                   
                {/*<ul className={classes.Content}>
                    <li>File Search: </li>
                    <li><input placeholder='File No.' value={this.state.fileNo} onChange={(event) => this.setState({fileNo: event.target.value})}/></li>
                    <li><Button onClick={this.FileSearchHandler}>Go</Button></li>
                    <li>|</li>
                    <li><Link to="/dispatcher">New</Link></li>
                    <li>|</li>
                    <li><Link to="/">List</Link></li>  
                </ul>
                <ul className={classes.Content}>
                    <li>Search By:</li>
                    <li>
                        <select>
                            <option>Container</option>
                            <option>Master</option>
                            <option>House</option>
                        </select>
                    </li>
                    <li><input placeholder='Value' value={this.state.fileNo} onChange={(event) => this.setState({fileNo: event.target.value})}/></li>
                    <li><Button onClick={this.FileSearchHandler}>Search</Button></li>

        </ul>*/}
                

            </div>
        );
    }
}

export default FileSearch;