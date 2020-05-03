import React from 'react';
import classes from './WrWorks.module.css';
import grid from './grid.png'


const WrWorks = () => {
    return (
        <section className={classes.wrWorks}>
            <div className={classes.container}>
                <h2>My Works</h2>
                <div className={classes.works}>
                    <div className={classes.work}>
                        <div className={classes.item}>
                            <a href="#"><img src={grid}/></a>
                            <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.item}>
                            <a href="#"><img src={grid}/></a>
                            <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default WrWorks;
