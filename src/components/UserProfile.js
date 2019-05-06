import React from 'react';
export const UserProfile = ({
    name,
    avatar_url,
    reverse
}) => {
    return (
            <div className={'d-flex' + (reverse?' flex-row-reverse':'')}>
                <div className="px-2 pt-3">
                    <span className="username">{name}</span>
                </div>
                <div className="inset">
                    <img src={avatar_url}/>
                </div>
            </div>
    )
}