import { 
    SIGN_UP_USER_STARTED,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
    SIGN_UP_USER,
    LOGIN_USER_STARTED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER,
    LOGIN_GOOGLE_USER_STARTED,
    LOGIN_GOOGLE_USER_SUCCESS,
    LOGIN_GOOGLE_USER_FAILURE,
    LOGIN_GOOGLE_USER,
    LOGOUT_STARTED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    UPDATE_AUTH,
    UPDATE_MODAL_STATUS,
} from './constants';

export const signUpUserStarted = () => ({
    type: SIGN_UP_USER_STARTED
});

export const signUpUserSuccess = (user) => ({
    type: SIGN_UP_USER_SUCCESS,
    payload: user
});

export const signUpUserFailure = (err) => ({
    type: SIGN_UP_USER_FAILURE,
    payload: err
});

export const signUpUser = ({email, password, username}) => ({
    type: SIGN_UP_USER,
    payload: {email, password, username}
});

export const loginUserStarted = () => ({
    type: LOGIN_USER_STARTED
});

export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const loginUserFailure = (err) => ({
    type: LOGIN_USER_FAILURE,
    payload: err
});

export const loginUser = ({email, password}) => ({
    type: LOGIN_USER,
    payload: {email, password}
});

export const loginGoogleUserStarted = () => ({
    type: LOGIN_GOOGLE_USER_STARTED
});

export const loginGoogleUserSuccess = (user) => ({
    type: LOGIN_GOOGLE_USER_SUCCESS,
    payloa: user
});

export const loginGoogleUSerFailure = (err) => ({
    type: LOGIN_GOOGLE_USER_FAILURE,
    payload: err
});

export const loginGoogleUser = () => ({
    type: LOGIN_GOOGLE_USER
});

export const updateAuth = (user) => ({
    type: UPDATE_AUTH,
    payload: user
});

export const updateModalStatus = ({modalType, isVisible}) => ({
    type: UPDATE_MODAL_STATUS,
    payload: {modalType, isVisible}
});

