var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	
	onSearch: function (e) {
		e.preventDefault();
		alert('Still not Wired');
	},
	
	render: function () {
		return (
			<nav className="navbar navbar-inverse">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">Grewal</a>
				</div>
				<ul className="nav navbar-nav">
					<li><IndexLink to="/">Get Weather</IndexLink></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/example">Example</Link></li>
					<li><Link to="/cars">Car</Link></li>
				</ul>
				<form className="navbar-form navbar-left" onSubmit={this.onSearch}>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Search"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</nav>
		)
	}
});

module.exports = Nav;