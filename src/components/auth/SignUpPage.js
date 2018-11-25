import React from 'react';
import SignUpForm from './SignUpForm';
import { connect } from "react-redux";
import { signUp } from "./authActions";
class SignUpPage extends React.Component {

    signup = (values) => {
        this.props.signUp(values).then(createdUser => {
            alert(`User ${createdUser.username} created. Redirecting login...`);
            this.props.history.push('/login');
        })
        //alert(`User ${values.username} created. Redirecting login...`);
        //this.props.history.push('/login');
    }
    render() {
        return (
            <SignUpForm onSubmit={this.signup/*bound up top with =()=> instead of this.signup.bind(this)*/} />
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { signUp };

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);