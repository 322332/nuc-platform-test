async function init(sequelize) {
  require("./Permission");
  require("./Team");
  require("./Colleague");

  await sequelize.sync({ force: true });

  /*  if (["DEV", "TEST"].includes(process.env.PROFILE)) {
    return sequelize.sync({ force: true });
  } */
}

module.exports = { init };
