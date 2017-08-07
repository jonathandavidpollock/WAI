import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './redux/store'

import App from './components/App'
import Photogrid from './components/Photogrid'
import Single from './components/Single'

const router = (
		<nav>
			<Route exact path="/" render={() => (
					<App>
						<Photogrid />
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
