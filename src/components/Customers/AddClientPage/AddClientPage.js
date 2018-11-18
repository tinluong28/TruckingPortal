import React from 'react';
import FileNav from '../../Navigation/FileNav/FileNav';
import AddClient from '../AddClientPage/AddClient/AddClient';


const addClientPage = () => (
    <div>
        <div>
            <FileNav />
        </div>
        <div>
            <AddClient />
        </div>
    </div>
);

export default addClientPage;