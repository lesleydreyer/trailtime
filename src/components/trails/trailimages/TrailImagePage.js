import React from 'react';
import { connect } from 'react-redux';
import ImageApp from './Imageuploads/ImageApp';


const mapStateToProps = (state) => ({
    trail: state.trail.details
});
class TrailImagePage extends React.Component {
    render() {
        return (
            <div>
                <h3>Upload Your Pictures</h3>
                <ImageApp />
                <a href="../../zzzOldCloudinary/cloudinary.html">upload with widget</a>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TrailImagePage);