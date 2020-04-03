import React from 'react';
import classes from './WrSkills.module.css'
import comp from './comp.png'
import book from './book.png'
import line from './line.png'

const WrSkills = () => {
    return (
        <section className={classes.wrSkills}>
            <div className={classes.container}>
                <h1>My Skills</h1>
                <div className={classes.mySkills}>
                    <div className={classes.skill}>
                       <img src={book}/>
                        <div>
                       <h3>HTML/CSS</h3>
                       <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <img src={line}/>
                        <div>
                        <h3>JS</h3>
                        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <img src={comp}/>
                        <div>
                        <h3>REACT</h3>
                        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>


                </div>

            </div>

        </section>
    );
}

export default WrSkills;
