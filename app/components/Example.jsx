var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
	return (
		<div className="col-xs-12 col-sm-4">
			<h3>Example</h3>
			<ol>
				<li>
					<Link to="/?location=Fremont">Fremont , CA</Link>
				</li>
				<li>
					<Link to="/?location=sandiego">San diego , CA</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Example;