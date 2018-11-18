import React from 'react';
import FileAction from '../../../Navigation/FileAction/FileAction';
import ClientInfo from '../../../../containers/Clients/ClientInfo/ClientInfo';


const addClient = () => (
    <div>
        <div>
            <FileAction />
        </div>
        <div>
            <ClientInfo />
        </div>
    </div>
);

export default addClient;