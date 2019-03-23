import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from "react-redux";
import { signUp } from "./authActions";
export class SignUpPage extends React.Component {

    signup = (values) => {
        this.props.dispatch(
            signUp(values))
            .then(createdUser => {
                alert(`User ${createdUser.username} created. Redirecting login...`);
                this.props.history.push('/login');
            })
    }
    render() {
        return (
            <SignUpForm onSubmit={this.signup} />
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SignUpPage);