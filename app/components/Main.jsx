import React from 'react';
import {ReactDOM, render} from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';


import Nav from './Nav.jsx';

var Main = React.createClass({
	render: function () {
		return (
			<div>
				<Nav/>
				<h2>Main component</h2>
				{/*{this.props.children}*/}
			</div>
		)
	}
});

module.exports = Main;