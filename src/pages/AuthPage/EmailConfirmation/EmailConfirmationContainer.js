import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";

import EmailConfirmation from "./EmailConfirmation";
import {cancelRegistration, resendVerificationEmail, verifyUser} from "../../../BLL/reducers/profileReducer";

const EmailConfirmationContainer = React.memo((props) => {

    const hash = props.location.search.replace("?hash=", "");

    const {
        isRegistrationCancelSuccessful,
        isRegistrationCancelFetching,
        isConfirmationFetching,
        emailVerificationError,
        registrationCancelError,
        option,
        verifyUser,
        cancelRegistration,
        resendVerificationEmail,
        isLoggedIn,
        authUserData
    } = props;

    const [newOption, setOption] = useState(option);

    useEffect(() => {
        if (isRegistrationCancelFetching) {
            setOption("reject--pending");
        }
        if (isRegistrationCancelSuccessful) {
            setOption("reject--success")
        }
        if (emailVerificationError || registrationCancelError) {
            setOption("error");
        }
        if (!isConfirmationFetching && option === "submit") {
            verifyUser(hash)
        }
        if (!isConfirmationFetching && option === "login") {
            resendVerificationEmail(authUserData.email)
        }

    }, [isRegistrationCancelSuccessful,
        isRegistrationCancelFetching,
        isConfirmationFetching,
        emailVerificationError,
        registrationCancelError,
        option,
        hash,
        verifyUser,
        cancelRegistration,
        authUserData,
        resendVerificationEmail
    ])

    const onCancelRegistration = () => {
        cancelRegistration(hash);
    }
    const onVerifyUser = () => {
        verifyUser(hash);
    }

    return (
        <EmailConfirmation option={newOption}
                           onCancelRegistration={onCancelRegistration}
                           onVerifyUser={onVerifyUser}
                           isLoggedIn={isLoggedIn}
                           isVerified={authUserData.isVerified}/>
    );
});

const mapStateToProps = (state) => ({
    authUserData: state.userProfile.authUserData,
    isRegistrationCancelSuccessful: state.userProfile.isRegistrationCancelSuccessful,
    isRegistrationCancelFetching: state.userProfile.isFetching.isRegistrationCancelFetching,
    isConfirmationFetching: state.userProfile.isFetching.isConfirmationFetching,
    emailVerificationError: state.userProfile.errors.emailVerificationError,
    registrationCancelError: state.userProfile.errors.registrationCancelError,
    isLoggedIn: state.userProfile.isLoggedIn
});


export default compose(
    connect(mapStateToProps, {
        cancelRegistration,
        verifyUser,
        resendVerificationEmail
    }),
    withRouter
)(EmailConfirmationContainer);