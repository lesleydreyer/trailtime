import React from 'react';
import { connect } from 'react-redux';
import LogInForm from './LogInForm';
import { logIn } from "./authActions";
import { SubmissionError } from 'redux-form';
class LogInPage extends React.Component {
    login(values) {
        this.props.dispatch(
            logIn(values)
        ).catch(error => {
            if (error) {
                return console.log('error!!');
            }
            //throw new SubmissionError(error)
            //} else { console.log('aaa') }
        })
            .then(authData => {
                console.log(authData);
                alert(`User ${authData.user.username} login success!`);
                this.props.history.push('/trails');
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
});

export default connect(mapStateToProps)(LogInPage);