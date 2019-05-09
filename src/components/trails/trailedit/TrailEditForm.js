import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
import './traileditform.css';

export const TrailEditForm = (props) => {
    return (
        <form id='trail-edit-form' onSubmit={props.handleSubmit}>
            <label htmlFor="trailName">Trail Name</label> <br />
            <Field name="trailName" component='input' placeholder="name of trail" /> <br />
            <label htmlFor="trailRating">Trail Rating</label> <br />
            <Field name="trailRating" component='input' placeholder="rating of trail" /> <br />
            <label htmlFor="trailLocation">Trail Location</label> <br />
            <Field name="trailLocation" component='input' placeholder="location of trail" /> <br />
            <label htmlFor="trailDescription">Trail Description</label> <br />
            <Field name="trailDescription" component='textarea' rows='4' placeholder="description of trail" /> <br />
            <label htmlFor="trailImage">Trail Image</label> <br />
            <Field name="trailImage" component='input' placeholder="Image URL (right click copy address)" /> <br />
            <button type="submit">Submit Updates</button>
        </form>
    )
}

const uninitializedTrailEditForm = reduxForm({
    form: 'trailedit'
})(TrailEditForm)

const mapInitialFormValues = state => ({
    initialValues: state.trail.trailDetails
})

export default connect(mapInitialFormValues)(uninitializedTrailEditForm);