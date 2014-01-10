var	path = require("path"),
		fs = require("fs"),
		util = require("./lib/util"),
		package = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));

var DEFAULTS = {};
DEFAULTS.host = "uk-postcodes.com"
DEFAULTS.port = 80;
DEFAULTS.version = package.version;

// Load in REST resources
var resources = {
	Postcode: require(path.join(__dirname, "lib/postcode")),
	Geolocation: require(path.join(__dirname, "lib/geolocation"))
	// Vicinity: require(path.join(__dirname, "lib/vicinity"))
}

function UKPostcodes() {
	this._api = {
		host: DEFAULTS.host,
		port: DEFAULTS.port,
		platform: process.platform,
		version: DEFAULTS.version
	}

	for (res in resources) {
		this[res] = new resources[res](this);
	}
}

// Helper methods to get data quicker without managing REST resources

UKPostcodes.prototype.getPostcode = function (postcode, callback) {
	this.Postcode.get(postcode, callback);
}

UKPostcodes.prototype.nearestPostcode = function (geolocation, callback) {
	if (!util.validGeolocation(geolocation)) {
		return callback(new Error("Invalid location specified"), null);
	}
	this.Geolocation.get(geolocation, callback);
}

UKPostcodes.prototype.nearestPostcodes = function (location, callback) {
	// Two strings, number => nearest postcodes for 
	// String with number => nearest postcodes for postcodes


	// Lookups up nearest postcodes within location or postcode
	// Arg check to see if postcode or location
	// Check for radius, if no miles, return 1 result only
}



module.exports = new UKPostcodes();