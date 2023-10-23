const { database, sequelize } = require("nuc-platform-express");
const { DataTypes } = sequelize;

const Team = database.get().define("Team", {
  name: {
    type: DataTypes.STRING,
  },
  icon: {
    type: DataTypes.STRING,
  },
  src: {
    type: DataTypes.STRING,
  },
});

Team.associate = (models) => {
  Team.hasMany(models.Colleague, {
    foreignKey: "teamId",
    onDelete: "CASCADE",
    hooks: true,
  });
};

module.exports = Team;
