const Question = require('../model/question.js');

const initializeDatabase = async (questionList) => {
    await Question.deleteMany({});
    await Question.insertMany(questionList);
}; 

module.exports =  {
    initializeDatabase
};
