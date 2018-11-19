import React from 'react';
import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {

    signup = (values) => {
        alert(`User ${values.username} created. Redirecting login...`);
        this.props.history.push('/login');
    }
    render() {
        return (
            <SignUpForm onSubmit={this.signup/*bound up top with =()=> instead of this.signup.bind(this)*/} />
        )
    }
}

export default SignUpPage;