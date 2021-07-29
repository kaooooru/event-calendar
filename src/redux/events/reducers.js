import { 
    FETCH_EVENT_DATA_STARTED,
    FETCH_EVENT_DATA_SUCCESS,
    FETCH_EVENT_DATA_FAIL,
} from './constants';

import { message } from "antd";

const initialState = {
    loading: false,
    data: []
};

const eventReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_EVENT_DATA_STARTED:
            return {
                ...state,
                loading: true
            };
        
        case FETCH_EVENT_DATA_SUCCESS:
            return {
                loading: false,
                data: action.payload
            };
        
        case FETCH_EVENT_DATA_FAIL:
            message.error(action.payload);
            return {
                loading: false,
                data: [],
                err: action.payload
            };
        default:
            return state;
            
    };
};

export default eventReducer;

