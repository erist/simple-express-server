const jwt = require('jsonwebtoken');

// Ref: @link https://www.npmjs.com/package/jsonwebtoken

exports.sign = (data) => {
	return jwt.sign(data, Config.JWT.secret, Config.JWT.options);
};

exports.verify = (token) => {
	return jwt.verify(token, Config.JWT.secret);
};