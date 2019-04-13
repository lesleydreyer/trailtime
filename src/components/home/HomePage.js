import React from 'react';
import './index.css';
import logo from './images/logo2.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const HomePage = (props) => {
    const { history, isLoggedIn } = props;
    if (isLoggedIn) {
        return <Redirect to="/trails"></Redirect>
        //testing travis
    }

    return (
        <React.Fragment>
            <div className='bg'>
                <header role="banner">
                    <img id="trailTimeLogoHomePage" src={logo} alt="Trail Time Logo" />
                    <div className="row">
                    </div>
                </header>
                <main role="main">
                    <div className="homePageInfo">
                        <span className="info">
                            Discover off road trails and add your own!
                            Eventually I would like to add the ability to add photos, calendar events  and comments.<br /><br />
                            <button className="loginbtn" onClick={() => history.push('/login')} type="button">Start Adventuring > </button>
                        </span>
                    </div><br /><br />
                </main>
            </div>
            <div className="footerIntroHomePage">
                © 2019 Lesley Dreyer
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(HomePage);