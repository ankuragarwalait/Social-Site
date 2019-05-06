import React, { Component } from 'react';
import { UserProfile } from './UserProfile';
import Since from 'react-since';
import PostLocation from './PostLocation';
import Likes from './Likes';
import AddComment from './AddComment';
import Comments from './Comments';

const UserPost = ({
    id,
    likes,
    postValue,
    timeStamp,
    userData,
    location,
    handleLikeClick,
    handlePostComment,
    comments
}) => (
        <div className="bg-white mt-2 p-2">
            <div className="clearfix pb-2 border-bottom">
                <div className="float-left">
                    <UserProfile {...userData} reverse="true"/>
                </div>
                <div className="float-right pt-3"><Since date={timeStamp}/></div>
            </div>
            <div className="mt-3">
                {postValue}
            </div>
            {location? <PostLocation location={location}/>: ''}
            <div className="row px-2 pb-2">
                <Likes likesCount={likes} handleLikeClick={() => handleLikeClick(id)}/> 
                <AddComment handlePostComment={handlePostComment} id={id}/>
            </div>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );

    export default UserPost
   