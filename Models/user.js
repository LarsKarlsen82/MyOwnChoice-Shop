const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Correct import path based on your project structure

const User = sequelize.define('User', {
  // Define your model attributes here
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Add more attributes as needed
});

module.exports = User;
