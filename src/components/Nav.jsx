var React = require('react');
var {Link, IndexLink} = require('react-router');



var Nav = React.createClass({
	
	onSearch: function (e) {
		e.preventDefault();
		var getSearchLocation = this.refs.search.value;
		var encodedLocation = encodeURIComponent(getSearchLocation);
		if (getSearchLocation.length > 0) {
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
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
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
						   aria-expanded="false">Watch <span className="caret"/></a>
						<ul className="dropdown-menu">
							<li><Link to="/timer">Timer</Link></li>
							<li><a href="#">Counter</a></li>
						</ul>
					</li>
				</ul>
				<form className="navbar-form navbar-left" onSubmit={this.onSearch}>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Search" ref="search"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</nav>
		)
	}
});

module.exports = Nav;