import React from 'react';
import classes from './WrFooter.module.css'


const WrFooter = () => {
    return (
        <div className={classes.wrFooter}>
            <div className={classes.container}>
                <h3>Kostroma Oxana</h3>
                <div className={classes.nets}>
                    <div className={classes.net}><a href="#">INSTAGRAM</a></div>
                    <div className={classes.net}><a href="#">TWITTER</a></div>
                    <div className={classes.net}><a href="#">FACEBOOK</a></div>
                    <div className={classes.net}><a href="#">PINTEREST</a></div>
                </div>
                <p>&copy; All rights reserved</p>

            </div>


        </div>
    );
}

export default WrFooter;
