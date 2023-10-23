const { database, sequelize } = require("nuc-platform-express");
const { DataTypes } = sequelize;

const Colleague = database?.get()?.define("Colleague", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Colleague;
