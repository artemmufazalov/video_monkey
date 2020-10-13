import {UserAPI} from "../api/api";

//Action Types
const SET_AUTH_USER_DATA = "profile/SET_AUTH_USER_DATA";
const SET_REGISTRATION_USER_DATA = "profile/SET_REGISTRATION_USER_DATA"
const LOGOUT = "profile/LOGOUT";
const CHECK_IS_LOGGED_IN = "profile/CHECK_IS_LOGGED_IN";
const SET_REGISTRATION_FETCHING = "profile/SET_REGISTRATION_FETCHING";
const SET_CONFIRMATION_FETCHING = "profile/SET_CONFIRMATION_FETCHING";
const SET_REGISTRATION_CANCEL_FETCHING = "profile/SET_REGISTRATION_CANCEL_FETCHING";
const SET_REGISTRATION_SUCCESS = "profile/SET_REGISTRATION_SUCCESS";
const SET_REGISTRATION_ERROR = "profile/SET_REGISTRATION_ERROR";


//Initial State
const initialState = {
    isLoggedIn: false,
    registrationData: {
        email: ""
    },
    isRegistrationSuccessful: false,
    authUserProfile: {},
    isFetching: {
        isRegistrationFetching: false,
        isConfirmationFetching: false,
        isRegistrationCancelFetching: false
    },
    errors: {
        emailVerificationError: false,
        registrationError: false,
        registrationErrorMessage: ""
    },

}

//Reducer
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_USER_DATA:
            return {
                ...state,
                registrationData: {
                    ...state.registrationData,
                    email: action.email
                }
            }
        case SET_REGISTRATION_FETCHING: {
            return {
                ...state,
                isFetching: {
                    ...state.isFetching,
                    isRegistrationFetching: action.isRegistrationFetching
                }
            }
        }
        case SET_REGISTRATION_SUCCESS:
            return {
                ...state,
                isRegistrationSuccessful: action.isRegistrationSuccessful
            }
        case SET_REGISTRATION_ERROR: {
            return {
                ...state,
                isRegistrationSuccessful: false,
                errors: {
                    ...state.errors,
                    registrationError: action.isRegistrationError,
                    registrationErrorMessage: action.message
                }
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
const setRegistrationSuccess = (isRegistrationSuccessful) =>
    ({type: SET_REGISTRATION_SUCCESS, isRegistrationSuccessful});
const setRegistrationError = (isRegistrationError, message) =>
    ({type: SET_REGISTRATION_ERROR, isRegistrationError, message});

//Thunks

const auth = () => async (dispatch) => {

}
const login = (email, password) => async (dispatch) => {

}

export const register = (email, name, password) => async (dispatch) => {

    dispatch(setRegistrationIsFetching(true));
    try {
        let registerData = await UserAPI.register(email, name, password)
        console.log(registerData);
        if (registerData.data.resultCode === 0 || registerData.status === 200) {
            dispatch(setRegistrationData(email));
            dispatch(setRegistrationSuccess(true));
        } else if (registerData.status === 500 && registerData.data.message === "User with this email already exist"){
            dispatch(setRegistrationError(true, "User was created, but email wasn't sent"));
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

const sendVerificationEmail = () => async (dispatch) => {
}

const cancelRegistration = () => async (dispatch) => {
}