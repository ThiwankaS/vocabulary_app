const questionRouter = require('express').Router();
const Question = require('../model/question');

const myQuestions = [
    {   
        id : '100120',
        word : 'Minä',
        correctAnswer :'Me',
        options :['She','He','Me','You','They']
    },
    {
        id : '100121',
        word :'Sinä',
        correctAnswer :'You',
        options :['She','He','Me','You','They']
    },
    {
        id : '100122',
        word :'Hän',
        correctAnswer : 'She/He',
        options :['She/He','We','Me','You','They']
    },
    {
        id : '100123',
        word :'Opettaja',
        correctAnswer :'Teacher',
        options :['Officer','Friend','Husband','Teacher','Wife']
    }, ];


questionRouter.get('/test', async (resquet,response) => {
    response.json(myQuestions);
});

questionRouter.get('/', async (resquet,response) => {
      try {
        const questions = await Question.find({});
        if(questions){
          response.json(questions);
        } else {
          response.status(404).end();
        }
      } catch (error) {
        console.log('Error fetching data : ', error.message);
        response.status(500).end();
      }
});

questionRouter.get('/:limit', async (request, response) => {
    const limit = parseInt(request.params.limit);
      try {
        const questions = await Question.aggregate([{ $sample : { size : limit }}]);
        if(questions){
          const result = questions.map(item => {
              const temp = {
                  id : item._id,
                  word : item.word,
                  correctAnswer : item.correctAnswer,
                  options : item.options
              }
              return temp;
          })
          response.json(result);
      } else {
          response.status(404).end();
      }
      } catch (error) {
        console.log('Error fetching data : ', error.message)
        response.status(500).end();
      }
});

questionRouter.post('/', async (request, response) => {
    const body = request.body; // No need for type conversion
    try {
        const result = await Question.find({ word : body.word });
        response.json(result);
    } catch (error) {
        console.error(`Error finding the Finnish word '${finnishWord}':`, error.message);
        response.status(500).end();
    }
});

module.exports = questionRouter;