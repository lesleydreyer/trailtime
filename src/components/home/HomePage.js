import React from 'react';
import './home.css';
import logo from './images/logo2.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import jeepflagstaff from './images/jeepflagstaff.jpg';
import hurricaneridge from './images/hurricaneridgel.jpg';
import moxie1 from './images/Moxie1.jpg';
import moxie2 from './images/Moxie2.jpg';
import beachtrail from './images/beachtrail.jpg';
import beachtrail2 from './images/beachtrail2.jpg';
import coloradotrail from './images/coloradotrail.jpg';


export const HomePage = (props) => {
    const { history, isLoggedIn } = props;
    if (isLoggedIn) {
        return <Redirect to="/trails"></Redirect>
        //testing travis
    }

    return (
        <React.Fragment>
            <div className='homeBody'>
                <img className="sideImage img1L" src={coloradotrail} alt="jeep" />
                <img className="sideImage img2L" src={moxie2} alt="jeep" />
                <img className="sideImage img3L" src={beachtrail} alt="jeep" />
                <img className="sideImage img1R" src={jeepflagstaff} alt="jeep" />
                <img className="sideImage img2R" src={beachtrail2} alt="jeep" />
                <img className="sideImage img3R" src={hurricaneridge} alt="jeep" />
                <header role="banner" className='bg'>
                    <img id="trailTimeLogoHomePage" src={logo} alt="Trail Time Logo" />
                    {/*<div role="main" className="infoContainerWideScreen">
                        <img className="homeimg1" src={jeepflagstaff} alt="jeep" />
                        <div className="infoTextWideScreen">
                            Discover off road trails! With Trail Time you can see what trails others have been on, and add your own favorite trails to the list too.
                            Eventually I would like to add the ability to add photos, calendar events  and comments.<br /><br />
                            <button className="loginbtn" onClick={() => history.push('/login')} type="button">Start Adventuring > </button>
                        </div>
    </div>*/}
                </header>
                <main role="main" className="infoContainer">
                    <div className="infoText">
                        Discover off road trails! With Trail Time you can see what trails others have been on, and add your own favorite trails to the list too.
                            Eventually I would like to add the ability to add photos, calendar events  and comments.<br /><br />
                        <button className="loginbtn" onClick={() => history.push('/login')} type="button">Start Adventuring > </button>
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