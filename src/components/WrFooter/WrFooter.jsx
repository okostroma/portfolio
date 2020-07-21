import React from 'react';
import classes from './WrFooter.module.css'


const WrFooter = () => {
    return (
        <section className={classes.wrFooter}>
            <div className={classes.container}>
                <h3>Kostroma Oxana</h3>
                <div className={classes.nets}>
                    <div className={classes.net}><a className={classes.social} href="https://www.instagram.com/oxa.kost/">INSTAGRAM</a></div>
                    <div className={classes.net}><a className={classes.social} href="https://www.codewars.com/users/okostroma">CODEWARS</a></div>
                    <div className={classes.net}><a className={classes.social} href="https://www.linkedin.com/in/oxana-kostroma-1b58441ab/">LINKEDIN</a></div>
                    <div className={classes.net}><a className={classes.social} href="https://github.com/okostroma">GITHUB</a></div>
                </div>
                <p>&copy; All rights reserved</p>

            </div>


        </section>
    );
}

export default WrFooter;
