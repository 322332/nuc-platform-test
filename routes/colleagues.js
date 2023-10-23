const { express } = require("nuc-platform-express");
const router = express.Router();
const Joi = require("joi");
const Colleague = require("../models/Colleague"); // Ensure you have this model defined
const schemas = require("../schemas"); // Assuming you have Colleague schema here

/**
 * @openapi
 * /colleagues:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Colleague'
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Colleague'
 */
router.post("/", async (req, res) => {
  //Joi.attempt(req.body, schemas.Colleague);

  const colleague = await Colleague.create(req.body);
  res.status(201).json(colleague);
});

/**
 * @openapi
 * /colleagues:
 *   get:
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Colleague'
 */
router.get("/", async (req, res) => {
  const colleagues = await Colleague.findAll();

  res.json(colleagues);
});

/**
 * @openapi
 * /colleagues:
 *   put:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Colleague'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Colleague'
 */
router.put("/:id", async (req, res) => {
  Joi.attempt(req.params.id, Joi.number().required());
  Joi.attempt(req.body, schemas.Colleague);

  const colleague = await Colleague.findByPk(req.params.id);

  if (colleague) {
    await colleague.update(req.body);
    res.json(colleague);
  } else {
    throw new " NotFoundError()"();
  }
});

/**
 * @openapi
 * /colleagues/{colleagueId}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: colleagueId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Colleague'
 */
router.get("/:colleagueId", async (req, res) => {
  Joi.attempt(req.params.colleagueId, Joi.number().required());

  const colleague = await Colleague.findByPk(req.params.colleagueId);

  if (colleague) {
    res.json(colleague);
  } else {
    throw new "NotFoundError()"();
  }
});

/**
 * @openapi
 * /colleagues/{colleagueId}:
 *   delete:
 *     parameters:
 *       - in: path
 *         name: colleagueId
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/:id", async (req, res) => {
  Joi.attempt(req.params.id, Joi.number().required());

  const colleague = await Colleague.findByPk(req.params.id);

  if (colleague) {
    await colleague.destroy();
    res.status(204).end();
  } else {
    throw new "NotFoundError()"();
  }
});

module.exports = router;
