import React from 'react';
import classes from './WrWorks.module.css';
import grid from './grid.png';
import Particles from "react-particles-js";
import {particleOpts} from "../WrPreview/WrPreview";
import net from './net.png';
import counter from './counter.png'


const WrWorks = () => {

    return (
        <section id="section3" className={classes.wrWorks}>
            <Particles className={classes.particles} params={particleOpts}/>
            <div className={classes.container}>
                <h2>My Works</h2>
                <div className={classes.works}>


                    <div className={classes.work}>
                        <div className={classes.net}>
                            <button className={classes.button}><a href='https://github.com/okostroma/my-app'>VIEW CODE</a></button>
                            <button className={classes.button}><a href='https://okostroma.github.io/my-app/'>VIEW DEMO</a></button>

                        </div>
                        <p>Social network</p>
                        <span>This project was implemented using React-Redux, functional components</span>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.counter}>
                            <button className={classes.button}><a href='https://github.com/okostroma/counter'>VIEW CODE</a></button>
                            <button className={classes.button}><a href='https://okostroma.github.io/counter/'>VIEW DEMO</a></button>
                        </div>
                        <p>Counter</p>
                        <span>This project was implemented using React-Redux, class components</span>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.todolist}>
                            <button className={classes.button}><a href='https://github.com/okostroma/todolist'>VIEW CODE</a></button>
                            <button className={classes.button}><a href='https://okostroma.github.io/todolist/'>VIEW DEMO</a></button>
                        </div>
                        <p>Todo List</p>
                        <span>This project was implemented using React-Redux, TypeScript, REST API</span>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.avengers}>
                            <button className={classes.button}><a href='https://github.com/okostroma/avengers-game'>VIEW CODE</a></button>
                            <button className={classes.button}><a href='https://okostroma.github.io/avengers-game/'>VIEW DEMO</a></button>
                        </div>
                        <p>Avenders game</p>
                        <span>This project was implemented using React-Redux, functional components </span>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default WrWorks;
