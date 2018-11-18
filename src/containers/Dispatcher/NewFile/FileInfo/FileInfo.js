import React, { Component } from 'react';
import classes from './FileInfo.module.css';
import ContainerInput from './ContainerInput/ContainerInput';

class FileInfo extends Component {
    state={
        fileNo: '',
        mode: '',
        hot: true,
        customer: '',
    }
    render() {
        return (
            <div className={classes.File}>
                <div className={classes.Input}>
                    <div className={classes.Customer}>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>File No</label></div>
                            <div><input placeholder='File Number'/></div>
                        </div>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>Status</label></div>
                            <div style={{float: 'left'}}><label><input type='radio' value= 'hot' required/>Hot</label></div>
                            <div><label><input type='radio' value= 'standard' required/>Standard</label></div>
                        </div>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>Mode</label></div>
                            <div><select>
                                <option>Full Container</option>
                                <option>LCL</option>
                                <option>Air</option>
                            </select></div>
                        </div>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>Customer</label></div>
                            <div><input placeholder='Customer Name'/></div>
                        </div>
                    </div>

                    <div className={classes.Ams}>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>Master BL</label></div>
                            <div><input placeholder='Master BL'/></div>
                        </div>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>House BL</label></div>
                            <div><input placeholder='House BL'/></div>
                        </div>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>Teminal</label></div>
                            <div><input placeholder='Terminal'/></div>
                        </div>
                        <div className={classes.Section}>
                            <div className={classes.Label}><label>Arrival Date</label></div>
                            <div><input type='date'/></div>
                        </div>
                    </div>

                </div>

                    <div className={classes.Container}>
                        <ContainerInput />
                    </div>

                
            </div>
        );

    }
};

export default FileInfo;