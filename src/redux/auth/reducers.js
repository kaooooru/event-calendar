import {
    SIGN_UP_USER_STARTED,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
    LOGIN_USER_STARTED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_GOOGLE_USER_STARTED,
    LOGIN_GOOGLE_USER_SUCCESS,
    LOGIN_GOOGLE_USER_FAILURE,
    LOGOUT_STARTED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    UPDATE_AUTH,
    UPDATE_MODAL_STATUS,
} from './constants';

import { message } from "antd";

const initialState = {
    isLoggingIn: false,
    isGoolgeLoggingIn: false,
    isSigningUp: false,
    isLoggingOut: false,
    loading: false,
    isAuthenticated: false,
    isLoginError: false,
    isGoogleLoginError: false,
    isSignUpError: false,
    isLogoutError: false,
    user: {},
    modalType: "",
    isVisible: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SIGN_UP_USER_STARTED:
            return {
                ...state,
                loading: true,
                isSigningUp: true
            };
        case SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isSigningUp: false,
                isAuthenticated: true,
                isSignUpError: false,
                user: action.payload
            };
        case SIGN_UP_USER_FAILURE:
            message.error(action.payload)
            return {
                ...state,
                loading: false,
                isSigningUp: false,
                isSignUpError: true
            };
        case LOGIN_USER_STARTED:
            return {
                ...state,
                loading: true,
                isLoggingIn: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggingIn: false,
                isAuthenticated: true,
                isLoginError: false,
                user: action.payload
            };
        case LOGIN_USER_FAILURE:
            message.error(action.payload)
            return {
                ...state,
                loading: false,
                isLoggingIn: false,
                isLoginError: true
            };
        case LOGIN_GOOGLE_USER_STARTED:
            return {
                ...state,
                loading: true,
                isGoolgeLoggingIn: true
            };
        case LOGIN_GOOGLE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isGoolgeLoggingIn: false,
                isAuthenticated: true,
                isGoogleLoginError: false,
                user: action.payload
            };
        case LOGIN_GOOGLE_USER_FAILURE:
            message.error(action.payload)
            return {
                ...state,
                loading: false,
                isGoolgeLoggingIn: false,
                isGoogleLoginError: true
            };
        case UPDATE_AUTH:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case UPDATE_MODAL_STATUS:
            return {
                ...state,
                modalType: action.payload.modalType,
                isVisible: action.payload.isVisible
            };
        default:
            return state;
    };
};

export default authReducer;