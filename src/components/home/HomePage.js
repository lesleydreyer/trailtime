import React from 'react';
import './index.css';
import logo from './images/logo2.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const HomePage = (props) => {
    const { history, isLoggedIn } = props;
    if (isLoggedIn) {
        return <Redirect to="/trails"></Redirect>
    }

    return (
        <React.Fragment>
            <div className='bg'>
                <header role="banner">
                    <img src={logo} alt="logo" />
                    <div className="row">
                    </div>
                </header>
                <main role="main">
                    <div>
                        <span className="info">Discover trails to go on and add your own! Eventually I would like to add the ability to add photos, calendar events and comments.</span>
                        <button className="loginbtn" onClick={() => history.push('/login')} type="button">Start Adventuring > </button>
                    </div><br /><br />
                </main>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(HomePage);