import React from 'react';
import { connect } from 'react-redux';
import { getTrail } from '../../trailActions';
import AuthProtectedComponent from '../../../auth/authProtectedComponent';
import { withRouter } from 'react-router-dom';
//import ImageApp from './Imageuploads/ImageApp';


class TrailImagesGrider extends React.Component {
    state = { file: null };

    componentDidMount() {
        this.props.dispatch(
            getTrail({
                jwt: this.props.jwt,
                trailId: this.props.match.params.id
            })
        )
    }

    onFileChange(event) {
        this.setState({ file: event.target.files })
        console.log(event.target.files)
    }


    renderContent = (trail) => {
        if (trail) {
            return (
                <React.Fragment>
                    <h3>Upload Pictures for {trail.trailName}</h3>
                    <form>
                        <input
                            onChange={this.onFileChange.bind(this)}
                            type="file"
                            multiple
                            accept="image/*" />
                    </form>
                </React.Fragment>
            );
        } else {
            return <p>Loading trail...</p>
        }
    }

    render() {
        const { trail } = this.props;
        return (
            <div>
                {this.renderContent(trail)}
            </div>
        )
    }
}
//<a href="../../zzzOldCloudinary/cloudinary.html">upload with widget</a>
//export default connect(mapStateToProps)(TrailImagesGrider);

const mapStateToProps = (state) => ({
    jwt: state.auth.jwt,
    trail: state.trail.trailDetails
});

export default withRouter(AuthProtectedComponent(
    connect(mapStateToProps)(TrailImagesGrider)));