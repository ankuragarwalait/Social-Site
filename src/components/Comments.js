import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Comments = ({
   comments
}) => (
        <div>
            <h5>Comments:</h5>
            <hr/>
            {
                comments.map(commentText => {
                    return <div><span>{commentText}</span><hr/></div>
                })
            }
        </div>
    );

export default Comments;
   