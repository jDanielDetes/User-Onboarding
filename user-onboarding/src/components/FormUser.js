import React from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik'

function FormUser() {
    return (
     
        <Formik
        initialValues={{name:'', email:'', password:''}}
        onSubmit={(values,tools)=>{
            tools.resetForm()
        }}

        render={props => {
            return (
                <Form>
                    <Field name= 'name' placeholder= 'enter name' />
                    <Field name= 'email'  placeholder= 'enter email' />
                    <Field name= 'password' placeholder= 'enter password' />
                    <input type='submit' />
                </Form>
            ) 
        }}
        />
    )
}

export default FormUser

/*  import {Formik,Form,Field,ErrorMessage} from 'Formik'

function Form() {
    return (
     
        <Formik
        initialValues={{name:'', email:'', password:''}}
        onSubmit={(values,tools)=>{
            tools.resetForm()
        }}

        render={props => {
            return (
                <Form>
                    <Field name= 'name' placeholder= 'enter name' />
                    <Field name= 'email'  placeholder= 'enter email' />
                    <Field name= 'password' placeholder= 'enter password' />
                    <input type='submit' />
                </Form>
            )
        }}
        />
    )
}
*/