import React from 'react';
import { connect } from 'react-redux';
import TrailCreateForm from './TrailCreateForm';
import { createTrail } from '../trailActions'
import cuid from 'cuid';

class TrailCreatePage extends React.Component {

    createTrailFormSubmit = (values) => {
        this.props.dispatch(
            createTrail(values))
            .then(createdTrail => {
                alert(`Trail ${createdTrail.trailName} created.`);
                this.props.history.push('/trails');
            })
    }        /*this.props.dispatch({
            type: 'CREATE_TRAIL',
            trailName: values.trailName,
            trailRating: values.trailRating,
            trailLocation: values.trailLocation,
            trailId: cuid()
        });
        alert(`${values.trailName} ${values.trailRating} ${values.trailLocation} trail created`);
        this.props.history.push('/trails');
}*/

    render() {
        return (
            <TrailCreateForm onSubmit={this.createTrailFormSubmit} />
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(TrailCreatePage);