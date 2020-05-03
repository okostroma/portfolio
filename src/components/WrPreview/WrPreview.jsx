import React from 'react';
import classes from './WrPreview.module.css'
import Header from "./Header";
import WrPromo from "./WrPromo";


const WrPreview = () => {
    return (
        <section className={classes.wrPreview}>
            <Header />
            <WrPromo />
        </section>
    );
}

export default WrPreview;
