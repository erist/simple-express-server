exports.ping = (req) => {
	return {
		ts: new Date().getTime()
	};
};