import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
        // Request for images tagged moxie       
        axios.get('https://res.cloudinary.com/dskazcbzu/image/list/moxie.json')
            .then(res => {
                console.log('res.data.res', res.data.resources);
                this.setState({ gallery: res.data.resources });
            });
    }
    uploadWidget() {
        // . . .
    }
    render() {
        return (
            <div className="main">
                <h1>Galleria</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="dskazcbzu">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" rel="noopener noreferrer" href={`https://res.cloudinary.com/dskazcbzu/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}

//render(<Main />, document.getElementById('container'));
//<Image publicId="12928355_10154091416557292_4916283250721400428_n.jpg" >

//</Image>