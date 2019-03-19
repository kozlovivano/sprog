import React from 'react';
import { Route } from "react-router-dom";

import Home from './components/templates/home';
import AboutUs from './components/templates/aboutus/aboutus';
import ContactUs from './components/templates/contactus';
import Faq from './components/templates/faq';
import Login from './components/templates/login';

export default(
    <React.Fragment>
        <Route exact path="/" component={ Home } />
        <Route path="/aboutus" component={ AboutUs } />
        <Route path="/faq" component={ Faq } />
        <Route path="/contactus" component={ ContactUs } />
        <Route path="/login" component={ Login } />
    </React.Fragment>
);