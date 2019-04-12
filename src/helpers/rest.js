const responseFn = (func) => {
	return async (req, res, next) => {
		const result = await func(req, res);
		if (result.errorCode) {
			Logger.error(
				`Server sent the error message - ${result.errorCode}, ${result.errorMessage}`
			);
		}
		return res.send(result);
	}
};

const redirectFn = (url) => {
	return (req, res, next) => {
		return res.redirect(url);
	};
};

module.exports = {
	ApiResponse: responseFn,
	ApiRedirect: redirectFn,
};