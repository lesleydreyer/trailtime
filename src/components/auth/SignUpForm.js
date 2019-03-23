import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

export const SignUpForm = (props) => {
    return (
        <form id='signup-form' onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Sign Up</legend>
                <label htmlFor="username">User Name</label><br />
                <Field component='input' name="username"
                    placeholder="Enter your username" required /><br />
                <label htmlFor="password">Password</label><br />
                <Field component='input' name="password"
                    placeholder="Enter your password" required /><br />
                <label htmlFor="email">Email</label><br />
                <Field component='input' name="email"
                    placeholder="Enter your email" required /><br />
                <button type="submit">Sign up</button><br /><br />
                <Link to="/login">Already have an account? Log in here > </Link>
            </fieldset>
        </form>
    )
};


export default reduxForm({
    form: 'signup'
})(SignUpForm)
