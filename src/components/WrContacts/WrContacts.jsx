import React from 'react';
import classes from './WrContacts.module.css'
import {Field, reduxForm, reset} from "redux-form";
import * as axios from "axios";
import {connect} from "react-redux";
import {Input, TextArea} from "../../assets/FormControls";
import {required} from "../../assets/validators";
import Swal from 'sweetalert2';
import Particles from "react-particles-js";
import {particleOpts} from "../WrPreview/WrPreview";



const WrContacts = (props) => {
    const onSubmit = (formData) => {
        axios.post('https://smtp-nodejs-portfolio.herokuapp.com/send', formData)
        props.clearForm()
    }



    return (
        <section id="section4" className={classes.wrContacts}>
            <Particles className={classes.particles} params={particleOpts}/>
            <div className={classes.container}>
                <h1>Contact me</h1>
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
