import { put, takeEvery, all } from 'redux-saga/effects';
import { FETCH_EVENT } from './constants';
import {
    fetchEventDataStarted,
    fetchEventDataSuccess,
    fetchEventDataFail,
  } from './actions';
import getEventApi from '../../api/events';

function* fetchEventData(action) {
    try {
        yield put(fetchEventDataStarted());
        const data = yield getEventApi(action.payload.date);

        if (data.length > 0) {
            yield put(fetchEventDataSuccess(data));
        } else {
            yield put(fetchEventDataFail("There is no event on this date!"));
        };
    } catch(error) {
        yield put(fetchEventDataFail(error.message));
    }
};

export default function* eventsSaga() {
    yield all([
        takeEvery(FETCH_EVENT, fetchEventData),
    ]);
};