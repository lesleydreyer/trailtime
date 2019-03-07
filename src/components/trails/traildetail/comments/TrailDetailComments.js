import React from 'react';
import { connect } from 'react-redux';
import TrailCommentsForm from './TrailCommentsForm';
import TrailCommentsList from './TrailCommentsList';
import AuthProtectedComponent from '../../../auth/authProtectedComponent';
import { createComment, getComments, deleteComment } from '../../commentActions';
import './comments.css';
//import cuid from 'cuid';


class TrailDetailComments extends React.Component {
    componentDidMount() {
        //TODO const trailId = this.props.trail.id 
        // this is fake data for now, need to change when backend works
        this.props.getComments({
            jwt: this.props.jwt,
            trailId: '3'
        })
    }

    onCommentDelete = () => {
        const trailId = this.props.trail.id;
        //const commentId = this.props.comment.id;
        this.props.dispatch(
            deleteComment({
                jwt: this.props.jwt,
                trailId: this.props.trail.id,
                commentId: this.props.comment.id
            })
        ).then(() => {
            alert('comment deleted.');
            this.props.history.push(`/detail/${trailId}`);
        });
    }

    onCommentFormSubmit = (values) => {
        const trailId = this.props.trail.id;
        this.props
            .createComment({ comment: values, trailId: trailId, jwt: this.props.jwt })
            .then(createdComment => {
                alert(`comment '${createdComment.comment}' created.`);
                this.props.history.push(`/detail/${trailId}`);
            })
    }

    /*
        state = {
            comment: ''
        };
    
        addComment = (event) => {
            const commentText = JSON.stringify(event.comment)
            const _id = cuid();
            this.props.saveComment({ commentText, _id })
            this.setState({ comment: '' });
        }*/


    render() {
        const { comments } = this.props;
        return (
            <React.Fragment>
                <h3>Comments</h3>
                <TrailCommentsForm onSubmit={this.onCommentFormSubmit} />
                <TrailCommentsList comments={comments} />
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = {
    getComments, createComment
};

const mapStateToProps = state => ({
    jwt: state.auth.jwt
});

export default AuthProtectedComponent(connect(mapStateToProps, mapDispatchToProps)(TrailDetailComments));
