import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrailList from '../traillist/TrailList2';
import { deleteTrail } from '../../../redux/actions'

const mapStateToProps = (state) => ({
    trails: state.trail.list
});

const actions = {
    deleteTrail
}


class TrailDashboard extends Component {

    handleDeleteTrail = (trailId) => () => {
        this.props.deleteTrail(trailId);
    }

    render() {
        const { trails } = this.props;
        return (
            <div>
                <h1>TRAILS</h1><hr />
                <TrailList
                    deleteTrail={this.handleDeleteTrail}
                    trails=
                    {trails
                        /*trails is what you call in TrailList, 
                        trailslist comes from above fake data*/}
                /><br /><br />
            </div>
        );
    }
}


export default connect(mapStateToProps, actions)(TrailDashboard);