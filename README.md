npm Plugin Example
==================

Sample architecture for a plugin

`npm install npm_plugin_example`


	In the [rootfolder](.) of the project there is the main.js. From here we require the Plugins that are lying inside the [Plugins](./plugins) folder. Inside the rootfolder there is one file right now, the [jquery.helperTools.js](./plugins/jquery.helperTools.js), where the "Plugins" are bundled. Maybe it is useful to split these files. Inside this file, we have multiple Modules. The syntax of defining an npm module is
	```javascript
	module.exports.moduleName = (function() {
		//functions
	})();
	```
	Inside these modules we can declare functions and variables as usual. We also can define functions that can be accessed from another scope. Example:
	```javascript

	//global functions. can be accessed from all modules.
	function createPlugin(name) {
		return `Creating Plugin for ${name}.`
	}

	//...

	module.exports.mathHelpers = (function() {
		//our functions and variables. These cannot be accessed from another scope
		var pluginName = 'math',
			defaults = {
				fieldA : 'js-field-a',
				fieldB : 'js-field-b',
				submit : 'js-submit'
			};

		//function for adding two numbers.
		function add(a,b) {
			return a + b;
		}

		//...

		//we can return an object where we declare variables and functions. those functions can be accessed from another scope.
		return {
			//functions always return something.
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
	```
	In the [main.js](./main.js) we can require multiple modules. We can also access the variables and functions that we returned.
	```javascript
	//requiring the actual file
	var helperTools = require('./plugins/jquery.helperTools.js'),
		//requiring the actual modules
		//Works like this: moduleName = helperTools.moduleName,
		mathHelpers = helperTools.mathHelpers,
		greetingsHelpers = helperTools.greetingsHelpers;
	//access a function we defined before
	console.log(mathHelpers.testPlugin(4,4)); //output: a: 4, b: 4, Add: 8, multiply: 16, sqrt1: 2, sqrt2: 2
	```


	`npm start`


	`npm test`
