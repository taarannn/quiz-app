const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./services/db');

const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/quizzes', quizRoutes);
app.use('/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(9090, () => {
    console.log('Server is running on port 9090');
  });
});
