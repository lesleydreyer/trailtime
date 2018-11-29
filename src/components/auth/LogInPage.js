import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './LogInForm';
import { logIn } from "./authActions";
import { SubmissionError } from 'redux-form';
import { logInFailureAction } from './authActions';

class LogInPage extends React.Component {
    login(values) {
        this.props.dispatch(
            logIn(values)
        )
            .then(authData => {
                if (authData === undefined) {
                    //this.props.dispatch(logInFailureAction);
                    //alert(`${logInFailureAction}`);
                    //console.log(autherr);
                    alert('login failed');
                }
                else {
                    alert(`User ${authData.user.username} login success!`);
                    this.props.history.push('/trails');
                }
            })
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
            console.log('THISPROPS', this.props);
        }

        return (
            <React.Fragment>
                {error}
                <LogInForm onSubmit={this.login.bind(this)} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    //error: state.auth.error
    //error: SubmissionError
    autherr: state.auth.error
});

export default connect(mapStateToProps)(LogInPage);