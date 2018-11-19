import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";

//const TrailEditForm = ({ trail }) => {
const TrailEditForm = (props) => {
    const { handleSubmit, load, pristine, reset, submitting } = props

    return (
        <form id='trail-edit-form' onSubmit={props.handleSubmit}>
            <label htmlFor="trailName">Trail Name</label> <br />
            <Field name="trailName" component='input' placeholder="name of trail" /> <br />
            <label htmlFor="trailRating">Trail Rating</label> <br />
            <Field name="trailRating" component='input' placeholder="rating of trail" /> <br />
            <label htmlFor="trailLocation">Trail Location</label> <br />
            <Field name="trailLocation" component='input' placeholder="description of trail" /> <br />
            <label htmlFor="trailDescription">Trail Description</label> <br />
            <Field name="trailDescription" component='input' placeholder="description of trail" /> <br />
            <label htmlFor="trailPictures">Trail Pictures</label> <br />
            <button type="trailPictures">Upload Pictures</button><br />
            <button type="submit">Submit Trail</button>
        </form>
    )
}

const uninitializedTrailEditForm = reduxForm({
    form: 'trailedit'
})(TrailEditForm)

const mapInitialFormValues = state => ({
    initialValues: state.trail.details
})

export default connect(mapInitialFormValues)(uninitializedTrailEditForm);