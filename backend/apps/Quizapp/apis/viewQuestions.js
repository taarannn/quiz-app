const { questions } = require('./questionsData'); 
exports.doService = async (req) => {
    LOG.info('Viewing all questions');
    return { data: CONSTANTS.TRUE_RESULT, questions };
};