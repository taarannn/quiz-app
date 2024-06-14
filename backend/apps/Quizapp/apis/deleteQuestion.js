const { questions } = require('./questionsData'); 

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

// Validate the delete question request
const validateRequest = (jsonReq) => {
    return jsonReq && jsonReq.questionId;
};

// Exporting the doService function
exports.doService = async (req) => {
    const jsonReq = req.data; // Extract data from the request object
    LOG.info(`Received delete question request data: ${JSON.stringify(jsonReq)}`);

    if (!validateRequest(jsonReq)) { // Validate the request
        LOG.error(`Bad delete question request ${jsonReq ? JSON.stringify(jsonReq) : "null"}.`);
        return { message: 'it will get delete' };
    } else {
        const { questionId } = jsonReq;

        // Find the index of the question with the given questionId
        const index = questions.findIndex(q => q.id === questionId);

        if (index === -1) {
            LOG.error(`Question with id ${questionId} not found.`);
            return { data: CONSTANTS.FALSE_RESULT, message: `Question with id ${questionId} not found.` };
        }

        // Remove the question from the array
        questions.splice(index, 1);

        LOG.info(`Question with id ${questionId} deleted.`);
        return { data: CONSTANTS.TRUE_RESULT };
    }
};
