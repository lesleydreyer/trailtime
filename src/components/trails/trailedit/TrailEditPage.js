import React from 'react';
import { connect } from 'react-redux';
import TrailEditForm from './TrailEditForm';
import { getTrail, updateTrail } from '../trailActions';
import AuthProtectedComponent from '../../auth/authProtectedComponent';


export class TrailEditPage extends React.Component {

    componentDidMount() {
        this.props.getTrail({
            jwt: this.props.jwt,
            trailId: this.props.match.params.id
        })
    }

    onEditTrailFormSubmit = (values) => {
        /* instead of this --- this.props.dispatch(updateTrail({ --- can skip the dispatch if you do mapToDispatchToProps at bottom
        */
        this.props
            .updateTrail({
                trailId: this.props.match.params.id,
                trail: values,
                jwt: this.props.jwt
            })
            .then(() => {
                alert(`Trail updated.`);
                this.props.history.push('/trails');
            })
    }


    render() {
        return (
            <TrailEditForm onSubmit={this.onEditTrailFormSubmit} />//or can do this.onEditTrailFormSubmit.bind(this) and up top onEditTrailFormSubmit(values)
        )
    }
}

const mapStateToProps = (state) => ({
    jwt: state.auth.jwt,
    trail: state.trail.trailDetails
});
const mapDispatchToProps = {
    getTrail,
    updateTrail
};

export default AuthProtectedComponent(
    connect(mapStateToProps, mapDispatchToProps)(TrailEditPage));