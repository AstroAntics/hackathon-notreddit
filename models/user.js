const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.PG_DB_URL);

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usertag: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pfp_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isMod: {
        type: DataTypes.BOOLEAN,
        default: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        default: false,
    }
  },
);

export default User;