import React, { Component } from 'react';
import './App.css';
import RideList from './RideList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact={true} component={RideList} />
				</Switch>
			</Router>
		);
	}
}

export default App;
