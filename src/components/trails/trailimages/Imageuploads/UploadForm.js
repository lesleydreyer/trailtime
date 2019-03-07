import React from 'react';
import { validateImageFiles } from './validation';

class UploadForm extends React.Component {
    state = {
        photoFiles: null
    }
    handleImageSelect(event) {
        const { files } = event.target;//name, type,
        const photoFiles = Array.from(files);
        const errors = validateImageFiles(photoFiles);
        if (errors.length) {
            return alert(`The following errors ocurred:\n\n${errors.join('\n')}`);
        } else {
            // const newState = {};
            // newState[event.target.name] = photoFiles;
            this.setState({ photoFiles: files });
        }
    }

    onSubmit(event) {
        // debugger
        event.preventDefault();
        const formData = new FormData();
        console.log('PHOTOS', this.state.photoFiles);
        formData.append('name', 'Test name');
        if (this.state.photoFiles) {
            //  Object.keys(this.state.photoFiles)
            //.forEach((fileKey, index) => formData.append(`photo${index}`, this.state.photoFiles[fileKey]));
            formData.append('photo1', this.state.photoFiles[0]);
            this.props.handleFormSubmit(formData);
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <label htmlFor="photos">Upload One or More Images</label>
                    <input type="file" id="photos" name="photos" onChange={this.handleImageSelect.bind(this)} />
                </div>
                <input type="submit" />
            </form>
        );
    }
}

export default UploadForm;