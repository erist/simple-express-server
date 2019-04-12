exports.loadConfig = function () {
	const fs = require(`fs`);
	const path = require(`path`);
	const obj = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./config.json"), `utf-8`));
	if (obj) {
		console.log(`Configuration loaded.`);
		return obj;
	}
	console.error(`Cannot load Configuration.`);
	return null;
};