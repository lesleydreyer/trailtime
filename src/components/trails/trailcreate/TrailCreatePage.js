import React from 'react';
import { connect } from 'react-redux';
import TrailCreateForm from './TrailCreateForm';
import { createTrail } from '../trailActions';
import AuthProtectedComponent from '../../auth/authProtectedComponent';
class TrailCreatePage extends React.Component {

    onCreateTrailFormSubmit = (values) => {
        // UNCOMMENT TO GET BACK CREATE FUNCTIONALITY
        this.props.dispatch(
            createTrail({ trail: values, jwt: this.props.jwt }))
            .then(createdTrail => {
                alert(`Trail ${createdTrail.trailName} created.`);
                //this.props.history.push('/trails');
            })

        console.log('this.props', this.props)
        debugger;
        fetch(`http://localhost:8080/api/images/image-upload`, {
            method: 'POST',
            body: values
        })
            .then(res => {
                debugger;
                if (!res.ok) {
                    return Promise.reject(res);
                }
                return res.json();
            })
            .then(images => {
                debugger;
                this.setState({
                    uploading: false,
                    images
                });
            })
            .catch(err => {
                debugger;
            });
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