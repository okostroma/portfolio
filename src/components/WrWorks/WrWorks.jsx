import React from 'react';
import classes from './WrWorks.module.css';
import grid from './grid.png'


const WrWorks = () => {
    return (
        <div className={classes.wrWorks}>
            <div className={classes.container}>
                <h1>My Works</h1>
                <div className={classes.works}>
                    <div className={classes.work}>
                        <div className={classes.item}>
                            <a href="#"><img src={grid}/></a>
                        </div>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.item}>
                            <a href="#"><img src={grid}/></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default WrWorks;
