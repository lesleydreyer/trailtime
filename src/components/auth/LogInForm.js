import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import './auth.css';

export const LogInForm = (props) => {
    return (
        <form id="login-form" onSubmit={props.handleSubmit}>
            <fieldset>
                <legend>Log In</legend>
                <label className="label" htmlFor="username">User Name</label><br />
                <Field className="input" name="username" component='input' placeholder="Enter your username" required /><br />
                <label className="label" htmlFor="password">Password</label><br />
                <Field className="input" name="password" component='input' type='password' placeholder="Enter your password" required /><br />
                <button type="submit">Log in</button><br /><br />
                <Link to="/signup">Don't have an account? Sign up here > </Link>
            </fieldset>
        </form >
    )
};

export default reduxForm({
    form: 'login'
    //NEED? onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LogInForm)
