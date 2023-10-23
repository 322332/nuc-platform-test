const Joi = require("joi");

const Colleague = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  teamId: Joi.number().required(),
  createdAt: Joi.any().strip(),
  updatedAt: Joi.any().strip(),
});

module.exports = Colleague;
