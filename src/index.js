import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './app'
import './styles/global.scss'
import './styles/bootstrap.scss'

render(
	<Router>
		<Route path="/:filter?" component={App} />
	</Router>,
	document.getElementById('root')
)
