import React, { Component } from 'react';
import classes from './ClientInfo.module.css';

class ClientInfo extends Component {
    state={
        location: {
            name: '',
            address: '',
            city: '',
            zip: '',
            contact: '',
            phone: '',
            email: '',
            appointment: true
        }
    }
    render() {
        return(
            <div className={classes.DeliveryInfo}>
                <div className={classes.Title}><h2>Client Info</h2></div>

                <div className={classes.Delivery}>
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>Name</label></div>
                        <div><input placeholder=' Location Name'/></div>
                    </div>
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>Address</label></div>
                        <div><input placeholder=' Number, Street Name'/></div>
                    </div>
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>City</label></div>
                        <div><input placeholder=' City'/></div>
                    </div>
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>Zip Code</label></div>
                        <div><input placeholder=' 99999'/></div>
                    </div>
              
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>Contact</label></div>
                        <div><input placeholder=' Name'/></div>
                    </div>
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>Phone</label></div>
                        <div><input placeholder=' xxx-xxx-xxxx'/></div>
                    </div>
                    <div>
                        <div style={{float: 'left', width: '90px', textAlign: 'right'}}><label>Email</label></div>
                        <div><input placeholder=' name@example.com'/></div>
                    </div>
                    

                </div>
                <div className={classes.Remark}>
                    <div>
                        <label>Appointment Required</label>
                        <select>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                    <div style={{paddingTop:'15px'}}>
                        <label>Remark</label>
                    </div>
                    <div>
                        <textarea />
                    </div>
                    
                </div>

            </div>
        );
    }
};

export default ClientInfo;