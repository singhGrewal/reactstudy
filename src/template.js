import React from 'react';


const Html = (props) => (
	<html lang='en'>
	<head>
		<title>{props.title}</title>
	</head>
	<body>
	<h1>{props.someData}</h1>
	<p>{props.gotprops}</p>
	<div id='root' dangerouslySetInnerHTML={{ __html: props.body }} />
	<script src='/app.js' />
	</body>
	</html>
);

export default Html;



module.exports = Html;