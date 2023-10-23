const { database, sequelize } = require("nuc-platform-express");
const { DataTypes } = sequelize;

const Permission = database.get().define("Permission", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
  },
});

module.exports = Permission;
