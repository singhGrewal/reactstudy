import React, {Component} from 'react';
import {render} from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './components/Main.jsx';
import Weather from './components/WeatherApp/Weather.jsx';
import About from'./components/About.jsx';
import Example from './components/Example.jsx';


render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('layout')
);