import React from 'react';
import classes from './WrSkills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'


const WrSkills = () => {
    return (
        <section id="section2" className={classes.wrSkills}>
            <div className={classes.container}>
                <h2>My Skills</h2>
                <div className={classes.mySkills}>
                    <div className={classes.skill}>
                        <FontAwesomeIcon icon={faHtml5} className={classes.icon}/>
                        <div className={classes.title}>
                       <h3>HTML/CSS</h3>
                       <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <FontAwesomeIcon icon={faJs} className={classes.icon}/>
                        <div className={classes.title}>
                        <h3>JS</h3>
                        <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className={classes.skill}>
                        <FontAwesomeIcon icon={faReact} className={classes.icon}/>
                        <div className={classes.title}>
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
