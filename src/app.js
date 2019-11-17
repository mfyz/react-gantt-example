import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'

import Routes from './routes'
import Header from './screens/shared/header'
import Footer from './screens/shared/footer'

class App extends Component {
	componentDidMount() {
		// eslint-disable-next-line global-require
		require('bootstrap/js/src/collapse')
	}

	render() {
		return (
			<div>
				<Header />
				<Routes />
				<Footer />
			</div>
		)
	}
}

export default hot(App)
