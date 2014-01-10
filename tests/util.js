var util = require("../lib/util"),
		path = require("path"),
		fs = require("fs"),
		assert = require("chai").assert,
		testData;

describe("toQueryString", function () {
	it ("should collapse an object into a query string", function () {
		var testObject = {
			first: "one",
			second: "two",
			third: "three"
		},
		result = util.toQueryString(testObject);
		assert.equal(result, "first=one&second=two&third=three");
	});
});

describe("validGeolocation", function () {
	before(function (done) {
		fs.readFile(path.join(__dirname, "data/geolocationstrings.json"), function (error, data) {
			if (error) throw error;
			testData = JSON.parse(data);
			done();
		});
	});

	it ("should properly validate geolocation strings", function () {
		testData.tests.forEach(function(test){
			assert.equal(util.validGeolocation(test.base), test.expected);
		});
	});
});