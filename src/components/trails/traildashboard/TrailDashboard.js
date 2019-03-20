import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrailList from '../traillist/TrailList';
import { getTrails } from '../trailActions';

class TrailDashboard extends Component {
    componentDidMount() {
        this.props.getTrails({
            jwt: this.props.jwt
        });
    }

    render() {
        const { trails } = this.props;
        return (  
            <div>
                <p>Looking for adventure? Explore the list of trails below, and add your own trails to the list!</p>
                <input type="search" placeholder="Search by Location"></input>
                <TrailList
                    trails={trails}
                /><br /><br />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    trails: state.trail.trailList,
    jwt: state.auth.jwt
});

const mapDispatchToProps = {
    getTrails
}


export default connect(mapStateToProps, mapDispatchToProps)(TrailDashboard);