import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
// Import custom components
import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';
import Search from './container/Search';
// Import Provider for Redux
import {Provider} from 'react-redux';
// Import createStore
import {createStore, applyMiddleware} from 'redux';
// Import redux promise
import reducers from './reducers/index.js';
// Import redux promise
import reduxPromise from 'redux-promise';

const theStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
<Provider store={theStoreWithMiddleWare(reducers)}>
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='/login' component={Login}/>
			<Route path='/register' component={Register}/>
			<Route path='/search/:term' component={Search}/>
	  	</Route>
	</Router>
</Provider>,
  document.getElementById('root')
);
