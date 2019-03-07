import React, { Component } from 'react';
import Images from './ImagePreview';
import UploadForm from './UploadForm';
import { connect } from 'react-redux';
import { API } from '../../../../config';
import './ImageApp.css';
import { getTrail } from '../../trailActions';
import AuthProtectedComponent from '../../../auth/authProtectedComponent';
import { withRouter } from 'react-router-dom';
class ImageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            uploading: false,
            error: null,
            images: []
        };
    }

    componentDidMount() {
        //debugger
        this.props.dispatch(
            getTrail({
                jwt: this.props.jwt,
                trailId: this.props.match.params.id
            })
        ).then(() => {
            fetch(`${API}/images/${this.props.match.params.id}/wake-up`)
                .then(res => {
                    if (res.ok) {
                        this.setState({ loading: false });
                    } else {
                        this.onServerError(res);
                    }
                })
                .catch(err => this.onServerError(err));
        });
    }

    onServerError(err) {
        this.setState({
            loading: false,
            error: err
        });
        console.error('[ERROR]', err);
    }

    handleFormSubmit = formData => {
        // debugger;
        this.setState({ uploading: true });
        console.log('trail', this.props.trail)
        console.log('formdata', formData)//.values())
        console.log('state', this.state)
        //const data = Object.entries(params)
        //  .map((pair) => `${pair[0]}=${pair[1]}`)
        //.join('&');
        fetch(`${API}/images/${this.props.match.params.id}/image-upload`, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then(res => {
                console.log('SUCCESS UPLOAD', res)
                if (!res.ok) {
                    return Promise.reject(res);
                }
                return res.json();
            })
            .then(images => {
                this.setState({
                    uploading: false,
                    images
                });
            })
            .catch(err => {
                console.log('FAIL UPLOAD', err);
                this.onServerError(err);
            });
    };

    renderContent() {
        const { loading, uploading, error, images } = this.state;

        if (loading) {
            return <h1>Loading ...</h1>;
        } else if (uploading) {
            return <h1>Uploading ...</h1>;
        } else if (error) {
            return <h1>There was a problem with the server.</h1>;
        } else if (images && images.length > 0) {
            return <Images images={images} />;
        } else {
            return <UploadForm handleFormSubmit={this.handleFormSubmit.bind(this)} />;
        }
    }

    render() {
        return <div className="container">{this.renderContent()}</div>;
    }
}

const mapStateToProps = (state) => ({
    jwt: state.auth.jwt,
    trail: state.trail.trailDetails
});

export default withRouter(AuthProtectedComponent(
    connect(mapStateToProps)(ImageApp)));