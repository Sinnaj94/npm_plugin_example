'use strict';
var jQuery = require('jquery');

function createPlugin(name) {
	return `Creating Plugin for ${name}.`
}

module.exports.mathHelpers = (function() {
	var pluginName = 'math',
		defaults = {
			fieldA : 'js-field-a',
			fieldB : 'js-field-b',
			submit : 'js-submit'
		};
	function init() {
		console.log(defaults);
	}
	function add(a,b) {
		return a + b;
	}
	function multiply(a,b) {
		return a * b;
	}
	function sqrt(number) {
		return Math.sqrt(number);
	}
	function print() {
		console.log("Example Printing");
	}
	return {
		getPlugin: function (options) {
			//Wraps the Plugin as a jQuery Plugin
			return createPlugin(pluginName);
		},
		testPlugin: function (a, b) {
			var str = `a: ${a}, b: ${b}, Add: ${add(a,b)}, multiply: ${multiply(a,b)}, sqrt1: ${sqrt(a)}, sqrt2: ${sqrt(b)}`;
			return str;
		}
	}
})();


module.exports.greetingsHelpers = (function() {
	var pluginName = 'greetings';
	function inGerman() {
		return "Hallo Welt!";
	}
	function inEnglish() {
		return "Hello World!";
	}
	function inFrench() {
		return "Bonjour tout-le-monde!";
	}
	function inPortuguese() {
		return "Oi mundo!";
	}
	return {
		getPlugin: function (options) {
			return createPlugin(pluginName);
		}
	}
})();

