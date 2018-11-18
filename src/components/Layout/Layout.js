import React from 'react';
import classes from './Layout.module.css';
import Header from '../../components/Navigation/Header/Header';
import Footer from '../../components/Navigation/Footer/Footer';

const layout = (props) => (
    <React.Fragment>
        <div className={classes.Layout}>
            <div><Header /></div>
            {/*<Toolbar /> */}

            <div>
                <main className = {classes.Content}>
                    {props.children}
                </main>
            </div>
        </div>
        
        
        <div><Footer className={classes.Footer} /></div>
    </React.Fragment>
);

export default layout;