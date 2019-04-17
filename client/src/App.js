import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

import { APP_LOAD } from './redux/constants/actionTypes';

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

	componentWillMount(){
		const token = "window.localStorage.getItem('jwt')";
		this.props.onLoad(token);
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
			<div>
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

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
	onLoad: (token) => 
		dispatch({ type: APP_LOAD, token })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
