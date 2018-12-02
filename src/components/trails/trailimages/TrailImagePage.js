import React from 'react';
import { connect } from 'react-redux';
//import ImageApp from './Imageuploads/ImageApp';
import ImageApp from '../trailimages/Imageuploads/ImageApp'

const mapStateToProps = (state) => ({
    trail: state.trail.details
});
class TrailImagePage extends React.Component {
    render() {
        return (
            <div>
                <h3>Upload Your Pictures</h3>
                <ImageApp />
            </div>
        )
    }
}
//<a href="../../zzzOldCloudinary/cloudinary.html">upload with widget</a>
export default connect(mapStateToProps)(TrailImagePage);