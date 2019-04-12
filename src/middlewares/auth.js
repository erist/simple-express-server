module.exports = [
	async (req, res, next) => {
		if (!req.headers.authorization) {
			res.send(Rest.Responses.Failure.NotAuthorized);
			return;
		}
		const apiToken = req.headers.authorization.split(' ')[1];
		if (!apiToken) {
			res.send(Rest.Responses.Failure.NotAuthorized);
			return;
		}
		try {
			const jwt = require('./../services/jwt');
			const object = await jwt.verify(apiToken);
			if (object.exp * 1000 < Date.now()) {
				res.send(Rest.Responses.Failure.InvalidToken);
				return;
			}

			// Do something ...

		} catch (e) {
			Logger.error(apiToken, e);
			res.send(Rest.Responses.Failure.InvalidToken);
			return;
		}

		next();
	},
	async (req, res, next) => {

		// Do something ...

		next();
	}
];