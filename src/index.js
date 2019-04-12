global.Config = require('./../configs/config').loadConfig();
if (!Config) {
	console.error("Cannot run this process. End.");
	return;
}

global.Logger = require('tracer').colorConsole(Config.Tracer.level);


