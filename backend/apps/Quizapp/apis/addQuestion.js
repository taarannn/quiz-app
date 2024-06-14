const { questions, questionIdCounter } = require('./questionsData'); // Import the common module

// Simple logging (mocked)
const LOG = {
    error: (msg) => console.error(msg),
    info: (msg) => console.log(msg),
};

// Constants (mocked)
const CONSTANTS = {
    TRUE_RESULT: true,
    FALSE_RESULT: false,
};

// Validate the add question request
const validateRequest = (jsonReq) => {
    const isValid = jsonReq && jsonReq.quizId && jsonReq.questionText && Array.isArray(jsonReq.options) && jsonReq.correctAnswer !== undefined;
    LOG.info(`Validation result for request: ${JSON.stringify(jsonReq)} is ${isValid}`);
    return isValid;
};

// Exporting the doService function
exports.doService = async (req) => {
    const jsonReq = req.data; // Extract data from the request object
    LOG.info(`Received request data: ${JSON.stringify(jsonReq)}`);

    if (!validateRequest(jsonReq)) { // Validate the request
        LOG.error(`Bad add question request ${jsonReq ? JSON.stringify(jsonReq) : "null"}.`);
        return { data: CONSTANTS.FALSE_RESULT, message: 'Invalid request' };
    } else {
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
    }
};
