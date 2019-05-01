import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';

//application logic - code the library/framework provides
export const TrailCreateForm = (props) => {
    //busisness logic - code  you provide is what you would test since the application logic is already tested by the library or framework assumingly
    return (
        <form id='trail-create-form' onSubmit={props.handleSubmit}>
            <label htmlFor="trailName">Trail Name</label> <br />
            <Field id="trailNameField" name="trailName" component='input' placeholder="Name of Trail" /> <br />
            <label htmlFor="trailRating">Trail Rating</label> <br />
            <Field name="trailRating" component='input' placeholder="Easy, Medium or Hard" /> <br />
            <label htmlFor="trailLocation">Trail Location</label> <br />
            <Field name="trailLocation" component='input' placeholder="Location of Trail" /> <br />
            <label htmlFor="trailDescription">Trail Description</label> <br />
            <Field name="trailDescription" component='textarea' rows='4' placeholder="Description of Trail" /> <br />
            <label htmlFor="trailImage">Trail Image</label> <br />
            <Field name="trailImage" component='input' placeholder="Image URL (right click to copy address)" /> <br />
            <button type="submit">Submit Trail</button>
        </form>
    )
}

//application logic
export default reduxForm({
    form: 'createtrail'
})(TrailCreateForm)