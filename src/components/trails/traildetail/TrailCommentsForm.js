import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


const TrailCommentsForm = (props) => {
    //class TrailCommentsForm extends Component {
    //<form onSubmit={props.handleSubmit}>
    return (
        <form >
            <Field name="comment" type="text" component='textarea' rows={5} />
            <button>Add Comment</button>
        </form>
    );
}

export default reduxForm({
    form: 'comment'
})(TrailCommentsForm)