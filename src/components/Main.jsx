import React, { Component } from 'react';

import Nav from './Nav.jsx';

var Main = (props) => {
	return (
		<div>
			<Nav/>
			<div className="container">
				<div className="row">
					{props.children}
				</div>
			</div>
		</div>
	)
};

module.exports = Main;