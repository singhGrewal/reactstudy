var React = require('react');

var WeatherMessage = React.createClass({
	render: function () {
		var {temp, location} = this.props;
		return (
			<div>
				<h3>Its hot {temp} over here {location}</h3>
			</div>
		)
	}
});

module.exports = WeatherMessage;