import aboutus from './reducers/aboutus';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    aboutus,
    router: routerReducer
});