require('dotenv').config()
const express = require ('express');
const cors = require('cors');
const Question = require('./server/question');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/',(resquet,response) => {
    response.send('<h1>Finnish English Vocabulary Building App</h2>');
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
    Question.aggregate([{ $sample : { size : limit }}])
    .then(questions =>{
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
    })
    .catch(error => {
        console.log('Error fetching data : ', error.message)
        response.status(500).end()
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});