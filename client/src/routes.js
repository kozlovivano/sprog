import React from 'react';
import { Route } from "react-router-dom";

import Home from './components/templates/home/home';
import AboutUs from './components/templates/aboutus/aboutus';
import ContactUs from './components/templates/contactus/contactus';
import Faq from './components/templates/faq/faq';
import Login from './components/templates/auth/login';
import Filter from './components/templates/filter/filter';

export default(
    <React.Fragment>
        <Route exact path="/" component={ Home } />
        <Route path="/aboutus" component={ AboutUs } />
        <Route path="/faq" component={ Faq } />
        <Route path="/contactus" component={ ContactUs } />
        <Route path="/login" component={ Login } />
        <Route path="/filter" component={ Filter } />
    </React.Fragment>
);