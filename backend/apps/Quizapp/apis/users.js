/*const { questions, questionIdCounter } = require('./questionsData');
const validateRequest = (jsonReq) => {
    return jsonReq && jsonReq.quizId && jsonReq.questionText && Array.isArray(jsonReq.options) && jsonReq.correctAnswer !== undefined;
};

// Exporting the doService function
exports.doService = async (req) => {
    const jsonReq = req.data; // Extract data from the request object

    if (!validateRequest(jsonReq)) { // Validate the request
        LOG.error(`Bad add question request ${jsonReq ? JSON.stringify(jsonReq) : "null"}.`);
        return { data: CONSTANTS.FALSE_RESULT };
    }

    const { quizId, questionText, options, correctAnswer } = jsonReq;

    const question = {
        id: questionIdCounter++,
        quizId,
        questionText,
        options,
        correctAnswer,
    };

    questions.push(question); // Save the question to mock database
    LOG.info(`Question added: ${JSON.stringify(question)}`);
    return { data: CONSTANTS.TRUE_RESULT, question };
};*/