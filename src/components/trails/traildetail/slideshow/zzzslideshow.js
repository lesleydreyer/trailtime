import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getSelectedPhoto } from '../../photoActions';
import './slideshowgallery.css';

//adapted from https://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga

class SlideshowGallery extends React.Component {
    //constructor(props) {
    //super(props);
    //this.props.getSelectedPhoto();//({ type: 'GET_SELECTED_PHOTO' })
    state = { selectedImage: null }
    //console.log('CONSPROPS', props)
    //}

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
        const { photoList, selectImage, selectedImage, getSelectedPhoto } = this.props;
        console.log('photoLIST', photoList)
        console.log(selectedImage)
        if (selectImage) {
            const si = Object.values(selectImage);
            console.log('si', si)
        }
        //this.setState(photos[0]);
        if (this.props.photosLoading) { return <p>Loading...</p> }
        return (
            <div className="container-image-gallery">
                <div className="big-gallery-image">
                    <div>
                        <img src={"https://images.unsplash.com/photo-1551803021-7ee99e8b3f6e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ2MjE3fQ"} alt="testpic" />
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
    selectImage: state.photos.selectImage,
    jwt: state.auth.jwt,
    photosLoading: state.photosLoading
});

const mapDispatchToProps = {
    getPhotos, getSelectedPhoto
};


export default connect(mapStateToProps, mapDispatchToProps)(SlideshowGallery);

/*class SlideshowGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            images: []
        }
    }

    renderPhotosJsonTypicode = () => {
        const trailPhotos = this.props.photos.photoList;
        if (trailPhotos.length > 0) {
            return trailPhotos.map(photo => {
                if (photo) {
                    return (
                        <div className="photo">
                            <li key={photo.id}>
                                <img src={photo.thumbnailUrl} />
                            </li>
                        </div>);
                } return
            });
        } else {
            return <li>No Photos</li>
        }
    }

    renderPhotosUnsplash = () => {
        const trailPhotos = this.props.photos.photoList;
        if (trailPhotos.length > 0) {
            return trailPhotos.map(photo => {
                if (photo) {
                    return (
                        <div className="mySlides">
                            <img src={photo.urls.small} className="width100" />
                        </div>);
                } return
            });
        } else {
            return <li>No Photos</li>
        }
    }

    renderThumbnails = () => {
        const trailPhotos = this.props.photos.photoList;
        if (trailPhotos.length > 0) {
            return trailPhotos.map(photo => {
                if (photo) {
                    return (
                        <div className="column">
                            <img src={photo.urls.thumb} className="width100" onClick={this.currentSlide(1)} />
                        </div>);
                } return
            });
        } else {
            return <li>No Photos</li>
        }
    }

    render() {
        const { photos } = this.props;
        console.log('phoostslids', photos)
        return (
            <div className="container">
                {this.renderPhotosUnsplash()}
                <a className="prev" onClick={this.plusSlides(1)}>previous</a>
                <a className="next" onClick={this.plusSlides(-1)}>next</a>
                <div className="row">{this.renderThumbnails()}</div>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    photos: state.photos,
    jwt: state.auth.jwt
});
export default connect(mapStateToProps)(SlideshowGallery);*/