import React from 'react';

const User = ({user}) => (
    <div className="user-profile">
        <a href={user.html_url}>
            <img src={user.avatar_url} alt={user.name}/>
            <h4 className="user__name"> {user.name} </h4>
            <h5 className="user_username"> {user.login && `@${user.login}`} </h5>
        </a>
    </div>
);

export default User;