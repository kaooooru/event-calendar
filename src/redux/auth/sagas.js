import { put, takeEvery, all } from 'redux-saga/effects';
import { 
    SIGN_UP_USER,
    LOGIN_USER,
    LOGIN_GOOGLE_USER,
} from './constants';
import { 
    signUpUserStarted,
    signUpUserSuccess,
    signUpUserFailure,
    loginGoogleUSerFailure, 
    loginGoogleUserStarted, 
    loginGoogleUserSuccess,
    loginUserFailure, 
    loginUserStarted, 
    loginUserSuccess
} from './actions';
import firebase from '../../config/firebase';

function* signUpUserInfo(action) {
    try {
        yield put(signUpUserStarted());
        const userCredential = yield firebase.auth().createUserWithEmailAndPassword(action.payload.email, action.payload.password);
        const user = userCredential.user;
        yield user.updateProfile({
            displayName: action.payload.username
        });
        const token = yield user.getIdToken();
        localStorage.setItem("token", token);
        const userData = {
            name: user.displayName,
            email: user.email,
        }
        localStorage.setItem("user", JSON.stringify(userData));
        yield put(signUpUserSuccess(userData));
    } catch (error) {
        yield put(signUpUserFailure(error.message));
    };
};

function* loginUserInfo(action) {
    try {
        yield put(loginUserStarted());
        const userCredential = yield firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password);
        const user = userCredential.user;
        const token = yield user.getIdToken();
        localStorage.setItem("token", token);
        const userData = {
            name: user.displayName,
            email: user.email,
        }
        localStorage.setItem("user", JSON.stringify(userData));
        yield put(loginUserSuccess(userData));
    } catch (error) {
        yield put(loginUserFailure(error.mesage));
    };
};

function* loginGoogleUserInfo() {
    try {
        yield put(loginGoogleUserStarted());
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = yield firebase.auth().signInWithPopup(provider);
        const user = result.user;
        const token = yield user.getIDToken();
        localStorage.setItem("token", token);
        const userData = {
            name: user.displayName,
            email: user.email,
        }
        localStorage.setItem("user", JSON.stringify(userData));
        yield put(loginGoogleUserSuccess(userData));
    } catch (error) {
        yield put(loginGoogleUSerFailure(error.mesage));
    };
};

export default function* authSaga() {
    yield all([
        takeEvery(SIGN_UP_USER, signUpUserInfo),
        takeEvery(LOGIN_USER, loginUserInfo),
        takeEvery(LOGIN_GOOGLE_USER, loginGoogleUserInfo)
    ]);
};