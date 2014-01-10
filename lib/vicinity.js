var path = require("path"),
		util = require("util"),
		BasicResource = require(path.join(__dirname, "basicresource"));

function Vicinity() {
	BasicResource.call(this);
}

util.inherits(Vicinity, BasicResource);

Vicinity.prototype.get = function () {
	
}

module.exports = Vicinity;