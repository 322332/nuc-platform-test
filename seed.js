async function seed() {
  const Permission = require("./models/Permission");
  const { permissions } = require("./seed/permissions.json");

  const Team = require("./models/Team");
  const { teams } = require("./seed/teams.json");

  const Colleague = require("./models/Colleague");
  const { colleagues } = require("./seed/colleagues.json");

  await Permission.bulkCreate(permissions);
  await Team.bulkCreate(teams);
  await Colleague.bulkCreate(colleagues);
}

module.exports = { seed };
