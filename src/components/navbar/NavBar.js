import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../auth/authActions';
import logo from '../home/logo.svg';
import './floatgrid.css';
import viewtrailsicon from './viewtrailsicon.svg';
import viewtrailsiconwhite from './viewtrailsiconwhite.svg';
import addtrailicon from './addtrailicon.svg';
import logouticon from './logouticon.svg';

/* 
onMouseOver={e => (e.target.src = "http://localhost:3000/static/media/viewtrailsiconwhite.9482d3ba.svg")} />
*/

class NavBar extends React.Component {

    state = {
        img: viewtrailsicon
    }

    logout() {
        this.props.dispatch(logout());
        alert('Now Logged Out');
        this.props.history.push("/login")
    }
    render() {
        //LOGGED OUT LINKS (this ? true do this : false do this so not logged in means logged out, logged in means null and gets the authlink instead)
        const defaultLinks = !this.props.isLoggedIn ? (
            <React.Fragment>
                <span className="rightlinks">
                    <li>
                        <NavLink className="navlink" to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                    </li>
                </span>
            </React.Fragment>
        ) : null;

        //LOGGED IN LINKS
        const authLinks = this.props.isLoggedIn ? (
            <React.Fragment>
                <div className="navbar">
                    <div className="col-4"><span><div className="leftlinks">
                        <NavLink className="navlink" to="/trails">
                            <img
                                id="view"
                                src={this.state.img}
                                alt="View Trails"
                                onMouseOver={() => this.setState({ img: viewtrailsiconwhite })}
                                onMouseOut={() => this.setState({ img: viewtrailsicon })} />
                        </NavLink>
                        <NavLink className="navlink" to="/create"><img id="add" src={addtrailicon} alt="Add a Trail" /></NavLink>
                    </div></span></div>
                    <div className="col-4">
                        <NavLink id="trailtimelogo" to="/"><img src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}><img src={logouticon} alt="log out" /></NavLink>
                    </div>
                </div><br /><br /><br />
            </React.Fragment>
        ) : null;

        return (
            <div>

                {defaultLinks}
                {authLinks}
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});


export default withRouter(
    connect(mapStateToProps)(NavBar)
);

/*
import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../auth/authActions';
import logo from '../home/logo.svg'
class NavBar extends React.Component {
    logout() {
        this.props.dispatch(logout());
        alert('Now Logged Out');
        this.props.history.push("/login")
    }
    render() {
        //LOGGED OUT LINKS (this ? true do this : false do this so not logged in means logged out, logged in means null and gets the authlink instead)
        const defaultLinks = !this.props.isLoggedIn ? (
            <React.Fragment>
                  <li>
                        <NavLink className="trailtime" to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
                    </li>
                <li>
                    <NavLink className="navlink" to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                </li>
            </React.Fragment>
        ) : null;

        //LOGGED IN LINKS
        const authLinks = this.props.isLoggedIn ? (
            <React.Fragment>
                <li>
                    <NavLink className="navlink" to="/trails">View Trails</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/create">Create Trail</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}>Logout</NavLink>
                </li>
            </React.Fragment>
        ) : null;

        return (
            <div className="navbar">
             <NavLink className="trailtime" to="/"><img className="logo" src={logo} alt="logo" /></NavLink>
                <ul className="navlinks">
                    {defaultLinks}
                    {authLinks}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});


export default withRouter(
    connect(mapStateToProps)(NavBar)
);
*/