import React from 'react';
import classes from './WrFooter.module.css'


const WrFooter = () => {
    return (
        <section className={classes.wrFooter}>
            <div className={classes.container}>
                <h3>Kostroma Oxana</h3>
                <div className={classes.nets}>
                    <div className={classes.net}><a className={classes.social} href="#">INSTAGRAM</a></div>
                    <div className={classes.net}><a className={classes.social} href="#">TWITTER</a></div>
                    <div className={classes.net}><a className={classes.social} href="#">FACEBOOK</a></div>
                    <div className={classes.net}><a className={classes.social} href="#">PINTEREST</a></div>
                </div>
                <p>&copy; All rights reserved</p>

            </div>


        </section>
    );
}

export default WrFooter;
