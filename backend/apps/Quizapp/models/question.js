const { DataTypes } = require('sequelize');
const sequelize = require('../services/db');
const Quiz = require('./quiz');

const Question = sequelize.define('Question', {
  quizId: {
    type: DataTypes.INTEGER,
    references: {
      model: Quiz,
      key: 'id',
    },
  },
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  correctAnswer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Question;
