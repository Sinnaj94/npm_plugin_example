var should = require('chai').should(),
	myplugin = require('../index'),
	add = myplugin.add,
	multiply = myplugin.multiply;

describe('#add()', function() {
	it('adds two numbers', function() {
		add(5,5).should.equal(10);
	});
	it('adds negative number', function() {
		add(5,-5).should.equal(0);
	});
});

describe('#multiply()', function() {
	it('multiplies two numbers', function() {
		multiply(5,5).should.equal(25);
	});
});