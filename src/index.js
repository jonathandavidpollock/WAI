import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store'

import App from './components/App'
import Lists from './components/Lists'
import Single from './components/Single'

import 'react-redux'
import './App.css'

const router = (
		<nav>
			<Route exact path="/" render={() => (
					<App>
						<Lists />
					</App>
			)}/>
			<Route path="/view/:postId" render={({match}) => (
					<App>
						<Single match={match}/>
					</App>
			)}/>
		</nav>
)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			{router}
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'))

registerServiceWorker()
