import React from 'react';
import classes from './WrContacts.module.css'
import {Field, reduxForm, reset} from "redux-form";
import * as axios from "axios";
import {connect} from "react-redux";
import {Input, TextArea} from "../../assets/FormControls";
import {required} from "../../assets/validators";
import Swal from 'sweetalert2';
import Particles from "react-particles-js";



const WrContacts = (props) => {
    const onSubmit = (formData) => {
        axios.post('https://smtp-nodejs-portfolio.herokuapp.com/send', formData)
        props.clearForm()
    }

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
                "type": "star", /* форма: "circle", "edge", "triangle", "polygon", "star", "image" */
                "stroke": { /* обводка частиц */
                    "width": 0, /* ширина обводки */
                    "color": "#000000" /* цвет обводки */
                },
                "polygon": {
                    "nb_sides": 5 /* количество сторон полигона (type: polygon), от 3 до 12 */
                },
            },
            "size": {
                "value": 7,
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
        <section id="section4" className={classes.wrContacts}>
            <Particles className={classes.particles} params={particleOpts}/>
            <div className={classes.container}>
                <h1>Contacts</h1>
                <ContactsFormRedux onSubmit={onSubmit}/>
            </div>


        </section>
    );
}

const ContactsForm = (props) => {

    const onClick = () => {
        return Swal.fire(
            'Message sent!',
            'Thank you',
            'success',
            'Cool'
        )
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required]} name='name' component={Input} placeholder="Name"/>
            <Field validate={[required]} name='email' component={Input} placeholder="E-mail"/>
            <Field validate={[required]} name='message' component={TextArea} placeholder="Your message"/>
            <button onClick={onClick} className={classes.submit}> SEND</button>
        </form>

    )
}


let mapDispatchToProps = (dispatch) => {
    return {
        clearForm: () => {
            dispatch(reset('contacts'))
        }
    }
}

const ContactsFormRedux = reduxForm({form: 'contacts'})(ContactsForm)

export default connect(null, mapDispatchToProps)(WrContacts);
