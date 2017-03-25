var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var Layout = React.createClass({
	render: function () {
		return (
			<html>
			
			<head>
				<meta charset="UTF-8"/>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"/>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>;
			</head>
			
			<body>
			<div id="app"/>
			
			<script src="bundle.js"/>
			
			<main className="container-fluid" id="layout">
				<article role="main">
					{this.props.children}
					<RouteHandler {...props}/>
				</article>
			</main>
			</body>
			
			</html>
		)
	}
});

module.exports = Layout;
