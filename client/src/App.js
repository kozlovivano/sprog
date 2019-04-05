import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from './components/layouts/navbar';
import Backdrop from './components/layouts/sidedrawer/backdrop';
import SideDrawer from './components/layouts/sidedrawer/SideDrawer';
import Footer from './components/layouts/footer';
import Routes from './routes';

import './App.css';

class App extends Component {

	state = {
		sideDrawerOpen: false
	}
	drawerToggleClickHandler = () => {
		this.setState(prevState => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen}
		});
	}
	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	}
  	render() {
		let backdrop;

		if(this.state.sideDrawerOpen){
			backdrop = <Backdrop click={this.backdropClickHandler}></Backdrop>;
		}
    	return (
			<div style={{height: "100vh"}}>
				<Router>
					<NavBar sideState={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler}></NavBar>
					<SideDrawer show={this.state.sideDrawerOpen}></SideDrawer>
					{backdrop}
					<div className="content">
						{ Routes }
					</div>
					<Footer></Footer>
				</Router>
			</div>
    	);
  	}
}

export default App;
