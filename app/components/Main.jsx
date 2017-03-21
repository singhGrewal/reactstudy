var React = require('react');
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