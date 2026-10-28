const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  },
  logging: false // Desativa a exibição das queries SQL no log do Render
});

module.exports = sequelize;
