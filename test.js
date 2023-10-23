require("dotenv").config({ path: ".env.test" });

const { seed } = require("../src/database");

async function reset() {
  const Team = require("../models/Team");
  const Colleague = require("../models/Colleague");
  await Team.destroy({ truncate: true, cascade: true });
  await Colleague.destroy({ truncate: true, cascade: true });

  await seed();
}

module.exports = { reset };
