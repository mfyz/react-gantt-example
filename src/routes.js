import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './screens/home'
import About from './screens/about'

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/" component={Home} />
			</Switch>
		)
	}
}

export default Routes
