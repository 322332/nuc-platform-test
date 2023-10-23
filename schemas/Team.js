const Joi = require("joi");

const Team = Joi.object({
  name: Joi.string().required(),
  icon: Joi.string().required(),
  src: Joi.string().required(),
  createdAt: Joi.any().strip(),
  updatedAt: Joi.any().strip(),
});
module.exports = Team;
