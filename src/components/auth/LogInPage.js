import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './LogInForm';

class LogInPage extends React.Component {
    login = (values) => {
        this.props.dispatch({
            type: 'LOGIN_SUCCESS',
            username: values.username,
            jwt: 'sdfajlialkmsmf'
        });
        alert(`${values.username} login success!`);
        this.props.history.push('/trails');
    }
    render() {
        return (
            <LogInForm onSubmit={this.login/*bound up top with =()=> instead of this.login.bind(this)*/} />
        )
    }
}

export default connect()(LogInPage);