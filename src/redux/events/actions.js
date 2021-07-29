import { 
    FETCH_EVENT_DATA_STARTED,
    FETCH_EVENT_DATA_SUCCESS,
    FETCH_EVENT_DATA_FAIL,
    FETCH_EVENT
} from './constants';

export const fetchEventDataStarted = () => ({
    type: FETCH_EVENT_DATA_STARTED
});

export const fetchEventDataSuccess = (data) => ({
    type: FETCH_EVENT_DATA_SUCCESS,
    payload: data
});

export const fetchEventDataFail = (err) => ({
    type: FETCH_EVENT_DATA_FAIL,
    payload: err
});

export const fetchEvent = (info) => ({
    type: FETCH_EVENT,
    payload: info
});

