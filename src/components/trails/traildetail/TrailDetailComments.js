import React from 'react';
import './index.css';
import TrailCommentsForm from './TrailCommentsForm';
//import { connect } from 'react-redux';

const TrailDetailComments = () => {
    return (
        <React.Fragment>
            <h3>Comments</h3>
            <p>list of comments</p>
            <p>form to add message</p>
            <TrailCommentsForm />
        </React.Fragment>
    );
}

export default TrailDetailComments;
/*class CommentList extends Component {
    renderComments() {
        return this.props.comments.map(comments => {
            return <li key={comment}>{comment}</li>
        })
    }
    render() {
        return (
            <div>
                <h2>Comment List</h2>
                <ul>{this.renderComments()}</ul>
            </div>
        );
    }
}*/