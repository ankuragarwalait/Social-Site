import React, { Component } from 'react';
import PostMessage from '../PostMessage';
import UserPost from '../UserPost';
import {connect} from 'react-redux';
import * as actions from '../../actions';

let FeedContainer = ({
    posts,
    handlePostSubmit,
    handleLocationClick,
    handleLikeClick,
    handlePostComment,
    userData,
    comments
}) => (
    <div>
        <PostMessage handlePostSubmit={handlePostSubmit} handleLocationClick={handleLocationClick}/>
        {posts.map((postData) => 
            <UserPost key={postData.id} 
                      {...postData} 
                      userData={userData} 
                      comments={comments[postData.id] ? comments[postData.id] : []}
                      handleLikeClick={handleLikeClick}
                      handlePostComment={handlePostComment}/>)}
    </div>
)

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        userData: state.userData,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlePostSubmit: (postText)=> {
            dispatch(actions.addPost(postText, ownProps.location));
        },
        handleLocationClick: (position) => {
            let locationData = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            dispatch(actions.addLocation(locationData));
        },
        handleLikeClick: (id) => {
            dispatch(actions.incrementLikes(id));
        },
        handlePostComment: (commentText, id) => {
            dispatch(actions.addComment(commentText, id))
        }
    }
}

export default FeedContainer = connect(mapStateToProps,mapDispatchToProps)(FeedContainer)