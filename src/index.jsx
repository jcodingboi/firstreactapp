import React, { Component } from 'react';

function HeaderContent() {
	return (
		<h2>Hey!</h2>
	)
}

function MainContent() {
	return (
		<h1>I'm learning React!</h1>
	)
}

function FooterContent() {
	return (
		<h2>Goodbye!</h2>
	)
}

ReactDOM.render(
	<div>
		<HeaderContent />
		<MainContent />
		<FooterContent />
	</div>,
	document.getElementById("root")
)
