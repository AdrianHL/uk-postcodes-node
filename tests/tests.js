var UKPostcodes = require("../index"),
		path = require("path"),
		fs = require("fs"),
		assert = require("chai").assert;

var isPostcodeResult = function(result, testPostcode) {
	if (testPostcode) {
		assert.equal(result.postcode, testPostcode)	
	}
	assert.property(result, "geo");
	assert.property(result, "administrative");
	assert.property(result.geo, "lat");
	assert.property(result.geo, "lng");
}

describe("UKPostcode#getPostcode", function () {
	this.timeout(10000);

	var testPostcode = "NW1 9HZ",
			bogusPostcode = "ID1 1QD";

	it ("Should return postcode data", function (done) {
		UKPostcodes.getPostcode(testPostcode, function (error, result) {
			if (error) throw error;
			isPostcodeResult(result, testPostcode);
			done();
		});
	});

	it ("Should return null if postcode does not exist", function (done) {
		UKPostcodes.getPostcode(bogusPostcode, function (error, result) {
			if (error) throw error;
			assert.isNull(result);
			done();
		});
	});
});

describe("UKPostcode#nearestPostcode", function () {
	this.timeout(10000);
	var testLocation = "52.9667,-1.1667",
			bogusLocation = "0,0";

	it ("should return the nearest postcode", function (done) {
		UKPostcodes.nearestPostcode(testLocation, function (error, result) {
			if (error) throw error;
			isPostcodeResult(result);
			done();
		});
	});

	// API issue to be resolved
	// it ("should return null if something can't be found", function (done) {
	// 	UKPostcodes.nearestPostcode(bogusLocation, function (error, result) {
	// 		if (error) throw error;
	// 		console.log(result);
	// 		assert.isNull(result);
	// 		done();
	// 	});
	// });
});

// Todo
// describe("UKPostcode#nearestPostcodes", function () {
// 	this.timeout(10000);
// 	it ("should return the nearest postcode with location and no radius");
// 	it ("should return nearest postcodes with postcode and radius");
// 	it ("should return nearest postcodes with location and radius");
// });