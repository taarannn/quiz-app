exports.doService = async req => {
  const jsonReq = req.data;

exports.addQuestion = async (jsonReq) => {
  const { quizId, questionText, options, correctAnswer } = jsonReq.body;
  const question = await Question.create({ quizId, questionText, options, correctAnswer });
  return (question);
};

exports.viewQuestions = async (jsonReq) => {
  const questions = await Question.findAll();
  return (questions);
};

exports.assignQuiz = async (jsonReq) => {
  const { userId, quizId } = jsonReq.body;
  const assignment = await Assignment.create({ userId, quizId });
  return (assignment);
};
}
/* 
exports.doService = async (jsonReq) => {
      return { result: true, req: jsonReq }
  }
    */