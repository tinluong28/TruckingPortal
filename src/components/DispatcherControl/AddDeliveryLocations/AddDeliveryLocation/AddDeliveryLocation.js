import React, { Component } from 'react';
import classes from './AddDeliveryLocation.module.css';

class AddDeliveryLocation extends Component {

    render() {
        return(
            <div className={classes.Remark}>
                <div>
                    <div className={classes.Label} style={{fontWeight: 'bold'}}><label>Delivery Location</label></div>
                    <div><input placeholder=' Name' style={{float: 'left', marginRight: '10px'}}/></div>
                    <div>
                        <label style={{float: 'left', marginRight: '3px'}}>Delivered</label>
                        <input type='checkbox' /></div>
                </div>
                <div>
                    <div className={classes.Label}><label>Location Info</label></div>
                    <div><textarea /></div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Delivery Date</label></div>
                    <div><input type='date'/></div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Delivery Time</label></div>
                    <div><input type='time'/></div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Piece Count</label></div>
                    <div>
                        <input style={{float: 'left', width: '30px', marginRight: '3px'}}/>
                        <select>
                            <option>Pallets</option>
                            <option>PCS</option>
                            <option>Boxes</option>
                        </select>
                    </div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Weight</label></div>
                    <div>
                        <input style={{float: 'left', width: '30px', marginRight: '3px'}} />
                        <select>
                            <option>KGS</option>
                            <option>LBS</option>
                        </select>
                    </div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Dimension</label></div>
                    <div>
                        <input style={{float: 'left', width: '30px', marginRight: '3px'}} />
                        <label>CBM</label>
                    </div>
                </div>
                <button style={{backgroundColor: 'white', border: 'none',cursor: 'pointer', textDecoration: 'underline'}} onClick={this.props.clicked}>Remove</button>
            </div>
        );
    }
}

export default AddDeliveryLocation;