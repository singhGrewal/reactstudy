import React, {Component} from 'react';

import WeatherForm  from './WeatherForm.jsx';
import WeatherMessage  from './WeatherMessage.jsx';
import OpenWeatherMap  from './../../Api/openWeatherMap.jsx';

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;
		
		
		this.setState({
			isLoading: true,
			location:undefined,
			temp:undefined,
		});
		
		
		OpenWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			that.setState({
				isLoading: false
			});
			alert(errorMessage);
		});
	},
	
	componentDidMount: function () {
		var getlocation = this.props.location.query.location;
		if (getlocation && getlocation.length > 0) {
			// console.log('location ' , getlocation);
			this.handleSearch(getlocation)
			window.location.hash = '#/';
		}
	},
	
	
	render: function () {
		var {isLoading, temp, location} = this.state;
		
		function renderMessage() {
			if (isLoading) {
				return <h3>Fetching Weather ......</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
				
			}
		}
		
		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;