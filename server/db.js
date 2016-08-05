const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/goodReads');

var Story = db.define('story', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  anger: {
    type: Sequelize.FLOAT
  },
  disgust: {
    type: Sequelize.FLOAT
  },
  fear: {
    type: Sequelize.FLOAT
  },
  joy: {
    type: Sequelize.FLOAT
  },
  sadness: {
    type: Sequelize.FLOAT
  }
});


module.exports = db;


