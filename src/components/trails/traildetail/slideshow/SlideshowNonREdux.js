import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getSelectedPhoto } from '../../photoActions';
import './slideshowgallery.css';


const flickrImages = [
    'https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg',
    'https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg',
    'https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg',
    'https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg',
    'https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg',
];
class SlideshowGallery extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            images: flickrImages,
            selectedImage: flickrImages[0],
        };
    }

    componentDidMount() {
        const UNSPLASH_CLIENT_ID = `${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`;
        const API = "https://api.unsplash.com";

        fetch(`${API}/photos?albumId=5`,
            {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    "Content-type": "application/json",
                    Authorization: `Client-ID ${UNSPLASH_CLIENT_ID}`
                }
            })
            .then((res) => {
                return res.json()
                    .then((json => {
                        const images = json.map(image => {
                            return image.urls.thumb
                        })
                        this.setState({ images, selectedImage: images[0] })
                    }))
            })
    }

    handleThumbClick(selectedImage) {
        this.setState({ selectedImage });
    }


    render() {
        const { images, selectedImage } = this.state;

        // if (this.props.photosLoading) { return <p>Loading...</p> }
        return (
            <div className="container-image-gallery">
                <div className="big-gallery-image">
                    <div>
                        <img src={selectedImage} alt="testpic" />
                    </div>
                </div>
                <div className="small-images-scroller">
                    {images && images.map((photo, index) => (
                        <div key={index} onClick={this.handleThumbClick.bind(this, photo)}>
                            <img src={photo} alt="testing" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default (SlideshowGallery)