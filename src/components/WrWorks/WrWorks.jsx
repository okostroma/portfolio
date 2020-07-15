import React from 'react';
import classes from './WrWorks.module.css';
import grid from './grid.png';
import Particles from "react-particles-js";


const WrWorks = () => {
    const particleOpts = {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#715858"
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#F5DEB3",
                "opacity": 0.4,
                "width": 1
            },
            "shape": {
                "type": "star",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "size": {
                "value": 6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },"interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            }
        }}
    return (
        <section id="section3" className={classes.wrWorks}>
            <Particles className={classes.particles} params={particleOpts}/>
            <div className={classes.container}>
                <h2>My Works</h2>
                <div className={classes.works}>
                    <div className={classes.work}>
                        <div className={classes.item}>
                            <a href="#"><img src={grid}/></a>
                            <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                            <button className={classes.button}>VIEW MORE</button>
                        </div>
                    </div>
                    <div className={classes.work}>
                        <div className={classes.item}>
                            <a href="#"><img src={grid}/></a>
                            <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                            <button className={classes.button}>VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default WrWorks;
