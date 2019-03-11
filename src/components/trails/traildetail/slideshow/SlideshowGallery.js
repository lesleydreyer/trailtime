import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getSelectedPhoto } from '../../photoActions';
import './slideshowgallery.css';

//adapted from https://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga

class SlideshowGallery extends React.Component {



    componentDidMount() {//for editing purposes - only allow if user created trail, otherwise email creator changes instead
        this.props.getPhotos({
            jwt: this.props.jwt,
            trailId: '3'
        })
        //this.setState({ selectedImage: this.state.photoList.pop() })

    }
    handleThumbClick(selectedImage) {
        this.setState({ selectedImage });
    }


    render() {
        const { photoList, selectedImage, getSelectedPhoto } = this.props;
        console.log('photoLIST', photoList)
        console.log(selectedImage)
        let heroImage = null;
        if (selectedImage) {
            const si = Object.values(selectedImage);
            console.log('si', si)
            heroImage = selectedImage.urls.full
        }
        //this.setState(photos[0]);
        if (this.props.photosLoading) { return <p>Loading...</p> }
        return (
            <div className="container-image-gallery">
                <div className="big-gallery-image">
                    <div>
                        <img src={heroImage} alt="testpic" />
                    </div>
                </div>
                <div className="small-images-scroller">
                    {photoList && photoList.map((photo, index) => (
                        <div key={index} onClick={() => getSelectedPhoto(photo)}>
                            <img src={photo.urls.thumb} alt="testing" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    photoList: state.photos.photoList,
    selectedImage: state.photos.selectedImage,
    jwt: state.auth.jwt,
    photosLoading: state.photosLoading
});

const mapDispatchToProps = {
    getPhotos, getSelectedPhoto
};


export default connect(mapStateToProps, mapDispatchToProps)(SlideshowGallery);