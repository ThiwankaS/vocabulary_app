require('dotenv').config()
const express = require ('express');
const cors = require('cors');
const Question = require('./server/question');

const app = express();
app.use(express.json());
app.use(cors());

const myQuestions = [ // initial data to add in to the DB
    {
        word : 'Minä',
        correctAnswer : 'Me',
        options : ['She','He','Me','You','They'],
    },
    {
        word : 'Sinä',
        correctAnswer : 'You',
        options : ['She','He','Me','You','They']
    },
    {
        word : 'Hän',
        correctAnswer : 'She/He',
        options : ['She/He','We','Me','You','They']
    },
    {
        word : 'Opettaja',
        correctAnswer : 'Teacher',
        options : ['Officer','Friend','Husband','Teacher','Wife']
    },
    {
        word : 'Ystävä',
        correctAnswer : 'Friend',
        options : ['Officer','Friend','Husband','Teacher','Wife']
    },
    {
        word : 'Kiitos',
        correctAnswer : 'Thank you!',
        options : ['Fuck you!','Thank you!','Sorry!','Bless you!','Excuse me!']
    },
    {
        word : 'Hyvä',
        correctAnswer : 'Good',
        options : ['Bad','God','Happy','Good','Sad']
    },
    {
        word : 'Tietokone',
        correctAnswer : 'Computer',
        options : ['Knowledge Box','Computer','Calculator','Mobile Phone','Library']
    },
    {
        word : 'Auto',
        correctAnswer : 'Car',
        options : ['Tree','House','Cloth','Table','Car']
    },
    {
        word : 'Kirja',
        correctAnswer : 'Book',
        options : ['Milk','Book','Tree','Cow','Pencil']
    },
];

app.get('/',(resquet,response) => {
    response.send('<h1>Hello World</h2>');
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

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});