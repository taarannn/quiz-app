const express = require('express');
const quizController = require('../controllers/quizzes');

const router = express.Router();

router.post('/add-question', quizController.addQuestion);
router.get('/questions', quizController.viewQuestions);
router.post('/assign-quiz', quizController.assignQuiz);

module.exports = router;
