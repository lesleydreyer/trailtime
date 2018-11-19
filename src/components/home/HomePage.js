import React from 'react';
import './index.css';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const HomePage = (props) => {
    const { history, isLoggedIn } = props;
    if (isLoggedIn) {
        return <Redirect to="/trails"></Redirect>
    }

    return (
        <React.Fragment>
            <div className='bg'>
                <header role="banner">
                    <img src={logo} />
                    <div className="row">
                    </div>
                </header>
                <main role="main">
                    <div>
                        <span className="circle">Discover new trails</span>
                        <span className="circle">Add your trails</span>
                        <span className="circle">Meet up with others</span>
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