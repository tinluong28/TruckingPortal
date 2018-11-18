import React from 'react';
import classes from './NavigationItems.module.css';
import { Link } from 'react-router-dom';

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <div className={classes.Items}>
            <ul>
                <div>
                    <li><Link to="/" className={[classes.Home, classes.active].join(' ')}>Home</Link></li>
                </div>
                <div>
                    <li><Link to="/" className={classes.Dispatcher}>Dispatcher</Link>
                        <ul>
                            <li><Link to="/" className={classes.Link}>List</Link></li>
                            <li><Link to="/" className={classes.Link}>Pending</Link></li>
                            <li><Link to="/" className={classes.Link}>Completed</Link></li>
                        </ul>
                    </li>
                </div>
                <div>
                    <li><Link to="/" className={classes.Clients}>Clients</Link>
                        <ul>
                            <li><Link to="/" className={classes.Link}>Client List</Link></li>
                            <li><Link to="/" className={classes.Link}>Deliver Locations</Link></li>
                            <li><Link to="/" className={classes.Link}>Search Client</Link></li>
                            <li><Link to="/clientInfo" className={classes.Link}>Add Client</Link></li>
                            <li><Link to="/deliveryLocation" className={classes.Link}>Add Delivery Location</Link></li>
                        </ul>
                    </li>
                </div>
                <div>
                <li><Link to="/" className={classes.Accounting}>Accounting</Link>
                    <ul>
                        <li><Link to="/" className={classes.Link}>Billing</Link></li>
                        <li><Link to="/" className={classes.Link}>AR Aging</Link></li>
                    </ul>
                </li>
                </div>
                <div>
                <li><Link to="/" className={classes.Admin}>Admin</Link>
                    <ul>
                        <li><Link to="/" className={classes.Link}>Users Management</Link></li>
                    </ul>
                </li>
                </div>
            </ul>
        </div>
        
        
        

    </div>
);

export default navigationItems;