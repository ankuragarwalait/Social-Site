import React, { Component } from 'react';

export default class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enableAddComment: false,
            commentText: ''
        }
        this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.handlePostComment = this.handlePostComment.bind(this);
    }
    
    handleCommentTextChange(e) {
        this.setState({
            commentText: e.target.value
        });
    }

    handleAddComment() {
        this.setState({
            enableAddComment: true
        })
    }

    handlePostComment() {
        this.props.handlePostComment(this.state.commentText,this.props.id);
        this.setState({
            commentText: '',
            enableAddComment: false
        });
    }
    render() {
        return this.state.enableAddComment ? 
        (
            <div className="pt-2 col-sm-12">
                <input className="w-100 pl-1 mb-2" placeholder="Write comment here..." onChange={this.handleCommentTextChange}/>
                <button className="btn btn-primary" onClick={this.handlePostComment}>Comment</button>
            </div>
            
        ) : 
        (
            <div className="col-sm-6 text-right mt-2 p-2">
                <span className="text-primary" onClick={this.handleAddComment} style={{cursor : 'pointer'}}>Add Comment</span>
            </div>
        );
    }
}