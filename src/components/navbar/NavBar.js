import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../auth/authActions';
import logo from '../home/images/logo2.svg';
import addtrailicon from './icons/OldSvgImageFiles/addtrailicon.svg';
import viewtrailicon from './icons/OldSvgImageFiles/viewtrailsicon.svg';
import logouticon from './icons/OldSvgImageFiles/logouticon.svg';

export class NavBar extends React.Component {

    logout() {
        this.props.dispatch(logout());
        alert('Now Logged Out');
        this.props.history.push("/login")
    }
    render() {
        //LOGGED OUT LINKS (this ? true do this : false do this so not logged in means logged out, logged in means null and gets the authlink instead)
        const defaultLinks = !this.props.isLoggedIn ? (
            <React.Fragment>
                <div className="navbar">
                    <div className="navbar-left col-4nav">
                    </div>
                    <div className="navbar-middle col-4nav">
                        <NavLink id="trailtimelogo" to="/"><img src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="navbar-right col-4nav">
                    </div>
                </div><br /><br /><br />
            </React.Fragment>
        ) : null;

        //LOGGED IN LINKS
        const authLinks = this.props.isLoggedIn ? (
            <React.Fragment>
                <div className="navbar">
                    <div className="navbar-left col-4nav">
                        <NavLink className="navlink" to="/trails"><img id="view" className="leftIcons" src={viewtrailicon} alt="View List of Trails" /></NavLink>
                        <NavLink className="navlink" to="/create"><img id="add" className="leftIcons" src={addtrailicon} alt="Add a Trail" /></NavLink>
                    </div>
                    <div className="navbar-middle col-4nav">
                        <NavLink id="trailtimelogo" to="/"><img className="middleIcons" src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="navbar-right col-4nav">
                        <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}><img className="rightIcons" id="logout" src={logouticon} alt="Log Out" /></NavLink>
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

//https://css-tricks.com/cascading-svg-fill-color/

//Also, please keep in mind that you cant change SVG details with CSS if you load it as an `<image>`. 
//I strongly recommend you check out this StackOverflow thread as it does a fantastic job at breaking 
//down the differences between SVG types
//https://stackoverflow.com/questions/22252472/change-svg-color

//https://codepen.io/anon/pen/JzmmWP


/*



            <React.Fragment>
                <div className="navbar">
                    <div className="navbar-left">
                        <NavLink className="navlink" to="/trails"><ListTrailsIconSVG width={50} /></NavLink>
                        <NavLink className="navlink" to="/create"><AddTrailIconSVG width={50} /></NavLink>
                    </div>
                    <div className="navbar-middle">
                        <NavLink id="trailtimelogo" to="/"><img src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="navbar-right">
                        <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}><LogOutIconSVG /></NavLink>
                    </div>
                </div><br /><br /><br />
            </React.Fragment>







//////////////////////////////
<div class="navbar">
  <div class="navbar-left">
    <image class="link" />
    <image class="link" />
    <image class="link" />
  </div>
  <div class="navbar-left">
    <image class="link" />
    <image class="link" />
    <image class="link" />
  </div>
</div>


.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}

.navbar-left {
  float: left;
}

.navbar-right {
  float: right;
}

.navbar-left {
  padding-top: 10px;
  padding-bottom: 10px;
}

.navbar-left > .link {
  margin-right: 10px;
}
*/