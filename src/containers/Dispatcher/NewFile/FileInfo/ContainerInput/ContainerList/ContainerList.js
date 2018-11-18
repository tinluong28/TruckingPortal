import React from 'react';
import classes from './ContainerList.module.css';
import ContainerDetails from '../ContainerDetails/ContainerDetails';

/*const createContainer = (container) => (
    <li className={classes.ContainerList} key={container.key}>
        {container.text}
        <button onClick={() => delete(container.key)}>Delete</button>
        
    </li>
    //<li key={container.key}>{container.text}</li>
);*/



const containerList = (props) => {
    const deleteContainer = (key) => {
        props.delete(key)
    };
    const createContainer = (container) => (
        <tr className={classes.ContainerList} key={container.key}>
                <td className={classes.Name} onClick={props.details}>{container.text.toUpperCase()}</td>
                <td className={classes.Edit}><button onClick={props.edit}>Edit</button></td>
                <td className={classes.Dangerous}><button onClick= {() => deleteContainer(container.key)}>Delete</button></td>
                <td className={props.showDetails ? classes.Details : classes.Hidden}><ContainerDetails /></td>
        </tr>
        
    );
    
    let containerEntries = props.entries;
    let listContainers = containerEntries.map(createContainer);
        return (
            <tbody className={classes.Table}>
                {listContainers}
            </tbody>
            
        );

}


export default containerList;