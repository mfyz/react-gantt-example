import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './screens/home'
import About from './screens/about'
import GanttExample from './screens/gantt_example'

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/gantt_example" component={GanttExample} />
				<Route path="/" component={Home} />
			</Switch>
		)
	}
}

export default Routes
