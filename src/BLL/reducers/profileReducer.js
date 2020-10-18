import {UserAPI} from "../api/api";

//Action Types
const AUTH = "profile/AUTH";
const SET_REGISTRATION_USER_DATA = "profile/SET_REGISTRATION_USER_DATA"
const LOGOUT = "profile/LOGOUT";
const LOGIN = "profile/LOGIN";
const SET_REGISTRATION_FETCHING = "profile/SET_REGISTRATION_FETCHING";
const SET_CONFIRMATION_IS_FETCHING = "profile/SET_CONFIRMATION_IS_FETCHING";
const SET_LOGIN_FETCHING = "profile/SET_LOGIN_FETCHING";
const SET_REGISTRATION_CANCEL_FETCHING = "profile/SET_REGISTRATION_CANCEL_FETCHING";
const SET_REGISTRATION_CANCEL_SUCCESS = "profile/SET_REGISTRATION_CANCEL_SUCCESS";
const SET_REGISTRATION_CANCEL_ERROR = "profile/SET_REGISTRATION_CANCEL_ERROR";
const SET_REGISTRATION_SUCCESS = "profile/SET_REGISTRATION_SUCCESS";
const SET_REGISTRATION_ERROR = "profile/SET_REGISTRATION_ERROR";
const SET_EMAIL_VERIFICATION_ERROR = "profile/SET_EMAIL_VERIFICATION_ERROR";
const SET_LOGIN_ERROR = "profile/SET_LOGIN_ERROR";

//Initial State
const initialState = {
    isLoggedIn: false,
    authUserData: {
        name: "",
        email: "",
        isVerified: false
    },
    registrationData: {
        email: ""
    },
    userHash: "",
    isRegistrationSuccessful: false,
    isRegistrationCancelSuccessful: false,
    authUserProfile: {},
    isFetching: {
        isRegistrationFetching: false,
        isConfirmationFetching: false,
        isRegistrationCancelFetching: false,
        isLoginFetching: false
    },
    errors: {
        emailVerificationError: false,
        registrationCancelError: false,
        registrationError: false,
        registrationErrorMessage: "",
        loginError: false,
        loginErrorMessage: ""
    },

}

//Reducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
        case AUTH:
            return {
                ...state,
                isLoggedIn: true,
                authUserData: {
                    ...state.authUserData,
                    email: action.email,
                    name: action.name,
                    isVerified: action.isVerified
                }
            }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false,
            }
        }
        case SET_REGISTRATION_USER_DATA:
            return {
                ...state,
                registrationData: {
                    ...state.registrationData,
                    email: action.email
                }
            }
        case SET_REGISTRATION_FETCHING:
            return {
                ...state,
                isFetching: {
                    ...state.isFetching,
                    isRegistrationFetching: action.isRegistrationFetching
                }
            }
        case SET_CONFIRMATION_IS_FETCHING:
            return {
                ...state,
                isFetching: {
                    ...state.isFetching,
                    isConfirmationFetching: action.isConfirmationFetching
                }
            }
        case SET_LOGIN_FETCHING:
            return {
                ...state,
                isFetching: {
                    ...state.isFetching,
                    isLoginFetching: action.isLoginFetching
                }
            }
        case SET_REGISTRATION_SUCCESS:
            return {
                ...state,
                isRegistrationSuccessful: action.isRegistrationSuccessful
            }
        case SET_REGISTRATION_ERROR:
            return {
                ...state,
                isRegistrationSuccessful: false,
                errors: {
                    ...state.errors,
                    registrationError: action.isRegistrationError,
                    registrationErrorMessage: action.message
                }
            }
        case SET_EMAIL_VERIFICATION_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    emailVerificationError: action.isEmailVerificationError,
                }
            }
        case SET_REGISTRATION_CANCEL_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    registrationCancelError: action.isRegistrationCancelError,
                }
            }
        case SET_REGISTRATION_CANCEL_FETCHING:
            return {
                ...state,
                isFetching: {
                    ...state.isFetching,
                    isRegistrationCancelFetching: action.isRegistrationCancelFetching
                }
            }
        case SET_REGISTRATION_CANCEL_SUCCESS:
            return {
                ...state,
                isRegistrationCancelSuccessful: action.isRegistrationCancelSuccessful
            }

        case SET_LOGIN_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    loginError: action.isLoginError,
                    loginErrorMessage: action.loginErrorMessage
                }
            }
        default:
            return state;
    }
}

export default profileReducer;

//Action Creators
const setRegistrationData = (email) =>
    ({type: SET_REGISTRATION_USER_DATA, email});
const setRegistrationIsFetching = (isRegistrationFetching) =>
    ({type: SET_REGISTRATION_FETCHING, isRegistrationFetching});
const setEmailConfirmationIsFetching = (isConfirmationFetching) =>
    ({type: SET_CONFIRMATION_IS_FETCHING, isConfirmationFetching});
const setRegistrationSuccess = (isRegistrationSuccessful) =>
    ({type: SET_REGISTRATION_SUCCESS, isRegistrationSuccessful});
const setRegistrationCancelSuccess = (isRegistrationCancelSuccessful) =>
    ({type: SET_REGISTRATION_CANCEL_SUCCESS, isRegistrationCancelSuccessful});
const setRegistrationCancelIsFetching = (isRegistrationCancelFetching) =>
    ({type: SET_REGISTRATION_CANCEL_FETCHING, isRegistrationCancelFetching});
const setRegistrationCancelError = (isRegistrationCancelError) =>
    ({type: SET_REGISTRATION_CANCEL_ERROR, isRegistrationCancelError});
const setRegistrationError = (isRegistrationError, message) =>
    ({type: SET_REGISTRATION_ERROR, isRegistrationError, message});
const setLoginError = (isLoginError, loginErrorMessage) =>
    ({type: SET_LOGIN_ERROR, isLoginError, loginErrorMessage});
const setLoginIsFetching = (isLoginFetching) =>
    ({type: SET_LOGIN_FETCHING, isLoginFetching});
const setEmailVerificationError = (isEmailVerificationError) =>
    ({type: SET_EMAIL_VERIFICATION_ERROR, isEmailVerificationError});
const authUser = (email, name, isVerified) =>
    ({type: AUTH, email, name, isVerified});
const logoutUser = () =>
    ({type: LOGOUT});

//Thunks
export const auth = () => async (dispatch) => {
    if (window.localStorage.token && window.localStorage.token !== "undefined") {
        try {
            let responseData = await UserAPI.authMe();
            if (responseData.data.resultCode === 0 || responseData.status === 200) {
                dispatch(authUser(responseData.data.user.email, responseData.data.user.name, responseData.data.user.confirmed));
                console.log("Successful authentication");
            } else if (responseData.message === "Token is invalid or expired" || responseData.status === 401) {
                delete window.localStorage.token;
                console.log("Authentication token is invalid or expired");
            }
        } catch (err) {
            console.log("Unsuccessful authentication: " + err);
        }

    }
}

export const login = (email, password) => async (dispatch) => {
    dispatch(setLoginError(false, ""))
    dispatch(setLoginIsFetching(true));
    try {
        let responseData = await UserAPI.login(email, password);
        if (responseData.data.resultCode === 0 || responseData.status === 200) {
            window.localStorage.token = responseData.data.token;
            dispatch(authUser(email, responseData.data.user.name, responseData.data.user.confirmed));
        } else {
            dispatch(setLoginError(true, responseData.data.message))
        }
        dispatch(setLoginIsFetching(false));
    } catch (err) {
        dispatch(setLoginError(true, "Some error occurred"));
        dispatch(setLoginIsFetching(false));
    }
}

export const logout = () => async (dispatch) => {
    let responseData = await UserAPI.logout();
    if (responseData.data.resultCode === 0 || responseData.status === 200) {
        delete window.localStorage.token;
        dispatch(logoutUser());
    }
}

export const register = (email, name, password) => async (dispatch) => {

    dispatch(setRegistrationIsFetching(true));
    try {
        let registerData = await UserAPI.register(email, name, password)
        console.log(registerData);
        if (registerData.data.resultCode === 0 || registerData.status === 200) {
            dispatch(setRegistrationData(email));
            dispatch(setRegistrationSuccess(true));
        } else if (registerData.status === 500) {
            dispatch(setEmailVerificationError(true));
            dispatch(setRegistrationData(email));
            dispatch(setRegistrationSuccess(true));
        } else {
            dispatch(setRegistrationError(true, registerData.data.message));
        }
        dispatch(setRegistrationIsFetching(false));
    } catch (err) {
        dispatch(setRegistrationError(true, "Some error occurred"));
        dispatch(setRegistrationIsFetching(false));
    }
}

export const verifyUser = (hash) => async (dispatch) => {
    dispatch(setEmailConfirmationIsFetching(true));
    let responseData = await UserAPI.verifyUser(hash)
    if (responseData.data.resultCode === 0 || responseData.status === 200) {
        window.localStorage.token = responseData.data.token;
        dispatch(authUser(responseData.data.user.email, responseData.data.user.name, responseData.data.user.confirmed));
    } else {
        dispatch(setEmailVerificationError(true));
    }
}

export const cancelRegistration = (hash) => async (dispatch) => {
    dispatch(setRegistrationCancelIsFetching(true));
    let responseData = await UserAPI.cancelRegistration(hash)
    if (responseData.data.resultCode === 0 || responseData.status === 200) {
        dispatch(setRegistrationCancelSuccess(true));
    } else {
        dispatch(setRegistrationCancelError(true));
    }
    dispatch(setRegistrationCancelIsFetching(false));

}

export const resendVerificationEmail = (email) => async (dispatch) =>{
    dispatch(setEmailConfirmationIsFetching(true));
    dispatch(setEmailVerificationError(false));
    let responseData = await UserAPI.resendConfirmationEmail(email)
    if (responseData.data.resultCode === 0 || responseData.status === 200) {
        dispatch(authUser(responseData.data.user.email, responseData.data.user.name, responseData.data.user.confirmed));
    } else {
        dispatch(setEmailVerificationError(true));
    }
}
