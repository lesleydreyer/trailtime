import React from 'react';
const SlideshowGalleryThumbs = props => {
    console.log(props)
    return (
        <div className="image-scroller">
            {this.props.photoList.map((image, index) => (
                <div key={index} >
                    <img src={image.urls.thumb} />
                </div>
            ))}
        </div>
    )
}
export default SlideshowGalleryThumbs