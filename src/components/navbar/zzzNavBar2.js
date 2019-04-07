import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { logout } from '../auth/authActions';
import logo from '../home/images/logo2.svg';
//import '../app/common/floatgrid.css';
import AddTrailIconSVG from './icons/AddTrailIcon';
import ListTrailsIconSVG from './icons/ListTrailsIcon';
import LogOutIconSVG from './icons/LogOutIcon';
//https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
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
                        <ul>
                            <li>
                                <NavLink className="navlink" to="/login">Log In to view trails</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-middle col-4nav">
                        <NavLink id="trailtimelogo" to="/"><img src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="navbar-right col-4nav">
                        <ul>
                            <li>
                                <NavLink className="navlink" to="/login">Log In</NavLink>
                            </li>
                            <li>
                                <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                </div><br /><br /><br />
            </React.Fragment>
        ) : null;

        //LOGGED IN LINKS
        const authLinks = this.props.isLoggedIn ? (
            <React.Fragment>
                <div className="navbar">
                    <div className="navbar-left col-4nav">
                        <NavLink className="navlink" to="/trails"><ListTrailsIconSVG width={50} /></NavLink>
                        <NavLink className="navlink" to="/create"><AddTrailIconSVG width={50} /></NavLink>
                    </div>
                    <div className="navbar-middle col-4nav">
                        <NavLink id="trailtimelogo" to="/"><img src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="navbar-right col-4nav">
                        <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}><LogOutIconSVG /></NavLink>
                    </div>
                </div><br /><br /><br />
            </React.Fragment>
            /*<React.Fragment>
                <div className="navbar">
                    <div className="col-4"><span><div className="leftlinks">
                        <NavLink className="navlink" to="/trails"><ListTrailsIconSVG preserveAspectRatio="xMinYMin meet" className="img" width="100%" height="100%" /></NavLink>
                        <NavLink className="navlink" to="/create"><AddTrailIconSVG preserveAspectRatio="xMinYMin meet" className="img" width="100%" height="100%" /></NavLink>
                    </div></span></div>
                    <div className="col-4">
                        <NavLink id="trailtimelogo" to="/"><img className="img" src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="col-4">
                        <NavLink className="navlink" to="/" onClick={this.logout.bind(this)}><LogOutIconSVG /></NavLink>
                    </div>
                </div><br /><br /><br />
            </React.Fragment>*/
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