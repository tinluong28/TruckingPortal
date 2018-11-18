import React from 'react';
import classes from './LiveStatus.module.css';


const liveStatus = () => (
    <div className={classes.LiveStatus}>
        <h2>Live Status</h2>
        <table>
            <thead>
                <tr>
                   <th>Container</th>
                   <th>Client</th>
                   <th>Delivery Location</th>
                   <th>Arrival Date</th>
                   <th>Terminal</th>
                   <th>Appointment Required (Y/N)</th>
                   <th>Appointment</th>
                   <th>LFD</th>
                </tr>
            </thead>
           <tbody>
                <tr>
                    <td><a href= '/'>BSIU1234567</a></td>
                    <td>Apache</td>
                    <td>Chino</td>
                    <td>10/18</td>
                    <td>Pier A</td>
                    <td>Y</td>
                    <td>10/22/2018</td>
                    <td>10/23/2018</td>
                </tr>
                <tr>
                     <td><a href= '/'>MAEU5467838</a></td>
                     <td>Samsung</td>
                     <td>Costco</td>
                     <td>10/20</td>
                     <td>APM</td>
                     <td>Y</td>
                     <td>10/26/2018</td>
                     <td>10/26/2018</td>
                </tr>
                <tr>
                     <td><a href= '/'>TCLU2321598</a></td>
                     <td>Apple</td>
                     <td>Wilmington</td>
                     <td>10/22</td>
                     <td>Total Terminal</td>
                     <td>N</td>
                     <td>10/22/2018</td>
                     <td>10/26/2018</td>
                </tr>
                <tr>
                     <td><a href= '/'>MSCU1235589</a></td>
                     <td>Microsoft</td>
                     <td>City of Industry</td>
                     <td>10/23</td>
                     <td>Pier A</td>
                     <td>Y</td>
                     <td>10/25/2018</td>
                     <td>10/27/2018</td>
                </tr>
           </tbody>
           

        </table>
    </div>
   

);

export default liveStatus;