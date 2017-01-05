var jQuery = require('jquery');

var helperTools = require('./plugins/jquery.helperTools.js'),
	mathHelpers = helperTools.mathHelpers,
	greetingsHelpers = helperTools.greetingsHelpers;
console.log(mathHelpers.getPlugin(undefined));
console.log(greetingsHelpers.getPlugin(undefined));
console.log(mathHelpers.testPlugin(4,4));