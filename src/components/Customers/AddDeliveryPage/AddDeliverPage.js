import React from 'react';
import FileNav from '../../Navigation/FileNav/FileNav';
import AddDelivery from '../AddDeliveryPage/AddDelivery/AddDelivery';


const addDeliveryPage = () => (
    <div>
        <div>
            <FileNav />
        </div>
        <div>
            <AddDelivery />
        </div>
    </div>
);

export default addDeliveryPage;