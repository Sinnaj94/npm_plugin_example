npm Plugin Example
==================

Only a small plugin to test an npm Plugin. Can add numbers.

## Installation
	npm install npm_plugin_example

## Usage
	var example = require('npm_plugin_example')
		add = example.add;
	var add = add(5,5);
	console.log(add);

## Tests
	npm test

