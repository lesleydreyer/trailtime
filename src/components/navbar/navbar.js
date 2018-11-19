import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";

class NavBar extends React.Component {
    logout() {
        this.props.dispatch({
            type: 'LOGOUT_SUCCESS'
        });
        alert('Now Logged Out');
    }
    render() {
        //LOGGED OUT LINKS (this ? true do this : false do this so not logged in means logged out, logged in means null and gets the authlink instead)
        const defaultLinks = !this.props.isLoggedIn ? (
            <React.Fragment>
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
                    <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}>Logout</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/trails">View Trails</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/create">Create Trail</NavLink>
                </li>
            </React.Fragment>
        ) : null;

        return (
            <div className="navbar">
                <ul className="navlinks">
                    <li>
                        <NavLink className="trailtime" to="/">TRAIL TIME!</NavLink>
                    </li>
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


export default connect(mapStateToProps)(NavBar);