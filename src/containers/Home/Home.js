import React, { Component } from 'react';
import classes from './Home.module.css';
import FileSearch from '../../components/QuickSearch/FileSearch/FileSearch';
import LiveStatus from '../../components/QuickSearch/LiveStatus/LiveStatus';





class Home extends Component {
    render () {
        return (
            
            <React.Fragment className={classes.Home}>
                <section>
                    <FileSearch className={classes.FileSearch} />
                    <LiveStatus className ={classes.LiveStatus}/>
                    
                </section>
                
                
            </React.Fragment>
        )
    }
}

export default Home;