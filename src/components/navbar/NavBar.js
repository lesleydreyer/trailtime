import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import '../app/common/floatgrid.css'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../auth/authActions';
import logo from '../home/images/logo2.svg';
import addtrailicon from './icons/OldSvgImageFiles/addtrailiconwtext.svg';
import viewtrailicon from './icons/OldSvgImageFiles/viewtrailsiconwtext.svg';
import logouticon from './icons/OldSvgImageFiles/logouticon.svg';

export class NavBar extends React.Component {
    logout = () => {
        this.props.dispatch(logout());
        alert('Now Logged Out');
        this.props.history.push("/login")
    }

    render() {
        //ternary operator  (condition ? true do this : false do this)
        return (
            <React.Fragment>
                {
                    this.props.isLoggedIn
                        ? (  //LOGGED IN LINKS
                            <React.Fragment>
                                <div className="navbar-mobile">
                                    <div className="navbar-top-mobile">
                                        <NavLink className="navlink-mobile" to="/trails">View Trails</NavLink>
                                        <NavLink className="navlink-mobile" to="/create">Add Trail</NavLink>
                                        <NavLink className="navlink-mobile" to="/" onClick={this.logout}>Log Out</NavLink>
                                    </div>
                                    <div>
                                        <NavLink id="trailtimelogo-mobile" to="/"><img id="trailtimelogo-mobile" src={logo} alt="logo" /></NavLink>
                                    </div>
                                </div>

                                <div className="navbar-desktop">
                                    <div className="navbar-left col-4nav">
                                        <NavLink className="navlink" to="/trails"><img id="view" className="leftIcons" src={viewtrailicon} alt="View List of Trails" /></NavLink>
                                        <NavLink className="navlink" to="/create"><img id="add" className="leftIcons" src={addtrailicon} alt="Add a Trail" /></NavLink>
                                    </div>
                                    <div className="navbar-right col-4nav">
                                        <NavLink className="navlink" to="/" onClick={this.logout}><img className="rightIcons" id="logout" src={logouticon} alt="Log Out" /></NavLink>
                                    </div>{/*even though logo is in middle, you put it at end because of floats */}
                                    <div className="navbar-middle col-4nav">
                                        <NavLink id="trailtimelogo" to="/"><img className="middleIcons" src={logo} alt="logo" /></NavLink>
                                    </div>
                                    <br /><br /><br />
                                </div>
                            </React.Fragment>
                        )
                        : (  //LOGGED OUT LINKS
                            <React.Fragment>
                                <div className="navbar-loggedout">
                                    <NavLink id="trailtimelogo" to="/"><img className="loggedout-logo" src={logo} alt="logo" /></NavLink>
                                </div><br /><br /><br />
                            </React.Fragment>
                        )}
                <br />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});


export default withRouter(
    connect(mapStateToProps)(NavBar)
);