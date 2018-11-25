import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './LogInForm';
import { logIn } from "./authActions";
class LogInPage extends React.Component {
    login = (values) => {
        this.props.logIn(values.then(loginData => {
            alert(`User ${loginData.user.username} now logged in`);
            this.props.history.push('/trails');
        }))
        /*
        this.props.dispatch({
            type: 'LOGIN_SUCCESS',
            username: values.username,
            jwt: 'sdfajlialkmsmf'
        });
        alert(`${values.username} login success!`);
        this.props.history.push('/trails');*/
    }
    render() {
        return (
            <LogInForm onSubmit={this.login/*bound up top with =()=> instead of this.login.bind(this)*/} />
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    logIn
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);