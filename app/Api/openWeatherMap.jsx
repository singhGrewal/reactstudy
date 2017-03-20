var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://samples.openweathermap.org/data/2.5/weather?appid=fc3ea11fbcc2dd5fdd6dbc7d286f6357&units=imperial';


// fc3ea11fbcc2dd5fdd6dbc7d286f6357


modile.exports = {
	getTemp: function (location) {
		
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message)
			}
			else {
				return (res.data.main.temp);
			}
			
		}, function (res) {
			throw new Error(res.data.message)
		})
	}
}