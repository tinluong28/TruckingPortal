import React from 'react';
import FileAction from '../../../Navigation/FileAction/FileAction';
import DeliveryLocation from '../../../../containers/Clients/DeliveryLocation/DeliveryLocation';


const addDelivery = () => (
    <div>
        <div>
            <FileAction />
        </div>
        <div>
            <DeliveryLocation />
        </div>
    </div>
);

export default addDelivery;