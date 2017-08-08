import {createStore, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'


//import root reducer
import rootReducer from '../reducers'
import comments from './data/comments'
import posts from './data/posts'

const defaultState = {
	comments,
	posts
}

export const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(rootReducer, defaultState, applyMiddleware(middleware))

export default store;
