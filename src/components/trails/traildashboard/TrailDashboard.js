import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrailList from '../traillist/TrailList';
import { getTrails } from '../trailActions';

export class TrailDashboard extends Component {
    componentDidMount() {
        if(this.props.auth.jwt !== null){
        this.props.getTrails({
            jwt: this.props.auth.jwt//this comes from mapStateToProps below
        });}
    }

    render() {
        const { trails, auth } = this.props;//these come from mapStateToProps below
        return (
            <div>
                {/*ternary operator - if jwt not there then login, otherwise continue to show trails*/
                (this.props.auth.jwt === null) ?
                <Link to='/login'><h2>Log in to view trails > </h2></Link>
                :    
                <div>    
                <TrailList /*traildashboard and traillist do the same thing pretty much but kept both in case end up doing more things in the future with a dashboard*/
                    trails={trails} auth={auth}
                /><br /><br />
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    trails: state.trail.trailList,
    auth: state.auth
});

const mapDispatchToProps = {
    getTrails
}


export default connect(mapStateToProps, mapDispatchToProps)(TrailDashboard);