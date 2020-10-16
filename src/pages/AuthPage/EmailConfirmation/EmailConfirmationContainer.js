import React, {useEffect, useState} from "react";
import {compose} from "redux";
import connect from "react-redux";
import {withRouter} from "react-router-dom";

import EmailConfirmation from "./EmailConfirmation";
import {cancelRegistration, verifyUser} from "../../../BLL/reducers/profileReducer";

const EmailConfirmationContainer = React.memo((props) => {

    const hash = props.match.query.hash;

    const {
        isRegistrationCancelSuccessful,
        isRegistrationCancelFetching,
        isConfirmationFetching,
        emailVerificationError,
        registrationCancelError,
        option,
        verifyUser,
        cancelRegistration
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
        if (!isRegistrationCancelFetching && option === "reject") {
            cancelRegistration(hash)
        }
    }, [isRegistrationCancelSuccessful,
        isRegistrationCancelFetching,
        isConfirmationFetching,
        emailVerificationError,
        registrationCancelError,
        option,
        hash,
        verifyUser,
        cancelRegistration
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
                           onSendVerificationEmail={onVerifyUser}/>
    );
});

const mapStateToProps = (state) => ({
    isRegistrationCancelSuccessful: state.userProfile.isRegistrationCancelSuccessful,
    isRegistrationCancelFetching: state.userProfile.isFetching.isRegistrationCancelFetching,
    isConfirmationFetching: state.userProfile.isFetching.isConfirmationFetching,
    emailVerificationError: state.userProfile.errors.emailVerificationError,
    registrationCancelError: state.userProfile.errors.registrationCancelError
});


export default compose(
    connect(mapStateToProps, {
        cancelRegistration,
        verifyUser,
    }),
    withRouter
)(EmailConfirmationContainer);