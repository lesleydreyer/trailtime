import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css';

const TrailCreateForm = (props) => {
    return (
        <form id='trail-create-form' onSubmit={props.handleSubmit}>
            <label htmlFor="trailName">Trail Name</label> <br />
            <Field name="trailName" component='input' placeholder="name of trail" /> <br />
            <label htmlFor="trailRating">Trail Rating</label> <br />
            <Field name="trailRating" component='input' placeholder="rating of trail" /> <br />
            <label htmlFor="trailLocation">Trail Location</label> <br />
            <Field name="trailLocation" component='input' placeholder="description of trail" /> <br />
            <label htmlFor="trailDescription">Trail Description</label> <br />
            <Field name="trailDescription" component='input' placeholder="description of trail" /> <br />
            <label htmlFor="trailImage">Trail Image</label> <br />
            <Field name="trailImage" component='input' placeholder="url for trail image" /> <br />
            <button type="submit">Submit Trail</button>
        </form>
    )
}

export default reduxForm({
    form: 'createtrail'
})(TrailCreateForm)