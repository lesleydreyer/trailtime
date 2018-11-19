import React from 'react';
import { connect } from 'react-redux';
import TrailEditForm from './TrailEditForm';


const mapStateToProps = (state, ownProps) => ({
    trail: state.trail.details
});
//const TrailEditPage = ({ trail }) => {
class TrailEditPage extends React.Component {
    onFormSubmit = (values) => {
        this.props.dispatch({
            type: 'UPDATE_TRAIL',
            trailName: values.trailName,
            trailRating: values.trailRating,
            trailLocation: values.trailLocation,
        });
        alert(`${values.trailName} ${values.trailRating} ${values.trailLocation} trail updated`);
        this.props.history.push('/trails');
    }

    render() {
        return (
            <TrailEditForm onSubmit={this.onFormSubmit} />
        )
    }
}

export default connect(mapStateToProps)(TrailEditPage);