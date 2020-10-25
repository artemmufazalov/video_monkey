import React from 'react';

const ProfilePage = (props) => {
    return (
        <div>
            <h1>ProfilePage</h1>
            <br/>
            <br/>
            Имя: {props.authUserData.name}
            <br/>
            Email: {props.authUserData.email}
            <br/>
            <br/>
            <button onClick={props.logout}>Выйти</button>
        </div>
    );
};

export default ProfilePage;