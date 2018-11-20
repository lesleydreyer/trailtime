import React from 'react';
import { connect } from 'react-redux';
import TrailCreateForm from './TrailCreateForm2';
import cuid from 'cuid';

class TrailCreatePage extends React.Component {

    onFormSubmit = (values) => {
        this.props.dispatch({
            type: 'CREATE_TRAIL',
            trailName: values.trailName,
            trailRating: values.trailRating,
            trailLocation: values.trailLocation,
            trailId: cuid()
        });
        alert(`${values.trailName} ${values.trailRating} ${values.trailLocation} trail created`);
        this.props.history.push('/trails');
    }

    render() {
        return (
            <TrailCreateForm onSubmit={this.onFormSubmit} />
        )
    }
}

export default connect()(TrailCreatePage);