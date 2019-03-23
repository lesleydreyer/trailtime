import React from 'react';
import { connect } from 'react-redux';
import TrailCreateForm from './TrailCreateForm';
import { createTrail } from '../trailActions';
import AuthProtectedComponent from '../../auth/authProtectedComponent';
export class TrailCreatePage extends React.Component {

    onCreateTrailFormSubmit = (values) => {
        this.props.dispatch(
            createTrail({ trail: values, jwt: this.props.jwt })
        ).then(trail => {
            alert(`Trail ${trail.trailName} created.`);
            this.props.history.push('/trails');
        })
    }


    render() {
        return (
            <TrailCreateForm onSubmit={this.onCreateTrailFormSubmit} />
        )
    }
}

const mapStateToProps = state => ({
    jwt: state.auth.jwt,
    trail: state.trail.trailDetails
});

export default AuthProtectedComponent(connect(mapStateToProps)(TrailCreatePage));