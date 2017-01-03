var should = require('chai').should(),
	myplugin = require('../index'),
	add = myplugin.add,
	helloWorld = myplugin.helloWorld;

describe('#add()', function() {
	it('adds two numbers', function() {
		add(5,5).should.equal(10);
	});
	it('adds negative number', function() {
		add(5,-5).should.equal(0);
	});
});