import React from 'react';

export const WelcomeContainer = (props) => {
    return (
        <div className="bg-white p-2">
            <h3>Welcome!</h3>
            <hr/>
            <div>
                This is an application created in React with redux.<br/><br/>
                It uses concepts of react along with common redux store.<br/><br/> 
                User can add post with location and it can be like and commented upon. 
            </div>
        </div>

    )
}