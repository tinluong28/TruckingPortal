import React from 'react';
import classes from './Details.module.css'

const details = () => (
    <div className={classes.Overall}>
        <div className={classes.Delivery}>
        <div className={classes.Section}>
            <div className={classes.Label}><label style={{fontWeight: 'bold'}}>Container #</label></div>
            <div style={{float: 'left'}}><input /></div>
            <div style={{float: 'left', margin: 'auto 5px'}}><label>Size</label></div>
            <div>
                <select>
                    <option>20'</option>
                    <option>40'</option>
                    <option>60'</option>
                </select>
            </div>
        </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Piece Count</label></div>
                <div style={{float: 'left', marginRight: '3px'}}><input style={{margin: '0', width: '40px'}} /></div>
                <div>
                    <select>
                        <option>PCS</option>
                        <option>PAL</option>
                        <option>Box</option>
                    </select>
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Weight</label></div>
                <div style={{float: 'left', marginRight: '3px'}}><input style={{width: '40px'}} /></div>
                <div>
                    <select>
                        <option>KG</option>
                        <option>Lbs</option>
                    </select>
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Dimension</label></div>
                <div style={{float: 'left', marginRight: '3px'}}><input style={{width: '40px'}} /></div>
                <div>
                    <select>
                        <option>CBM</option>
                    </select>
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Steamship Line</label></div>
                <div><input placeholder=' ONE Line'/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Terminal</label></div>
                <div><input placeholder=' Pier A'/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>ETA</label></div>
                <div><input type= 'date' style={{width:'140px', fontSize: '1.1em'}}/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Discharge Date</label></div>
                <div><input type='date' style={{width:'140px', fontSize: '1.1em'}}/></div>
            </div>
        
            <div className={classes.Section}>
                <div className={classes.Label}><label style={{color: 'red', fontWeight: 'bold'}}>Last Free Date</label></div>
                <div style={{marginRight: '5px'}}><input type='date' style={{width:'140px', fontSize: '1.1em'}} /></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Status</label></div>
                <div style={{float: 'left', marginRight: '3px', marginBottom: '8px'}}><label>Freight</label></div>
                <select style={{float: 'left', width: '50px', marginRight: '3px', marginBottom: '8px'}}>
                    <option> </option>
                    <option className={classes.Hold}>Hold</option>
                    <option className={classes.Rld}>RLD</option>
                </select>
                <div style={{float: 'left', marginRight: '3px', marginBottom: '8px'}}><label>Customs</label></div>
                <select style={{float: 'left', width: '50px', marginRight: '3px', marginBottom: '8px'}}>
                    <option> </option>
                    <option className={classes.Hold}>Hold</option>
                    <option className={classes.Rld}>RLD</option>
                </select>
                
            </div>
            
        </div>
        
        <div className={classes.Status}>
            <div className={classes.Section}>
                <div className={classes.Label}><label>P/U Date</label></div>
                <div style={{float:'left'}}><input type='date' style={{width:'140px', marginRight:'5px',fontSize: '1.1em'}}/></div>
                <div style={{float:'left', marginRight: '5px'}}><label>Demurrage</label></div>
                <div><input style={{width: '30px'}} /></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>P/U Time</label></div>
                <div><input type='time'/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label style={{color: 'red', fontWeight: 'bold'}}>Per Diem</label></div>
                <div><input type='date' style={{width:'140px', fontSize: '1.1em'}}/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Empty Return</label></div>
                <div style={{float:'left'}}><input type='date' style={{width:'140px', marginRight:'5px',fontSize: '1.1em'}}/></div>
                <div style={{float:'left', marginRight: '5px'}}><label>Per Diem</label></div>
                <div><input style={{width: '30px'}} /></div>
            </div>
            <div style={{borderLeft: 'solid 1px black', borderTop: 'solid 1px grey'}}>
                <div className={classes.Section}  style={{marginTop: '7px'}}>
                    <div className={classes.Label}><label style={{fontWeight: 'bold'}}>Chassis #</label></div>
                    <div><input /></div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label style={{color: 'red', fontWeight: 'bold'}}>Per Diem</label></div>
                    <div><input type='date' style={{width:'140px', fontSize: '1.1em'}}/></div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Chassis Return</label></div>
                    <div style={{float:'left'}}><input type='date' style={{width:'140px', marginRight:'5px',fontSize: '1.1em'}}/></div>
                    <div style={{float:'left', marginRight: '5px'}}><label>Per Diem</label></div>
                    <div><input style={{width: '30px'}} /></div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Label}><label>Flip Chassis</label></div>
                    <div style={{float: 'left'}}><input type='checkbox'/></div>
                    <div><input placeholder= 'New Chassis #' style={{width: '140px', marginLeft: '15px'}} /></div>
                </div>
            </div>
        </div>

        <div className={classes.Billing}>
            <div className={classes.Section}>
                <div className={classes.Label}><label>TMF</label></div>
                <div style={{float: 'left', marginRight: '5px'}}><input type='checkbox'/></div>
                <div><span className={classes.Cost}>$<input /></span></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Night Gate</label></div>
                <div><input type='checkbox'/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Pre-Pull</label></div>
                <div><input type='checkbox'/></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Yard Storage</label></div>
                <div style={{float: 'left'}}><input type='checkbox'/></div>
                <div style={{float: 'left', marginLeft:'10px', marginRight:'3px'}}><input placeholder='# of Days'style={{width: '70px'}}/></div>
                <div><label>Days</label></div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Exam Fee</label></div>
                <div style={{float:'left'}}><span className={classes.Cost}>$<input /></span></div>
                <div style={{marginRight: '10px', float: 'left'}}><label>Paid By</label></div>
                <div style={{marginBottom: '8px'}}>
                    <select style={{width: '85px', fontWeight: 'bold'}}>
                        <option>Company</option>
                        <option>Broker</option>
                        <option>Forwarder</option>
                        <option>Importer</option>
                    </select>
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Demurrage Fee</label></div>
                <div style={{float:'left'}}><span className={classes.Cost}>$<input /></span></div>
                <div style={{marginRight: '10px', float: 'left'}}><label>Paid By</label></div>
                <div style={{marginBottom: '8px'}}>
                    <select style={{width: '85px', fontWeight: 'bold'}}>
                        <option>Company</option>
                        <option>Broker</option>
                        <option>Forwarder</option>
                        <option>Importer</option>
                    </select>
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Label}><label>Per Diem Fee</label></div>
                <div style={{float:'left'}}><span className={classes.Cost}>$<input /></span></div>
                <div style={{marginRight: '10px', float: 'left'}}><label>Paid By</label></div>
                <div style={{marginBottom: '8px'}}>
                    <select style={{width: '85px', fontWeight: 'bold'}}>
                        <option>Company</option>
                        <option>Broker</option>
                        <option>Forwarder</option>
                        <option>Importer</option>
                    </select>
                </div>
            </div>
           
        </div>

    </div>
);

export default details;