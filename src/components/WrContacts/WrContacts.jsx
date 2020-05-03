import React from 'react';
import classes from './WrContacts.module.css'


const WrContacts = () => {
    return (
        <section className={classes.wrContacts}>
            <div className={classes.container}>
                <h1>Contacts</h1>
                <form method="POST">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Last name"/>
                    <textarea placeholder="Your message"></textarea>
                    <input className={classes.submit} type="submit" value="SEND"/>
                </form>
            </div>


        </section>
    );
}

export default WrContacts;
