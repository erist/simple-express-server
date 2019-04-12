const express = require('express');
const router = express.Router();

const SystemController = {
	v1: require('./../controllers/v1/system')
};

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
router.get("/v1/ping", Rest.ApiResponse(SystemController.v1.ping));
router.post("/v1/ping", Rest.ApiResponse(SystemController.v1.ping));

module.exports = router;
