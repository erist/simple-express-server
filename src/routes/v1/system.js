const express = require('express');
const router = express.Router();

const SystemController = require('../../controllers/v1/system');

/**
 * @swagger
 * /v1/ping:
 *   get:
 *     tags: [system]
 *     summary: Ping to server
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: A information object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ts:
 *                   type: integer
 *                   example: 1547449429756
 *                 version:
 *                   type: string
 *                   example: v1
 *   post:
 *     tags: [system]
 *     security: [bbToken: []]
 *     summary: Ping to server
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: A information object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ts:
 *                   type: integer
 *                   example: 1547449429756
 */
router.get("/ping",
	Rest.ApiResponse(SystemController.ping));
router.post("/ping", Middleware.auth,
	Rest.ApiResponse(SystemController.ping));

module.exports = router;
