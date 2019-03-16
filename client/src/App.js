import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './components/layouts/navbar';
import Routes from './routes';

import './App.css';

class App extends Component {
  	render() {
    	return (
			<React.Fragment>
				<Router>
					<NavBar></NavBar>
					{ Routes }
				</Router>
			</React.Fragment>
    	);
  	}
}

export default App;
