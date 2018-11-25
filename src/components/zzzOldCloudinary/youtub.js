import React from 'react';
import axios from 'axios';

class Youtub extends React.Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('https://api.cloudinary.com/v1_1/dskazcbzu/upload/image', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress ' + Math.round(progressEvent.loaded / progressEvent.total) * 100 + '%')
            }
        })
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.fileSelectedHandler} multiple />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        )
    }
}

export default Youtub;