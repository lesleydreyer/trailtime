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
                <h1>TRAILS</h1><hr />
                <TrailList
                    trails=
                    {trails
                        /*
                        trails is what you call in TrailList, 
                        trailslist comes from above fake data*/}
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