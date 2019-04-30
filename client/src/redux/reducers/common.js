import {
    APP_LOAD,
    USER_MODE,
    BUSINESS_MODE,
    LOG_IN,
    LOG_OUT
} from '../constants/actionTypes';

const defaultState = {
    appName: 'Sprog',
    token: null,
    logged_in: false,
    user_mode: false,
    business_mode: false,
    week_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    facilities: ["Outdoor", "Indoor", "Wifi", "Parking", "Food", "Disabled", "Toilets", "Baby", "SEN"]
};

export default (state = defaultState, action) => {
    switch (action.type){
        case APP_LOAD:
            return{
                ...state,
                token: action.token || null,
                appLoaded: true,
            }
        case USER_MODE:
            return{
                ...state,
                user_mode: true,
                business_mode: false
            }
        case BUSINESS_MODE:
            return{
                ...state,
                user_mode: false,
                business_mode: true
            }
        case LOG_IN:
            return{
                ...state,
                logged_in: true
            }
        case LOG_OUT:
            return{
                ...state,
                logged_in: false
            }
        default:
            return state;
    }
}