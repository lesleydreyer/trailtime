import React from 'react';
import { Image } from 'cloudinary-react';//{CloudinaryContext,, Image}

class Cloudinary extends React.Component {
    render() {
        return (
            <div>
                <h1>Upload Your Trail Pictures</h1>
                <Image cloudName="dskazcbzu" publicId="sample" width="300" crop="scale" />
            </div>
        );
    }
}
export default Cloudinary;

/*
                // Or for more advanced usage:
                // import {CloudinaryContext, Transformation} from 'cloudinary-react';
                <CloudinaryContext cloudName="demo">
                    <Image publicId="sample">
                        <Transformation width="200" crop="scale" angle="10"/>
                    </Image>
                </CloudinaryContext>
*/