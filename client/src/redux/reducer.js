import aboutus from './reducers/aboutus';
import home from './reducers/home';
import faq from './reducers/faq';
import contactus from './reducers/contactus';
import result from './reducers/result';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    home, aboutus, faq, contactus, result,
    router: routerReducer
});