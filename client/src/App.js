import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Routes from './routes';

import './App.css';

class App extends Component {
  	render() {
    	return (
			<React.Fragment>
				<Router>
					<NavBar></NavBar>
					{ Routes }
					<Footer></Footer>
				</Router>
			</React.Fragment>
    	);
  	}
}

export default App;
