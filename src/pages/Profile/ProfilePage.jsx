import React from 'react';

const ProfilePage = (props) => {
    return (
        <div>
            ProfilePage
            <br/>
            {props.authUserData.name}
            <br/>
            <br/>
            <button onClick={props.logout}>Logout</button>
        </div>
    );
};

export default ProfilePage;