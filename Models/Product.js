// modeller/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Stien skal være korrekt afhængigt af din projektstruktur
Product.belongsTo(Category);

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Product;
