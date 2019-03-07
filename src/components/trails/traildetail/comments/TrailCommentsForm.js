import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../commentActions';


const TrailCommentsForm = (props) => {
    return (
        <form id="comment-form" onSubmit={props.handleSubmit}>
            <Field name="comment" type="text" component='textarea' rows={5} /><br />
            <button>Submit Comment</button>
        </form>
    );
}

export default connect(null, actions)(reduxForm({
    form: 'comment'
})(TrailCommentsForm))