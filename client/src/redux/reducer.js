import aboutus from './reducers/aboutus';
import home from './reducers/home';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    home, aboutus,
    router: routerReducer
});