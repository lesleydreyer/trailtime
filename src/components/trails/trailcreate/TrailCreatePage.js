import React from 'react';
import { connect } from 'react-redux';
import { API } from '../../../config';
import TrailCreateForm from './TrailCreateForm';
import { createTrail } from '../trailActions';
import AuthProtectedComponent from '../../auth/authProtectedComponent';
class TrailCreatePage extends React.Component {

    onCreateTrailFormSubmit = (values) => {
        // UNCOMMENT TO GET BACK CREATE FUNCTIONALITY
        console.log('VALUES', values.trailImage)//.FileList)
        this.props.dispatch(
            createTrail({ trail: values, jwt: this.props.jwt }))
            .then(trail => {
                //alert(`Trail ${trail.trailName} created.`);
                //this.props.history.push('/trails');
                //debugger
                fetch(`${API}/images/${trail.id}/image-upload`, {
                    //fetch(`${API}/images/${this.props.match.params.id}/image-upload`, {
                    //fetch(`http://localhost:8080/api/images/image-upload`, {
                    method: 'POST',
                    body: values
                })
                    .then(res => {
                        debugger;
                        if (!res.ok) {
                            return Promise.reject(res);
                        }
                        console.log('res.json', res.json)
                        return res.json();
                    })
                    .then(images => {
                        debugger;
                        console.log('images', images)
                        this.setState({
                            uploading: false,
                            images
                        });
                    })
                    .catch(err => {
                        debugger;
                    })
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