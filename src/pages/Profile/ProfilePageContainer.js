import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Redirect from "react-router-dom";

import ProfilePage from "./ProfilePage";

const ProfilePageContainer = (props) => {

    if (!props.isLoggedIn) {
        return (
            <Redirect to={"/login"}/>
        );
    }

    if (props.isLoggedIn && !props.isVerified) {
        return (
            <Redirect to={"/register/verify/submit"}/>
        );
    }

    return (
        <div>
            <ProfilePage/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.userProfile.isLoggedIn,
    isVerified: state.userProfile.user.isVerified
})

export default compose(connect(mapStateToProps, {}))(ProfilePageContainer);