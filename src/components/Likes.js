import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Likes = ({
    likesCount,
    handleLikeClick
}) => (
        <div className="col-sm-6 bg-white mt-2 font-weight-bold d-inline-block" style={{cursor : 'pointer'}}>
            <span onClick={handleLikeClick}>
                <span className="fa fa-2x fa-thumbs-up text-primary pr-2" />
                <span>{likesCount}</span>   
            </span>
        </div>
    );

export default Likes;
   