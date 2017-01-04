'use strict';
var jQuery = require('jquery');

module.exports.mathHelpers = (function() {
	var pluginName = 'dotOut',
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
	function sqrt(number, base) {
		return Math.sqrt(number);
	}
	function print() {
		console.log("Example Printing");
	}
	return {
		getPlugin: function (options) {
			//Wraps the Plugin as a jQuery Plugin
			return `Wrapping the Plugin ${pluginName} as a jQuery Plugin...`;
		},
		testPlugin: function (otions) {
			return "test";
		}
	}
})();


module.exports.greetingsHelpers = (function() {
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
			var ret = "All Prints:\n"+inGerman() + " " + inEnglish() + " " + inFrench() + " " + inPortuguese();
			return ret;
		}
	}
})();

