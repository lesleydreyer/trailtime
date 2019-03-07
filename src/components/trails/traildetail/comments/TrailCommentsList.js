import React from 'react';
import { connect } from 'react-redux';
import './comments.css';
//import { getComments } from '../commentActions'

class TrailCommentsList extends React.Component {
    /*componentDidMount() {
        this.props.getComments({
            jwt: this.props.jwt
        });
    }
    componentDidUpdate() {
        { this.renderComments() }
    }*/
    renderComments = () => {
        //const commentsAry = [{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }, { id: 3, name: 'test3' }]
        const trailComments = this.props.comments.commentList;
        if (trailComments.length > 0) {//this.props.comments[0]) {
            return trailComments.map(comment => {//this.props.comments.map(comment => {
                // if (comment) {
                return (
                    <div className="comment">
                        <li key={comment.id}>
                            <div className="commentAuthor">{comment.email}: </div>
                            <div className="commentText">{comment.body}</div>
                        </li>
                    </div>);
                //} return
            });
        } else {
            return <li>No Comments</li>
        }
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {}
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //console.log('ownprop', state.comments.postId)
    return {
        comments: state.comments,
        //comments: state.comments.find(comment => comment.postId === 5),//ownProps.trailId),
        //commentsB: Object.values(state.comments),
        commentAuthor: state.auth.user.username,
        jwt: state.auth.jwt
    };
}
//const mapDispatchToProps = {
//    getComments
//}

export default connect(mapStateToProps)(TrailCommentsList);
   //return { user: state.users.find(user => user.id === ownProps.userId) };