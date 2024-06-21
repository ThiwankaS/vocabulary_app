require('dotenv').config()
const express = require ('express');
const cors = require('cors');
const Question = require('./server/question');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

const myQuestions = [
  {   
      word : 'Minä',
      correctAnswer :'Me',
      options :['She','He','Me','You','They']
  },
  {
      word :'Sinä',
      correctAnswer :'You',
      options :['She','He','Me','You','They']
  },
  {
      word :'Hän',
      correctAnswer : 'She/He',
      options :['She/He','We','Me','You','They']
  },
  {
      word :'Opettaja',
      correctAnswer :'Teacher',
      options :['Officer','Friend','Husband','Teacher','Wife']
  }, ];

app.get('/',(resquet,response) => {
    response.send('<h1>Finnish English Vocabulary Building App</h2>');
});

app.get('/api/test',(resquet,response) => {
    response.json(myQuestions);
});

app.get('/api/questions',(resquet,response) => {
    Question.find({})
    .then(questions =>{
        if(questions){
            response.json(questions);
        } else {
            response.status(404).end();
        }
    })
    .catch(error => {
        console.log(error)
        response.status(500).end()
    })
});

app.get('/api/questions/:limit',(request, response) => {
    const limit = parseInt(request.params.limit);
    async function randomeQuestions (limit) {
      try {
        const questions = await Question.aggregate([{ $sample : { size : limit }}])
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
        response.status(500).end()
      }
    }
  randomeQuestions(limit);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});