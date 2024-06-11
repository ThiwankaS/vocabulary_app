const express = require ('express');
const cors = require('cors');

const app = express();
app.use(cors());


const myQuestions = [
    {
        id : 125210,
        progress : '#ffd64f',
        word : 'Minä',
        correctAnswer : 'Me',
        options : ['She','He','Me','You','They'],
    },
    {
        id : 125211,
        progress : '#ffd64f',
        word : 'Sinä',
        correctAnswer : 'You',
        options : ['She','He','Me','You','They']
    },
    {
        id : 125212,
        progress : '#ffd64f',
        word : 'Hän',
        correctAnswer : 'She/He',
        options : ['She/He','We','Me','You','They']
    },
    {
        id : 125213,
        progress : '#ffd64f',
        word : 'Opettaja',
        correctAnswer : 'Teacher',
        options : ['Officer','Friend','Husband','Teacher','Wife']
    },
    {
        id : 125214,
        progress : '#ffd64f',
        word : 'Ystävä',
        correctAnswer : 'Friend',
        options : ['Officer','Friend','Husband','Teacher','Wife']
    },
    {
        id : 125215,
        progress : '#ffd64f',
        word : 'Kiitos',
        correctAnswer : 'Thank you!',
        options : ['Fuck you!','Thank you!','Sorry!','Bless you!','Excuse me!']
    },
    {
        id : 125216,
        progress : '#ffd64f',
        word : 'Hyvä',
        correctAnswer : 'Good',
        options : ['Bad','God','Happy','Good','Sad']
    },
    {
        id : 125217,
        progress : '#ffd64f',
        word : 'Tietokone',
        correctAnswer : 'Computer',
        options : ['Knowledge Box','Computer','Calculator','Mobile Phone','Library']
    },
    {
        id : 125218,
        progress : '#ffd64f',
        word : 'Auto',
        correctAnswer : 'Car',
        options : ['Tree','House','Cloth','Table','Car']
    },
    {
        id : 125219,
        progress : '#ffd64f',
        word : 'Kirja',
        correctAnswer : 'Book',
        options : ['Milk','Book','Tree','Cow','Pencil']
    },
];

app.get('/',(resquet,response) => {
    response.send('<h1>Hello World</h2>');
});

app.get('/api/questions',(resquet,response) => {
    response.json(myQuestions);
});

const PORT = 3001;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});