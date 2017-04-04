var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
// var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');


var Clock = require('../.././components/WeatherApp/Clock.js');

describe('Clock', () => {
	it('should exist', () => {
		expect(Clock).toExist();
	});
	
	describe('formatSeconds' , () => {
		it('should fomat seconds' , () => {
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);
			
			expect(actual).toBe(expected);
		})
	})
});