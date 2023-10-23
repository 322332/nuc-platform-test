const express = require("express");
const router = express.Router();
const Colleague = require("../../src/models/Colleague");
const Joi = require("joi");
const Team = require("../../src/models/Team");
const Permission = require("../../src/models/Permission");
const schemas = require("../schemas");
const { NotFoundError } = require("../../src/error");
const permissions = require("./permissions");

/**
 * @openapi
 * /api/teams:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 */
router.post("/", async (req, res) => {
  Joi.attempt(req.body, schemas.Team);
  const team = await Team.create(req.body);

  const userId = req.userId;
  Permission.create({ userId: userId, teamId: team.id });

  res.status(201).json(team);
});

/**
 * @openapi
 * /api/teams:
 *   get:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Team'
 */
router.get("/", async (req, res) => {
  const userId = req.userId;
  const permissions = await Permission.findAll({
    where: { userId },
  });

  const teamIds = permissions.map((permission) => permission.teamId);
  const teams = await Team.findAll({
    where: { id: teamIds },
  });

  res.status(200).json(teams);
});

/**
 * @openapi
 * /teams:
 *   put:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Team'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 */
router.put("/:id", async (req, res) => {
  Joi.attempt(req.params.id, Joi.number().required());
  Joi.attempt(req.body, schemas.Team);

  const team = await Team.findByPk(req.params.id);

  if (team) {
    await team.update(req.body);
    res.json(team);
  } else {
    throw new NotFoundError();
  }
});

/**
 * @openapi
 * /teams/{teamId}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Team'
 */
router.get("/:teamId", async (req, res) => {
  Joi.attempt(req.params.teamId, Joi.number().required());

  const team = await Team.findByPk(req.params.teamId);

  if (team) {
    res.json(team);
  } else {
    throw new NotFoundError();
  }
});

/**
 * @openapi
 * /teams/{teamId}/colleagues:
 *   get:
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Colleague'
 */
router.get("/:teamId/colleagues", async (req, res) => {
  const teamId = req.params.teamId;

  const colleagues = await Colleague.findAll({ where: { teamId } });

  res.json(colleagues);
});

/**
 * @openapi
 * /teams/{teamId}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/:id", async (req, res) => {
  Joi.attempt(req.params.id, Joi.number().required());

  const team = await Team.findByPk(req.params.id);

  if (team) {
    await team.destroy();
    res.status(204).end();
  } else {
    throw new NotFoundError();
  }
});

module.exports = router;

router.use("/", permissions);
