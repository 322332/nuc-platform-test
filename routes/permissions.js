const express = require("express");
const router = express.Router();
const Joi = require("joi");

const Permission = require("../models/Permission");
const schemas = require("../schemas");
const { NotFoundError } = require("../../src/error");

router.post("/:teamId/permissions", async (req, res) => {
  Joi.attempt(req.body, schemas.Permission);

  const user = req.body;

  const permission = await Permission.create(user);
  res.status(201).json(permission);
});

router.get("/:teamId/permissions", async (req, res) => {
  const teamId = req.params.teamId;

  const permissions = await Permission.findAll({ where: { teamId } });

  res.json(permissions);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const permission = await Permission.findOne({ where: { id } });
    if (permission) {
      await permission.destroy();
      res.status(204).end();
    } else {
      throw new NotFoundError();
    }
  } catch (error) {
    console.debug(error);
  }
});

module.exports = router;
