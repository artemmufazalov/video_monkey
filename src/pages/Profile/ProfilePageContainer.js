import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

import ProfilePage from "./ProfilePage";
import {logout} from "../../BLL/reducers/profileReducer";

const ProfilePageContainer = (props) => {

    document.title = "Профиль - Video Monkey";

    if (!props.isLoggedIn) {
        return (
            <Redirect to={"/login"}/>
        );
    }

    if (props.isLoggedIn && !props.authUserData.isVerified) {
        return (
            <Redirect to={`/login/verify`}/>
        );
    }

    return (
        <div>
            <ProfilePage authUserData={props.authUserData}
                         logout={props.logout}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.userProfile.isLoggedIn,
    authUserData: state.userProfile.authUserData
})

export default compose(connect(mapStateToProps, {
    logout
}))(ProfilePageContainer);