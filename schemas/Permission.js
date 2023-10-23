const Joi = require("joi");

const Permission = Joi.object({
  userId: Joi.number().required(),
  teamId: Joi.number().required(),
  createdAt: Joi.any().strip(),
  updatedAt: Joi.any().strip(),
});

module.exports = Permission;
