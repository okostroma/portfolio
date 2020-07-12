import React from 'react';
import classes from './WrContacts.module.css'
import {Field, reduxForm, reset} from "redux-form";
import * as axios from "axios";
import {connect} from "react-redux";
import {Input, TextArea} from "../../assets/FormControls";
import {required} from "../../assets/validators";


const WrContacts = (props) => {
    const onSubmit = (formData) => {
        axios.post('https://smtp-nodejs-portfolio.herokuapp.com/send', formData)
        props.clearForm()
    }
    return (
        <section id="section4" className={classes.wrContacts}>
            <div className={classes.container}>
                <h1>Contacts</h1>
                <ContactsFormRedux onSubmit={onSubmit}/>
            </div>


        </section>
    );
}

const ContactsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required]} name='name' component={Input} placeholder="Name"/>
            <Field validate={[required]} name='email' component={Input} placeholder="E-mail"/>
            <Field validate={[required]} name='message' component={TextArea} placeholder="Your message"/>
            <button className={classes.submit}> SEND</button>
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
