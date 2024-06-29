const Question = require('../model/question.js');

const initializeDatabase = async (questionList) => {
    await Question.deleteMany({});
    questionList.map(async (question) => {
        let questionObject = new Question(question)
        await questionObject.save();
    })
}; 

module.exports =  {
    initializeDatabase
};
