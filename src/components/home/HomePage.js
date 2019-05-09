import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import jeepflagstaff from './images/jeepflagstaff.jpg';
import hurricaneridge from './images/hurricaneridgel.jpg';
import moxie2 from './images/Moxie2.jpg';
import beachtrail from './images/beachtrail.jpg';
import beachtrail2 from './images/beachtrail2.jpg';
import coloradotrail from './images/coloradotrail.jpg';
import leftcollage from './images/left-collage.png';
import rightcollage from './images/right-collage.png';
import './home.css';
import logo from './images/logo2.svg';


export const HomePage = (props) => {
    const { history, isLoggedIn } = props;
    if (isLoggedIn) {
        return <Redirect to="/trails"></Redirect>
    }

    return (
        <React.Fragment>
            <div className='homeBody'>
                <img src={leftcollage} className="leftcollage" alt="image collage" />
                <img src={rightcollage} className="rightcollage" alt="image collage" />
                <header role="banner" className='bg'>
                    <img id="trailTimeLogoHomePage" src={logo} alt="Trail Time Logo" />
                </header>
                <main role="main" className="infoContainer">
                    <div className="infoText">
                        Discover off road trails! With Trail Time you can see what trails others have been on, and add your own favorite trails to the list too.
                            Eventually I would like to add the ability to add photos, calendar events  and comments.<br /><br />
                        <button className="logInBtn" onClick={() => history.push('/login')} type="button">Start Adventuring > </button>
                    </div>
                </main>
                <div className="footerHomePage">
                    © 2019 Lesley Dreyer
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(HomePage);