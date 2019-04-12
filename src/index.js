global.Config = require('./../configs/config').loadConfig();
if (!Config) {
	console.error("Cannot run this process. End.");
	return;
}

global.Logger = require('tracer').colorConsole(Config.Tracer.level);

global.Rest = require('./helpers/rest.js');

const express = require('express');
const app = express();

const cors = require('cors');
app.options('*', cors());
app.use(cors({preflightContinue: true, optionsSuccessStatus: 200}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan(`dev`, {
	skip: function (req, res) {
		return req.url.startsWith('/ping');
	}
}));

app.use('/docs', require('./routes/swagger'));

app.use('/', require('./routes/system'));



app.listen(Config.Rest.port, () => {
	Logger.info(`Server is staring using port ${Config.Rest.port} ...`);
});

