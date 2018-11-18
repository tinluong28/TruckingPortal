import React, { Component } from 'react';
import classes from './ContainerStatus.module.css';

class ContainerStatus extends Component {

    render() {
        return (
            <div className={classes.Container}>
                <h2>Containers</h2>
                <table>
                    <tr>
                        <th>Container#</th>
                        <th>ETA</th>
                        <th>Discharge Date</th>
                        <th>LFD</th>
                        <th>Terminal Appointment</th>
                        <th>Delivery Appointment</th>

                    </tr>

                </table>

                <button>Add</button>

            </div>

            

        );

    }
};

export default ContainerStatus;