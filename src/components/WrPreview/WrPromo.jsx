import React from 'react';
import classes from './WrPromo.module.css'
import avatar from './avatar.jpg'


const WrPromo = () => {
    return (
        <section className={classes.wrPromo}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1>Hello!</h1>
                    <p>My name is Oxana</p>
                    <p>I am Frontend developer</p>
                </div>

                <div className={classes.image}>
                <img className={classes.avatar} src={avatar}/>
                </div>
            </div>
        </section>
    );
}

export default WrPromo;
