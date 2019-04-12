const path = require('path');
const options = {
	swaggerDefinition: {
		info:
			{
				title: "simple express api server",
				version: "v1",
				description: "",
			},
		tags: [
			{
				name: "system",
				description: "for Server/System"
			}
		],
		components: {
			securitySchemes: {
				apiToken:
					{
						type: "http",
						scheme: "bearer",
						bearerFormat: "JWT"
					}
			}
		},
		openapi: "3.0.0"
	},
	host: Config.Rest.host,
	basePath: "/",
	security: [
		{
			bbToken: []
		}
	],
	apis: [
		path.resolve(__dirname, "./*.js")
	]
};
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = swaggerJSDoc(options);

const express = require('express');
const router = express.Router();

router.use(`/`, swaggerUi.serve);
router.get(`/`, swaggerUi.setup(swaggerSpec));

module.exports = router;