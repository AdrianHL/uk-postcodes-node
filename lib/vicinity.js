var path = require("path"),
		util = require("util"),
		utils = require("./utils"),
		Postcode = require("postcode"),
		BasicResource = require(path.join(__dirname, "basicresource"));

function Vicinity(client) {
	BasicResource.call(this, client);
}

util.inherits(Vicinity, BasicResource);

Vicinity.prototype.get = function (vicinity, radius, callback) {
	if (utils.validGeolocation(vicinity)) {
		this._PostcodesfromGeolocation(vicinity, radius, callback);
	} else if (new Postcode(vicinity).valid()) {
		this._PostcodesfromPostcode(vicinity, radius, callback);
	} else {
		return callback(null);
	}
}

Vicinity.prototype._PostcodesfromPostcode = function (postcode, radius, callback) {
	// /postcode/nearest?postcode=[postcode]&miles=[distance in miles]&format=[xml|csv|json]
	this._request({
		path: ["/postcode/nearest?postcode=", postcode, "&miles=", radius,"&format=json"].join("")
	}, callback);
}

Vicinity.prototype._PostcodesfromGeolocation = function (postcode, radius, callback) {
	
}



module.exports = Vicinity;