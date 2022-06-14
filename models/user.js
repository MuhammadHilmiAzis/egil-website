const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const database = require('../config/database')
const db = database.db

exports.userModel = db.define("users", {
  username: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    primaryKey : true
  },
  password: DataTypes.STRING,
  createdAt: false,
  updatedAt: false
});

